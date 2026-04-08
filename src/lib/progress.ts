// Client-side progress tracking using localStorage
// Will be replaced with Supabase when backend is connected

import { UserProgress, TestResult } from "@/types/database";

const PROGRESS_KEY = "interview_prep_progress";
const TEST_RESULTS_KEY = "interview_prep_test_results";

function safeJsonParse<T>(data: string | null, fallback: T): T {
  if (!data) return fallback;
  try {
    return JSON.parse(data) as T;
  } catch {
    return fallback;
  }
}

export function getProgress(): Record<string, UserProgress> {
  if (typeof window === "undefined") return {};
  return safeJsonParse(localStorage.getItem(PROGRESS_KEY), {});
}

export function toggleQuestion(questionId: string): boolean {
  const progress = getProgress();
  const current = progress[questionId];

  if (current?.completed) {
    delete progress[questionId];
  } else {
    progress[questionId] = {
      questionId,
      completed: true,
      completedAt: new Date().toISOString(),
    };
  }

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  return !current?.completed;
}

export function isQuestionCompleted(questionId: string): boolean {
  const progress = getProgress();
  return progress[questionId]?.completed ?? false;
}

export function getCompletedCount(): number {
  const progress = getProgress();
  return Object.values(progress).filter((p) => p.completed).length;
}

export function getCompletedCountForSet(questionIds: string[]): number {
  const progress = getProgress();
  return questionIds.filter((id) => progress[id]?.completed).length;
}

export function saveTestResult(result: TestResult): void {
  const results = getTestResults();
  results.push(result);
  localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(results));
}

export function getTestResults(): TestResult[] {
  if (typeof window === "undefined") return [];
  return safeJsonParse(localStorage.getItem(TEST_RESULTS_KEY), []);
}

export function getTestResultsForTest(testId: string): TestResult[] {
  return getTestResults().filter((r) => r.testId === testId);
}
