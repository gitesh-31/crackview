// Client-side login streak tracking using localStorage.
// A "visit" is counted once per calendar day (local time).

const STREAK_KEY = "crackview_streak";
const DAY_MS = 24 * 60 * 60 * 1000;

export interface StreakState {
  /** ISO date (YYYY-MM-DD) of the very first recorded visit. */
  firstVisit: string;
  /** ISO date (YYYY-MM-DD) of the most recent visit. */
  lastVisit: string;
  /** Current consecutive-day streak. */
  current: number;
  /** All-time best streak. */
  longest: number;
  /** Unique days visited in total. */
  totalDays: number;
  /** Set of ISO dates the user has visited (YYYY-MM-DD). */
  history: string[];
}

function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseISODate(s: string): Date {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

function emptyState(todayIso: string): StreakState {
  return {
    firstVisit: todayIso,
    lastVisit: todayIso,
    current: 1,
    longest: 1,
    totalDays: 1,
    history: [todayIso],
  };
}

function readRaw(): StreakState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StreakState>;
    if (!parsed.firstVisit || !parsed.lastVisit) return null;
    return {
      firstVisit: parsed.firstVisit,
      lastVisit: parsed.lastVisit,
      current: parsed.current ?? 1,
      longest: parsed.longest ?? 1,
      totalDays: parsed.totalDays ?? 1,
      history: parsed.history ?? [parsed.lastVisit],
    };
  } catch {
    return null;
  }
}

function write(state: StreakState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STREAK_KEY, JSON.stringify(state));
}

/**
 * Records today's visit and returns the updated streak state. Safe to call
 * on every dashboard mount — it only mutates once per calendar day.
 */
export function recordVisit(now: Date = new Date()): StreakState {
  const todayIso = toISODate(now);
  const prev = readRaw();

  if (!prev) {
    const fresh = emptyState(todayIso);
    write(fresh);
    return fresh;
  }

  if (prev.lastVisit === todayIso) {
    return prev;
  }

  const lastDate = parseISODate(prev.lastVisit);
  const diffDays = Math.round(
    (parseISODate(todayIso).getTime() - lastDate.getTime()) / DAY_MS
  );

  let current = prev.current;
  if (diffDays === 1) {
    current = prev.current + 1;
  } else if (diffDays > 1) {
    current = 1;
  }
  // diffDays <= 0 shouldn't happen (clock skew) — keep previous.

  const history = prev.history.includes(todayIso)
    ? prev.history
    : [...prev.history, todayIso];
  const totalDays = history.length;
  const longest = Math.max(prev.longest, current);

  const next: StreakState = {
    firstVisit: prev.firstVisit,
    lastVisit: todayIso,
    current,
    longest,
    totalDays,
    history,
  };
  write(next);
  return next;
}

/**
 * Returns an array of the last `n` days (oldest → newest) with a flag
 * indicating whether the user visited on that day. Useful for the
 * heatmap-style streak visual.
 */
export function getRecentActivity(
  state: StreakState,
  n = 14,
  now: Date = new Date()
): { date: string; active: boolean }[] {
  const set = new Set(state.history);
  const out: { date: string; active: boolean }[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const iso = toISODate(d);
    out.push({ date: iso, active: set.has(iso) });
  }
  return out;
}

/** Days elapsed since the user first visited (inclusive of today). */
export function daysEnrolled(state: StreakState, now: Date = new Date()): number {
  const first = parseISODate(state.firstVisit);
  const today = parseISODate(toISODate(now));
  const diff =
    Math.round((today.getTime() - first.getTime()) / DAY_MS) + 1;
  return Math.max(diff, 1);
}
