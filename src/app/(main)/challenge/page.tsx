"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Swords,
  Clock,
  Trophy,
  Users,
  Share2,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ArrowRight,
  Brain,
  Network,
  Cpu,
  Sparkles,
} from "lucide-react";
import {
  getQuizQuestionsByCategory,
  quizCategories,
  type QuizCategory,
  type QuizQuestion,
} from "@/data/quizzes";

type Phase = "select" | "playing" | "summary";
type Mode = "solo" | "challenge";
type ScoreEntry = {
  challengeId: string;
  player: string;
  score: number;
  total: number;
  timeMs: number;
  category: string;
  completedAt: string;
};

const SECONDS_PER_QUESTION = 15;
const QUESTIONS_PER_GAME = 10;
const STORAGE_KEY = "crackview_challenge_scores";

const categoryMeta: Record<
  QuizCategory | "Mixed",
  { icon: React.ComponentType<{ className?: string }>; color: string; desc: string }
> = {
  "DSA": {
    icon: Brain,
    color: "text-primary",
    desc: "Arrays, trees, graphs, sorting, complexity",
  },
  "System Design": {
    icon: Network,
    color: "text-accent",
    desc: "Caching, sharding, queues, load balancing",
  },
  "Basic CS": {
    icon: Cpu,
    color: "text-warning",
    desc: "OS, networks, DBMS, OOP fundamentals",
  },
  "Mixed": {
    icon: Sparkles,
    color: "text-success",
    desc: "All three categories blended",
  },
};

function loadScores(): ScoreEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ScoreEntry[]) : [];
  } catch {
    return [];
  }
}

