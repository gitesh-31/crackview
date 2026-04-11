"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import {
  Mic,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  Building2,
  Briefcase,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { companies } from "@/data/companies";
import { roles } from "@/data/roles";
import { questions } from "@/data/questions";
import type { Question } from "@/types/database";

type SelfRating = "well" | "ok" | "struggle";
type Phase = "select" | "intro" | "thinking" | "answering" | "rate" | "summary";

const THINK_SECONDS = 60;
const ANSWER_SECONDS = 180;
const NUM_QUESTIONS = 6;

function pickRandom<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  for (let i = 0; i < n && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out;
}

export default function VirtualInterviewPage() {
  const [companyId, setCompanyId] = useState<string>("");
  const [roleId, setRoleId] = useState<string>("");
  const [phase, setPhase] = useState<Phase>("select");
  const [pool, setPool] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [ratings, setRatings] = useState<SelfRating[]>([]);
  const [secondsLeft, setSecondsLeft] = useState(THINK_SECONDS);

  const availableRoleIds = useMemo(() => {
    if (!companyId) return [] as string[];
    return Array.from(
      new Set(
        questions
          .filter((q) => q.companyId === companyId)
          .map((q) => q.roleId)
      )
    );
  }, [companyId]);

  const startInterview = () => {
    const available = questions.filter(
      (q) => q.companyId === companyId && q.roleId === roleId
    );
    if (available.length === 0) return;
    const picked = pickRandom(available, Math.min(NUM_QUESTIONS, available.length));
    setPool(picked);
    setCurrentIdx(0);
    setRatings([]);
    setSecondsLeft(THINK_SECONDS);
    setPhase("intro");
  };

  const resetAll = () => {
    setPhase("select");
    setPool([]);
    setRatings([]);
    setCurrentIdx(0);
  };

  const goToThinking = useCallback(() => {
    setSecondsLeft(THINK_SECONDS);
    setPhase("thinking");
  }, []);

  const goToAnswering = useCallback(() => {
    setSecondsLeft(ANSWER_SECONDS);
    setPhase("answering");
  }, []);

  const recordRating = (rating: SelfRating) => {
    const newRatings = [...ratings, rating];
    setRatings(newRatings);
    if (currentIdx + 1 >= pool.length) {
      setPhase("summary");
    } else {
      setCurrentIdx((i) => i + 1);
      setSecondsLeft(THINK_SECONDS);
      setPhase("thinking");
    }
  };

  // Timer effect — phase transitions happen inside the timeout callback
  // (async, not synchronous in the effect body) to satisfy hooks rules.
  useEffect(() => {
    if (phase !== "thinking" && phase !== "answering") return;
    const t = setTimeout(() => {
      setSecondsLeft((s) => {
        if (s > 1) return s - 1;
        // Time's up — schedule the phase transition as a microtask
        // so we don't update two states in the same tick.
        Promise.resolve().then(() => {
          if (phase === "thinking") goToAnswering();
          else if (phase === "answering") setPhase("rate");
        });
        return 0;
      });
    }, 1000);
    return () => clearTimeout(t);
  }, [phase, secondsLeft, goToAnswering]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const currentQuestion = pool[currentIdx];

  // ----- SELECT phase -----
  if (phase === "select") {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            New Feature
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Virtual Interview Experience
          </h1>
          <p className="text-muted text-base max-w-2xl mx-auto leading-relaxed">
            Simulate a real interview round with timed questions, dedicated thinking
            and answering windows, and self-evaluation. Practice like the real thing.
          </p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white mb-5">
            Configure Your Interview
          </h2>

          <div className="space-y-5">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                <Building2 className="w-4 h-4 text-primary" />
                Target Company
              </label>
              <select
                value={companyId}
                onChange={(e) => {
                  setCompanyId(e.target.value);
                  setRoleId("");
                }}
                className="w-full bg-background border border-border text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary"
              >
                <option value="">Select a company...</option>
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                <Briefcase className="w-4 h-4 text-accent" />
                Target Role
              </label>
              <select
                value={roleId}
                onChange={(e) => setRoleId(e.target.value)}
                disabled={!companyId}
                className="w-full bg-background border border-border text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary disabled:opacity-40"
              >
                <option value="">
                  {companyId ? "Select a role..." : "Pick a company first"}
                </option>
                {roles
                  .filter((r) => availableRoleIds.includes(r.id))
                  .map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-background rounded-xl p-4 border border-border">
                <p className="text-2xl font-bold text-white">{NUM_QUESTIONS}</p>
                <p className="text-xs text-muted">questions</p>
              </div>
              <div className="bg-background rounded-xl p-4 border border-border">
                <p className="text-2xl font-bold text-white">{THINK_SECONDS}s</p>
                <p className="text-xs text-muted">to think per question</p>
              </div>
              <div className="bg-background rounded-xl p-4 border border-border">
                <p className="text-2xl font-bold text-white">
                  {Math.floor(ANSWER_SECONDS / 60)}m
                </p>
                <p className="text-xs text-muted">to answer aloud</p>
              </div>
            </div>

            <button
              onClick={startInterview}
              disabled={!companyId || !roleId}
              className="w-full px-6 py-3.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Mic className="w-5 h-5" />
              Begin Virtual Interview
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----- INTRO phase -----
  if (phase === "intro") {
    const company = companies.find((c) => c.id === companyId);
    const role = roles.find((r) => r.id === roleId);
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mic className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Ready to begin?</h2>
          <p className="text-muted mb-6">
            {company?.name} · {role?.name}
          </p>
          <div className="bg-background rounded-xl p-5 mb-6 text-left">
            <h3 className="text-sm font-semibold text-white mb-3">How it works</h3>
            <ul className="text-sm text-muted space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">1.</span>
                You will see one question at a time.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">2.</span>
                You get {THINK_SECONDS} seconds to think silently.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">3.</span>
                Then {Math.floor(ANSWER_SECONDS / 60)} minutes to answer out loud
                or in your head.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">4.</span>
                Self-rate your performance and move on. No going back.
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={resetAll}
              className="px-5 py-2.5 bg-card border border-border hover:bg-card-hover text-white rounded-xl transition"
            >
              Cancel
            </button>
            <button
              onClick={goToThinking}
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition flex items-center gap-2"
            >
              Start
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----- SUMMARY phase -----
  if (phase === "summary") {
    const wells = ratings.filter((r) => r === "well").length;
    const oks = ratings.filter((r) => r === "ok").length;
    const struggles = ratings.filter((r) => r === "struggle").length;
    const score = Math.round(((wells * 100 + oks * 50) / (pool.length * 100)) * 100);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-card border border-border rounded-2xl p-8 text-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Interview Complete
          </h2>
          <p className="text-4xl font-bold text-white mb-1">{score}%</p>
          <p className="text-muted mb-6">self-rated performance</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-success/10 border border-success/20 rounded-xl p-4">
              <p className="text-2xl font-bold text-success">{wells}</p>
              <p className="text-xs text-muted">Strong</p>
            </div>
            <div className="bg-warning/10 border border-warning/20 rounded-xl p-4">
              <p className="text-2xl font-bold text-warning">{oks}</p>
              <p className="text-xs text-muted">Okay</p>
            </div>
            <div className="bg-danger/10 border border-danger/20 rounded-xl p-4">
              <p className="text-2xl font-bold text-danger">{struggles}</p>
              <p className="text-xs text-muted">Struggled</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={resetAll}
              className="px-5 py-2.5 bg-card border border-border hover:bg-card-hover text-white rounded-xl transition flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              New Interview
            </button>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl transition"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">
          Questions you faced
        </h3>
        <div className="space-y-3">
          {pool.map((q, i) => {
            const r = ratings[i];
            const color =
              r === "well"
                ? "border-success/30"
                : r === "ok"
                ? "border-warning/30"
                : "border-danger/30";
            const Icon =
              r === "well" ? CheckCircle2 : r === "ok" ? AlertCircle : XCircle;
            const iconColor =
              r === "well"
                ? "text-success"
                : r === "ok"
                ? "text-warning"
                : "text-danger";
            return (
              <div
                key={q.id}
                className={`bg-card border ${color} rounded-xl p-5 flex items-start gap-3`}
              >
                <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className="text-sm text-white mb-1">
                    <span className="text-muted mr-2">Q{i + 1}.</span>
                    {q.text}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{q.category}</span>
                    <span>•</span>
                    <span>{q.difficulty}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ----- THINKING / ANSWERING / RATE phases (in-interview) -----
  const isLow = secondsLeft <= 10;
  const phaseLabel =
    phase === "thinking"
      ? "Think silently"
      : phase === "answering"
      ? "Answer aloud"
      : "Rate yourself";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted">
          Question {currentIdx + 1} of {pool.length}
        </div>
        {(phase === "thinking" || phase === "answering") && (
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium ${
              isLow
                ? "bg-danger/10 text-danger"
                : phase === "thinking"
                ? "bg-warning/10 text-warning border border-warning/20"
                : "bg-primary/10 text-primary border border-primary/20"
            }`}
          >
            <Clock className="w-4 h-4" />
            {formatTime(secondsLeft)}
          </div>
        )}
      </div>

      <div className="flex gap-1 mb-6">
        {pool.map((_, i) => (
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

      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            phase === "thinking"
              ? "bg-warning/10 text-warning border border-warning/20"
              : phase === "answering"
              ? "bg-primary/10 text-primary border border-primary/20"
              : "bg-accent/10 text-accent border border-accent/20"
          }`}
        >
          {phaseLabel}
        </span>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-6">
        <p className="text-lg sm:text-xl text-white leading-relaxed mb-4">
          {currentQuestion?.text}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{currentQuestion?.category}</span>
          <span>•</span>
          <span>{currentQuestion?.difficulty}</span>
        </div>
      </div>

      {phase === "thinking" && (
        <div className="text-center">
          <p className="text-muted text-sm mb-4">
            Take a breath. Sketch your approach mentally.
          </p>
          <button
            onClick={goToAnswering}
            className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl transition flex items-center gap-2 mx-auto"
          >
            I&apos;m ready to answer
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {phase === "answering" && (
        <div className="text-center">
          <p className="text-muted text-sm mb-4">
            Speak your answer out loud or write it down on paper.
          </p>
          <button
            onClick={() => setPhase("rate")}
            className="px-6 py-2.5 bg-success hover:bg-success/80 text-white rounded-xl transition"
          >
            I&apos;m done answering
          </button>
        </div>
      )}

      {phase === "rate" && (
        <div className="bg-background border border-border rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-white mb-4 text-center">
            How did that go?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => recordRating("well")}
              className="px-4 py-3 bg-success/10 hover:bg-success/20 border border-success/30 text-success rounded-xl transition flex items-center justify-center gap-2 font-medium"
            >
              <CheckCircle2 className="w-4 h-4" />
              Strong
            </button>
            <button
              onClick={() => recordRating("ok")}
              className="px-4 py-3 bg-warning/10 hover:bg-warning/20 border border-warning/30 text-warning rounded-xl transition flex items-center justify-center gap-2 font-medium"
            >
              <AlertCircle className="w-4 h-4" />
              Okay
            </button>
            <button
              onClick={() => recordRating("struggle")}
              className="px-4 py-3 bg-danger/10 hover:bg-danger/20 border border-danger/30 text-danger rounded-xl transition flex items-center justify-center gap-2 font-medium"
            >
              <XCircle className="w-4 h-4" />
              Struggled
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
