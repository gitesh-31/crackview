"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ClipboardList,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  Filter,
} from "lucide-react";
import { getAllTestDescriptors } from "@/lib/test-generator";
import { roles } from "@/data/roles";

type TypeFilter = "all" | "product" | "service";

const PAGE_SIZE = 30;

export default function TestsPage() {
  const allDescriptors = useMemo(() => getAllTestDescriptors(), []);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allDescriptors.filter((d) => {
      if (typeFilter !== "all" && d.companyType !== typeFilter) return false;
      if (roleFilter !== "all" && d.roleId !== roleFilter) return false;
      if (featuredOnly && !d.featured) return false;
      if (q.length > 0) {
        const hay = `${d.companyName} ${d.roleName} ${d.title}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [allDescriptors, search, typeFilter, roleFilter, featuredOnly]);

  // Featured first, then alphabetical by company name.
  const sorted = useMemo(() => {
    return filtered.slice().sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.companyName.localeCompare(b.companyName);
    });
  }, [filtered]);

  const showing = sorted.slice(0, visible);
  const featuredCount = allDescriptors.filter((d) => d.featured).length;

  // Reset pagination when filters change.
  const resetVisible = () => setVisible(PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Mock Tests</h1>
        <p className="text-muted">
          {allDescriptors.length} tests across {new Set(allDescriptors.map((d) => d.companyId)).size} companies and {roles.length} roles
        </p>
      </div>

      {/* Filter bar */}
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 mb-6">
        <div className="flex flex-col gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                resetVisible();
              }}
              placeholder="Search by company or role…"
              className="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-sm text-white placeholder:text-muted focus:outline-none focus:border-primary/50"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4">
            {/* Type tabs */}
            <div className="flex gap-1 p-1 bg-background border border-border rounded-xl w-fit">
              {(["all", "product", "service"] as TypeFilter[]).map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    setTypeFilter(t);
                    resetVisible();
                  }}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium transition capitalize ${
                    typeFilter === t
                      ? "bg-primary text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {t === "all" ? "All companies" : `${t}-based`}
                </button>
              ))}
            </div>

            {/* Role select */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted" />
              <select
                value={roleFilter}
                onChange={(e) => {
                  setRoleFilter(e.target.value);
                  resetVisible();
                }}
                className="bg-background border border-border rounded-xl px-3 py-1.5 text-sm text-white focus:outline-none focus:border-primary/50"
              >
                <option value="all">All roles</option>
                {roles.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured toggle */}
            <label className="flex items-center gap-2 text-xs text-muted cursor-pointer select-none">
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(e) => {
                  setFeaturedOnly(e.target.checked);
                  resetVisible();
                }}
                className="accent-primary w-4 h-4"
              />
              Featured only ({featuredCount})
            </label>

            <div className="lg:ml-auto text-xs text-muted">
              Showing {showing.length} of {sorted.length}
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      {sorted.length === 0 ? (
        <div className="bg-card border border-border rounded-2xl p-12 text-center">
          <p className="text-muted">No tests match your filters.</p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {showing.map((test, index) => (
              <Link
                key={`${test.companyId}-${test.roleId}`}
                href={`/tests/${test.companyId}/${test.roleId}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${Math.min(index, 10) * 30}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                      <ClipboardList className="w-6 h-6 text-primary" />
                    </div>
                    {test.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-warning/10 text-warning text-[10px] font-semibold uppercase tracking-wide">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                    {test.title}
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    {test.companyName} · {test.roleName}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted mb-4 mt-auto">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {test.duration} min
                    </div>
                    <span>{test.questionCount} questions</span>
                    <span className="capitalize text-muted/70">
                      {test.companyType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    Start Test
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {visible < sorted.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="px-6 py-2.5 bg-card border border-border hover:border-primary/50 text-white rounded-xl text-sm font-medium transition"
              >
                Load more ({sorted.length - visible} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