function saveScore(entry: ScoreEntry) {
  if (typeof window === "undefined") return;
  const all = loadScores();
  all.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function generateChallengeId(): string {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function seedFromString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function ChallengePage() {
  const [phase, setPhase] = useState<Phase>("select");
  const [mode, setMode] = useState<Mode>("solo");
  const [category, setCategory] = useState<QuizCategory | "Mixed">("DSA");
  const [playerName, setPlayerName] = useState("You");
  const [challengeId, setChallengeId] = useState("");
  const [joinCode, setJoinCode] = useState("");

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS_PER_QUESTION);
  const [startedAt, setStartedAt] = useState<number>(0);
  const [savedThisRun, setSavedThisRun] = useState(false);
  const [copied, setCopied] = useState(false);

  // Initialize player name from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("crackview_player_name");
    if (stored) setPlayerName(stored);
  }, []);

  const persistName = (name: string) => {
    setPlayerName(name);
    if (typeof window !== "undefined") {
      localStorage.setItem("crackview_player_name", name);
    }
  };

  const startGame = useCallback(
    (id: string, cat: QuizCategory | "Mixed") => {
      const seed = seedFromString(`${id}|${cat}`);
      const picks = getQuizQuestionsByCategory(cat, QUESTIONS_PER_GAME, seed);
      setQuestions(picks);
      setAnswers(new Array(picks.length).fill(null));
      setCurrentIdx(0);
      setSecondsLeft(SECONDS_PER_QUESTION);
      setStartedAt(Date.now());
      setSavedThisRun(false);
      setPhase("playing");
    },
    []
  );

  const handleStartSolo = () => {
    const id = `SOLO-${generateChallengeId()}`;
    setChallengeId(id);
    setMode("solo");
    startGame(id, category);
  };

  const handleCreateChallenge = () => {
    const id = generateChallengeId();
    setChallengeId(id);
    setMode("challenge");
    startGame(id, category);
  };

  const handleJoinChallenge = () => {
    const id = joinCode.trim().toUpperCase();
    if (!id) return;
    setChallengeId(id);
    setMode("challenge");
    startGame(id, category);
  };

  const handleAnswer = useCallback(
    (optionIndex: number | null) => {
      const updated = [...answers];
      updated[currentIdx] = optionIndex;
      setAnswers(updated);

      if (currentIdx + 1 >= questions.length) {
        // finish
        setPhase("summary");
      } else {
        setCurrentIdx((i) => i + 1);
        setSecondsLeft(SECONDS_PER_QUESTION);
      }
    },
    [answers, currentIdx, questions.length]
  );

  // Question timer
  useEffect(() => {
    if (phase !== "playing") return;
    if (secondsLeft <= 0) {
      handleAnswer(null);
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, secondsLeft, handleAnswer]);

  const score = useMemo(() => {
    return answers.reduce<number>((sum, a, i) => {
      const q = questions[i];
      if (!q) return sum;
      return sum + (a === q.correctIndex ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  // Save the score when summary first opens
  useEffect(() => {
    if (phase !== "summary" || savedThisRun || questions.length === 0) return;
    const entry: ScoreEntry = {
      challengeId,
      player: playerName || "Player",
      score,
      total: questions.length,
      timeMs: Date.now() - startedAt,
      category,
      completedAt: new Date().toISOString(),
    };
    saveScore(entry);
    setSavedThisRun(true);
  }, [phase, savedThisRun, questions.length, score, challengeId, playerName, startedAt, category]);

  const challengeScores = useMemo(() => {
    if (mode !== "challenge") return [];
    return loadScores()
      .filter((s) => s.challengeId === challengeId)
      .sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
    // Note: re-evaluates only when phase/savedThisRun change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, challengeId, savedThisRun]);

  const resetAll = () => {
    setPhase("select");
    setQuestions([]);
    setAnswers([]);
    setCurrentIdx(0);
    setChallengeId("");
    setJoinCode("");
    setSavedThisRun(false);
  };

  const copyChallengeLink = async () => {
    if (typeof window === "undefined") return;
    const link = `${window.location.origin}/challenge?code=${challengeId}&cat=${encodeURIComponent(category)}`;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  // Auto-load challenge from URL on first render
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const cat = params.get("cat") as QuizCategory | "Mixed" | null;
    if (code && cat && [...quizCategories, "Mixed"].includes(cat)) {
      setJoinCode(code);
      setCategory(cat);
    }
  }, []);

  // ----- SELECT phase -----
  if (phase === "select") {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-4">
            <Swords className="w-3.5 h-3.5" />
            Multiplayer
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Challenge a Friend
          </h1>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            QuizUp-style rapid-fire battles. Pick a topic, race against the clock,
            and share your challenge code so a friend can play the same questions.
            Highest score wins.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-6">
          <h2 className="text-lg font-semibold text-white mb-5">Pick a Category</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[...quizCategories, "Mixed" as const].map((cat) => {
              const meta = categoryMeta[cat];
              const Icon = meta.icon;
              const active = category === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-left p-4 rounded-xl border transition ${
                    active
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background hover:border-primary/50"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${meta.color} mb-2`} />
                  <p className="text-white font-medium mb-0.5">{cat}</p>
                  <p className="text-xs text-muted">{meta.desc}</p>
                </button>
              );
            })}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-2">
              Your Display Name
            </label>
            <input
              type="text"
              value={playerName}
              onChange={(e) => persistName(e.target.value)}
              maxLength={20}
              className="w-full bg-background border border-border text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
              placeholder="e.g. Alex"
            />
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-background rounded-xl p-3 border border-border text-center">
              <p className="text-xl font-bold text-white">{QUESTIONS_PER_GAME}</p>
              <p className="text-xs text-muted">questions</p>
            </div>
            <div className="bg-background rounded-xl p-3 border border-border text-center">
              <p className="text-xl font-bold text-white">{SECONDS_PER_QUESTION}s</p>
              <p className="text-xs text-muted">per question</p>
            </div>
            <div className="bg-background rounded-xl p-3 border border-border text-center">
              <p className="text-xl font-bold text-white">MCQ</p>
              <p className="text-xs text-muted">format</p>
            </div>
          </div>

          <button
            onClick={handleStartSolo}
            className="w-full px-6 py-3 bg-card border border-border hover:bg-card-hover text-white font-medium rounded-xl transition flex items-center justify-center gap-2 mb-3"
          >
            <Brain className="w-4 h-4" />
            Practice Solo
          </button>

          <button
            onClick={handleCreateChallenge}
            className="w-full px-6 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
          >
            <Swords className="w-5 h-5" />
            Create Challenge & Get Code
          </button>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            Join a Friend&apos;s Challenge
          </h2>
          <p className="text-sm text-muted mb-4">
            Enter the 6-character code your friend shared. You&apos;ll play the same
            questions so you can compare scores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={6}
              placeholder="ABC123"
              className="flex-1 bg-background border border-border text-white rounded-xl px-4 py-3 text-sm font-mono tracking-widest text-center focus:outline-none focus:border-accent"
            />
            <button
              onClick={handleJoinChallenge}
              disabled={joinCode.trim().length === 0}
              className="px-6 py-3 bg-accent hover:bg-accent/80 text-background font-semibold rounded-xl transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Join
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----- PLAYING phase -----
  if (phase === "playing") {
    const q = questions[currentIdx];
    const isLow = secondsLeft <= 5;
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-sm text-muted">
              {currentIdx + 1} / {questions.length}
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-card border border-border text-muted">
              {q.category}
            </span>
          </div>
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-bold ${
              isLow
                ? "bg-danger/10 text-danger animate-pulse"
                : "bg-accent/10 text-accent border border-accent/20"
            }`}
          >
            <Clock className="w-4 h-4" />
            {secondsLeft}s
          </div>
        </div>

        <div className="flex gap-1 mb-6">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < currentIdx
                  ? "bg-primary"
                  : i === currentIdx
                  ? "bg-primary/50"
                  : "bg-card border border-border"
              }`}
            />
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-5">
          <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
            {q.text}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {q.options.map((opt, oi) => (
            <button
              key={oi}
              onClick={() => handleAnswer(oi)}
              className="text-left px-5 py-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/10 text-white transition flex items-center gap-3"
            >
              <span className="w-7 h-7 rounded-lg bg-background border border-border flex items-center justify-center text-xs font-bold flex-shrink-0">
                {String.fromCharCode(65 + oi)}
              </span>
              <span className="text-sm">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ----- SUMMARY phase -----
  const totalSec = Math.round((Date.now() - startedAt) / 1000);
  const percentage = Math.round((score / questions.length) * 100);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="bg-card border border-border rounded-2xl p-8 text-center mb-8">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">
          {percentage >= 70 ? "Nailed it!" : "Game Over"}
        </h2>
        <p className="text-muted mb-5">Category: {category}</p>
        <p className="text-5xl font-bold text-white mb-1">
          {score}/{questions.length}
        </p>
        <p className="text-muted mb-6">
          {percentage}% in {totalSec}s
        </p>

        {mode === "challenge" && (
          <div className="bg-background border border-border rounded-xl p-5 mb-6">
            <p className="text-xs text-muted mb-2 uppercase tracking-wider">
              Challenge Code
            </p>
            <p className="text-3xl font-mono font-bold text-accent tracking-widest mb-4">
              {challengeId}
            </p>
            <button
              onClick={copyChallengeLink}
              className="px-5 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/30 text-accent rounded-xl transition flex items-center gap-2 mx-auto"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" />
                  Copy Challenge Link
                </>
              )}
            </button>
            <p className="text-xs text-muted mt-3">
              Share this link or code so your friend plays the exact same questions.
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => startGame(challengeId, category)}
            className="px-5 py-2.5 bg-card border border-border hover:bg-card-hover text-white rounded-xl transition flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Replay Same Set
          </button>
          <button
            onClick={resetAll}
            className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl transition"
          >
            New Challenge
          </button>
        </div>
      </div>

      {mode === "challenge" && challengeScores.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-warning" />
            Leaderboard for {challengeId}
          </h3>
          <div className="space-y-2">
            {challengeScores.map((s, i) => (
              <div
                key={`${s.player}-${s.completedAt}`}
                className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                  i === 0
                    ? "bg-warning/10 border border-warning/30"
                    : "bg-background border border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      i === 0
                        ? "bg-warning text-background"
                        : "bg-card text-muted"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className="text-white font-medium">{s.player}</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-white font-bold">
                    {s.score}/{s.total}
                  </span>
                  <span className="text-muted">
                    {Math.round(s.timeMs / 1000)}s
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h3 className="text-lg font-semibold text-white mb-4">Review</h3>
      <div className="space-y-3">
        {questions.map((q, i) => {
          const userAns = answers[i];
          const correct = userAns === q.correctIndex;
          return (
            <div
              key={q.id}
              className={`bg-card border rounded-xl p-5 ${
                correct ? "border-success/30" : "border-danger/30"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                {correct ? (
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm text-white">
                  <span className="text-muted mr-2">Q{i + 1}.</span>
                  {q.text}
                </p>
              </div>
              <div className="ml-8 space-y-1">
                {q.options.map((opt, oi) => (
                  <div
                    key={oi}
                    className={`text-xs px-3 py-1.5 rounded-lg ${
                      oi === q.correctIndex
                        ? "bg-success/10 text-success"
                        : oi === userAns && oi !== q.correctIndex
                        ? "bg-danger/10 text-danger"
                        : "text-muted"
                    }`}
                  >
                    {opt}
                    {oi === q.correctIndex && " (correct)"}
                    {oi === userAns && oi !== q.correctIndex && " (your answer)"}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
