"use client";

import { useEffect, useState } from "react";
import { Flame, Calendar, Sparkles, Trophy } from "lucide-react";
import {
  recordVisit,
  getRecentActivity,
  daysEnrolled,
  type StreakState,
} from "@/lib/streak";

function motivation(current: number, longest: number): string {
  if (current <= 0) return "Start your streak today — one day at a time.";
  if (current === 1) return "Day 1. The hardest day is the first — you showed up.";
  if (current < 4)
    return "Small steps, compounding. Keep the momentum going tomorrow.";
  if (current < 7) return "Almost a full week. Consistency is the real cheat code.";
  if (current < 14)
    return "One week in 🔥  Your future self is going to thank you.";
  if (current < 30)
    return "Two weeks deep. This is the habit forming — protect it.";
  if (current === longest && current >= 30)
    return "Personal best territory. Keep breaking your own record.";
  return "A month-level streak. You're not preparing — you're unstoppable.";
}

const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

export default function StreakCard() {
  const [state, setState] = useState<StreakState | null>(null);

  useEffect(() => {
    setState(recordVisit());
  }, []);

  if (!state) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 mb-10 animate-pulse h-40" />
    );
  }

  const activity = getRecentActivity(state, 14);
  const enrolled = daysEnrolled(state);
  const msg = motivation(state.current, state.longest);

  return (
    <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-7 mb-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-warning/10 via-primary/10 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-warning/10 border border-warning/30 flex items-center justify-center flex-shrink-0">
            <Flame className="w-7 h-7 text-warning" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted mb-1">
              Current Streak
            </p>
            <p className="text-4xl font-bold text-white leading-none">
              {state.current}
              <span className="text-lg text-muted font-medium ml-2">
                {state.current === 1 ? "day" : "days"}
              </span>
            </p>
            <p className="text-sm text-white/80 mt-2 max-w-md leading-relaxed">
              {msg}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
          <div className="bg-background border border-border rounded-xl px-4 py-3 min-w-[96px]">
            <Calendar className="w-4 h-4 text-accent mb-1.5" />
            <p className="text-xl font-bold text-white leading-none">
              {enrolled}
            </p>
            <p className="text-[11px] text-muted mt-1 leading-tight">
              days enrolled
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl px-4 py-3 min-w-[96px]">
            <Trophy className="w-4 h-4 text-warning mb-1.5" />
            <p className="text-xl font-bold text-white leading-none">
              {state.longest}
            </p>
            <p className="text-[11px] text-muted mt-1 leading-tight">
              best streak
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl px-4 py-3 min-w-[96px]">
            <Sparkles className="w-4 h-4 text-primary mb-1.5" />
            <p className="text-xl font-bold text-white leading-none">
              {state.totalDays}
            </p>
            <p className="text-[11px] text-muted mt-1 leading-tight">
              active days
            </p>
          </div>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-muted uppercase tracking-wider">
            Last 14 days
          </p>
          <p className="text-[11px] text-muted">
            {activity.filter((d) => d.active).length}/14 active
          </p>
        </div>
        <div className="grid grid-cols-14 gap-1.5" style={{ gridTemplateColumns: "repeat(14, minmax(0, 1fr))" }}>
          {activity.map((d, i) => {
            const date = new Date(d.date);
            const weekday = (date.getDay() + 6) % 7; // Mon=0..Sun=6
            return (
              <div
                key={d.date}
                title={`${d.date}${d.active ? " • active" : ""}`}
                className={`aspect-square rounded-md transition ${
                  d.active
                    ? i === activity.length - 1
                      ? "bg-warning border border-warning/50 shadow-[0_0_12px_rgba(245,158,11,0.4)]"
                      : "bg-primary/80 border border-primary/50"
                    : "bg-background border border-border"
                }`}
              >
                <span className="sr-only">
                  {DAY_LABELS[weekday]} {d.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
