"use client";

import { useState, useEffect, useCallback } from "react";
import { Test, TestResult } from "@/types/database";
import { saveTestResult } from "@/lib/progress";
import {
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Trophy,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

interface TestRunnerProps {
  test: Test;
}

type TestState = "ready" | "running" | "finished";

export default function TestRunner({ test }: TestRunnerProps) {
  const [state, setState] = useState<TestState>("ready");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(test.questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(test.duration * 60);
  const [showExplanation, setShowExplanation] = useState(false);

  const finishTest = useCallback(() => {
    setState("finished");
    const score = test.questions.reduce((sum, q, i) => {
      return sum + (answers[i] === q.correctIndex ? 1 : 0);
    }, 0);
    const result: TestResult = {
      testId: test.id,
      score,
      total: test.questions.length,
      completedAt: new Date().toISOString(),
    };
    saveTestResult(result);
  }, [test, answers]);

  // Timer
  useEffect(() => {
    if (state !== "running") return;
    if (timeLeft <= 0) {
      finishTest();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [state, timeLeft, finishTest]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
  };

  const score = test.questions.reduce((sum, q, i) => {
    return sum + (answers[i] === q.correctIndex ? 1 : 0);
  }, 0);

  // Ready state
  if (state === "ready") {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{test.title}</h2>
          <p className="text-muted mb-6">
            {test.questions.length} questions · {test.duration} minutes
          </p>
          <div className="bg-background rounded-xl p-4 mb-6 text-left">
            <h3 className="text-sm font-medium text-white mb-2">
              Instructions:
            </h3>
            <ul className="text-sm text-muted space-y-1">
              <li>
                - Each question has 4 options with one correct answer
              </li>
              <li>
                - You can navigate between questions
              </li>
              <li>
                - The test will auto-submit when time runs out
              </li>
              <li>
                - Your score will be saved after completion
              </li>
            </ul>
          </div>
          <button
            onClick={() => setState("running")}
            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  // Finished state
  if (state === "finished") {
    const percentage = Math.round((score / test.questions.length) * 100);
    const passed = percentage >= 60;

    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-card border border-border rounded-2xl p-8 text-center mb-8">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              passed ? "bg-success/10" : "bg-danger/10"
            }`}
          >
            {passed ? (
              <Trophy className="w-10 h-10 text-success" />
            ) : (
              <XCircle className="w-10 h-10 text-danger" />
            )}
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {passed ? "Congratulations!" : "Keep Practicing!"}
          </h2>
          <p className="text-4xl font-bold text-white mb-1">
            {score}/{test.questions.length}
          </p>
          <p className="text-muted mb-6">{percentage}% score</p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setState("ready");
                setCurrentQ(0);
                setAnswers(new Array(test.questions.length).fill(null));
                setTimeLeft(test.duration * 60);
                setShowExplanation(false);
              }}
              className="px-6 py-2.5 bg-card border border-border hover:bg-card-hover text-white rounded-xl transition flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retry
            </button>
            <Link
              href="/tests"
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl transition"
            >
              All Tests
            </Link>
          </div>
        </div>

        {/* Review Answers */}
        <h3 className="text-lg font-semibold text-white mb-4">
          Review Answers
        </h3>
        <div className="space-y-4">
          {test.questions.map((q, i) => {
            const isCorrect = answers[i] === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`bg-card border rounded-xl p-5 ${
                  isCorrect ? "border-success/30" : "border-danger/30"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
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
                          : oi === answers[i] && oi !== q.correctIndex
                          ? "bg-danger/10 text-danger"
                          : "text-muted"
                      }`}
                    >
                      {opt}
                      {oi === q.correctIndex && " (correct)"}
                      {oi === answers[i] && oi !== q.correctIndex && " (your answer)"}
                    </div>
                  ))}
                  <p className="text-xs text-muted mt-2 italic">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Running state
  const question = test.questions[currentQ];
  const isTimeLow = timeLeft < 60;

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-muted">
          Question {currentQ + 1} of {test.questions.length}
        </div>
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium ${
            isTimeLow
              ? "bg-danger/10 text-danger"
              : "bg-card border border-border text-white"
          }`}
        >
          <Clock className="w-4 h-4" />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1 mb-6 flex-wrap">
        {test.questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentQ(i)}
            className={`w-8 h-8 rounded-lg text-xs font-medium transition ${
              i === currentQ
                ? "bg-primary text-white"
                : answers[i] !== null
                ? "bg-primary/20 text-primary"
                : "bg-card border border-border text-muted hover:border-primary/50"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Question */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6">
        <p className="text-lg text-white leading-relaxed mb-6">
          <span className="text-muted mr-2 font-mono">Q{currentQ + 1}.</span>
          {question.text}
        </p>

        <div className="space-y-3">
          {question.options.map((option, oi) => (
            <button
              key={oi}
              onClick={() => handleAnswer(oi)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition text-sm ${
                answers[currentQ] === oi
                  ? "border-primary bg-primary/10 text-white"
                  : "border-border bg-background text-muted hover:border-primary/50 hover:text-white"
              }`}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + oi)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentQ((c) => Math.max(0, c - 1))}
          disabled={currentQ === 0}
          className="px-5 py-2.5 bg-card border border-border text-white rounded-xl transition hover:bg-card-hover disabled:opacity-30"
        >
          Previous
        </button>

        {currentQ === test.questions.length - 1 ? (
          <button
            onClick={finishTest}
            className="px-6 py-2.5 bg-success hover:bg-success/80 text-white font-semibold rounded-xl transition"
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={() =>
              setCurrentQ((c) => Math.min(test.questions.length - 1, c + 1))
            }
            className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl transition flex items-center gap-2"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
