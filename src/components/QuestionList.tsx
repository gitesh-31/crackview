"use client";

import { useState, useEffect } from "react";
import { Question } from "@/types/database";
import {
  toggleQuestion,
  isQuestionCompleted,
  getCompletedCountForSet,
} from "@/lib/progress";
import { CheckCircle, Circle, Filter } from "lucide-react";

interface QuestionListProps {
  questions: Question[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const questionIds = questions.map((q) => q.id);
  const categories = Array.from(new Set(questions.map((q) => q.category)));

  useEffect(() => {
    const map: Record<string, boolean> = {};
    questions.forEach((q) => {
      map[q.id] = isQuestionCompleted(q.id);
    });
    setCompletedMap(map);
  }, [questions]);

  const handleToggle = (questionId: string) => {
    const newState = toggleQuestion(questionId);
    setCompletedMap((prev) => ({ ...prev, [questionId]: newState }));
  };

  const completedCount = Object.values(completedMap).filter(Boolean).length;
  const totalCount = questions.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const filteredQuestions = questions.filter((q) => {
    if (filter === "completed" && !completedMap[q.id]) return false;
    if (filter === "pending" && completedMap[q.id]) return false;
    if (difficultyFilter !== "all" && q.difficulty !== difficultyFilter) return false;
    if (categoryFilter !== "all" && q.category !== categoryFilter) return false;
    return true;
  });

  const difficultyColor = (d: string) => {
    switch (d) {
      case "Easy":
        return "text-success bg-success/10";
      case "Medium":
        return "text-warning bg-warning/10";
      case "Hard":
        return "text-danger bg-danger/10";
      default:
        return "text-muted bg-muted/10";
    }
  };

  return (
    <div>
      {/* Progress Bar */}
      <div className="bg-card border border-border rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-white">Your Progress</h3>
          <span className="text-sm text-muted">
            {completedCount} / {totalCount} completed
          </span>
        </div>
        <div className="w-full h-3 bg-background rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs text-muted mt-2">
          {Math.round(progressPercent)}% complete
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-1">
          {(["all", "pending", "completed"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition ${
                filter === f
                  ? "bg-primary text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="bg-card border border-border rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Questions */}
      <div className="space-y-3">
        {filteredQuestions.map((question, index) => {
          const isCompleted = completedMap[question.id];
          const globalIndex = questions.indexOf(question) + 1;

          return (
            <div
              key={question.id}
              className={`bg-card border rounded-xl p-4 transition-all cursor-pointer group ${
                isCompleted
                  ? "border-success/30 bg-success/5"
                  : "border-border hover:border-primary/30"
              }`}
              onClick={() => handleToggle(question.id)}
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <div className="flex-shrink-0 mt-0.5">
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-success" />
                  ) : (
                    <Circle className="w-6 h-6 text-muted group-hover:text-primary transition" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <p
                      className={`text-sm leading-relaxed ${
                        isCompleted
                          ? "text-muted line-through"
                          : "text-white"
                      }`}
                    >
                      <span className="font-mono text-muted mr-2">
                        #{globalIndex}
                      </span>
                      {question.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${difficultyColor(
                        question.difficulty
                      )}`}
                    >
                      {question.difficulty}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {question.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 text-muted mx-auto mb-4" />
          <p className="text-muted">No questions match your filters.</p>
        </div>
      )}
    </div>
  );
}
