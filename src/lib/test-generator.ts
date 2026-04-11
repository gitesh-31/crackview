// Test generator: produces a deterministic Test for any (companyId, roleId)
// pair. If a hand-crafted test exists in `src/data/tests.ts` we return that;
// otherwise we synthesise a 10-question MCQ test by mixing the role-specific
// pool with a shared general pool, using a seeded RNG so the same combination
// always produces the same test.

import { Test, TestQuestion } from "@/types/database";
import { tests, getTestsByCompanyAndRole } from "@/data/tests";
import { companies } from "@/data/companies";
import { roles } from "@/data/roles";
import { generalPool, getRolePool } from "@/data/test-pool";

const QUESTIONS_PER_TEST = 10;
const ROLE_QUESTIONS = 6; // role-specific share of a generated test
const GENERAL_QUESTIONS = QUESTIONS_PER_TEST - ROLE_QUESTIONS;
const DEFAULT_DURATION_MIN = 15; // 1.5 min per question

// ---------- deterministic RNG ----------
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// FNV-1a string hash → 32-bit unsigned integer.
function seedFromString(s: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- public API ----------

/**
 * Returns the hand-crafted test for (companyId, roleId) if one exists,
 * otherwise generates a deterministic 10-question test from the role +
 * general MCQ pools. Returns `null` only if the IDs are unknown.
 */
export function getOrCreateTest(
  companyId: string,
  roleId: string
): Test | null {
  const company = companies.find((c) => c.id === companyId);
  const role = roles.find((r) => r.id === roleId);
  if (!company || !role) return null;

  // Hand-crafted test wins.
  const existing = getTestsByCompanyAndRole(companyId, roleId);
  if (existing.length > 0) return existing[0];

  // Otherwise generate one deterministically.
  const seed = seedFromString(`${companyId}|${roleId}`);
  const rng = mulberry32(seed);

  const rolePool = getRolePool(roleId);
  const rolePicks = shuffle(rolePool, rng).slice(0, ROLE_QUESTIONS);
  const generalPicks = shuffle(generalPool, rng).slice(0, GENERAL_QUESTIONS);

  // Interleave so role-specific and general questions are mixed.
  const merged: TestQuestion[] = [];
  const longest = Math.max(rolePicks.length, generalPicks.length);
  for (let i = 0; i < longest; i++) {
    if (i < rolePicks.length) merged.push(rolePicks[i]);
    if (i < generalPicks.length) merged.push(generalPicks[i]);
  }
  // Re-key question IDs so they're unique within this test.
  const questions: TestQuestion[] = merged
    .slice(0, QUESTIONS_PER_TEST)
    .map((q, idx) => ({ ...q, id: `${companyId}-${roleId}-q${idx + 1}` }));

  return {
    id: `gen-${companyId}-${roleId}`,
    companyId,
    roleId,
    title: `${company.name} ${role.name} Assessment`,
    duration: DEFAULT_DURATION_MIN,
    questions,
  };
}

export interface TestDescriptor {
  id: string;
  companyId: string;
  roleId: string;
  companyName: string;
  companyType: "product" | "service";
  roleName: string;
  title: string;
  duration: number;
  questionCount: number;
  /** True when a hand-crafted Test entry exists for this combo. */
  featured: boolean;
}

/**
 * Lightweight descriptor list for the tests listing/filter page — one entry
 * per (company, role) combination, covering the entire catalog.
 */
export function getAllTestDescriptors(): TestDescriptor[] {
  // Build a fast lookup of hand-crafted tests by `${companyId}|${roleId}`.
  const handcrafted = new Map<string, (typeof tests)[number]>();
  for (const t of tests) {
    handcrafted.set(`${t.companyId}|${t.roleId}`, t);
  }

  const out: TestDescriptor[] = [];
  for (const company of companies) {
    for (const role of roles) {
      const key = `${company.id}|${role.id}`;
      const existing = handcrafted.get(key);
      if (existing) {
        out.push({
          id: existing.id,
          companyId: company.id,
          roleId: role.id,
          companyName: company.name,
          companyType: company.type,
          roleName: role.name,
          title: existing.title,
          duration: existing.duration,
          questionCount: existing.questions.length,
          featured: true,
        });
      } else {
        out.push({
          id: `gen-${company.id}-${role.id}`,
          companyId: company.id,
          roleId: role.id,
          companyName: company.name,
          companyType: company.type,
          roleName: role.name,
          title: `${company.name} ${role.name} Assessment`,
          duration: DEFAULT_DURATION_MIN,
          questionCount: QUESTIONS_PER_TEST,
          featured: false,
        });
      }
    }
  }
  return out;
}
