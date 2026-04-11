"use client";

import Link from "next/link";
import {
  Building2,
  Briefcase,
  ArrowRight,
  BookOpen,
  Trophy,
  ClipboardList,
  TrendingUp,
  Mic,
  Swords,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getCompletedCount, getTestResults } from "@/lib/progress";

export default function DashboardPage() {
  const [stats, setStats] = useState({ questions: 0, tests: 0, avgScore: 0 });

  useEffect(() => {
    const completed = getCompletedCount();
    const results = getTestResults();
    const avg =
      results.length > 0
        ? Math.round(
            results.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) /
              results.length
          )
        : 0;
    setStats({ questions: completed, tests: results.length, avgScore: avg });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Welcome */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to CrackView
        </h1>
        <p className="text-muted text-lg">
          Choose your path and start preparing for your dream job.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          {
            label: "Questions Done",
            value: stats.questions,
            icon: TrendingUp,
            color: "text-primary",
          },
          {
            label: "Tests Taken",
            value: stats.tests,
            icon: ClipboardList,
            color: "text-accent",
          },
          {
            label: "Avg Score",
            value: `${stats.avgScore}%`,
            icon: Trophy,
            color: "text-warning",
          },
          {
            label: "Topics",
            value: "10+",
            icon: BookOpen,
            color: "text-success",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-5"
          >
            <stat.icon className={`w-5 h-5 ${stat.color} mb-2`} />
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Company Type Selection */}
      <h2 className="text-xl font-semibold text-white mb-6">
        Choose Your Target Company Type
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Product-Based */}
        <Link href="/companies/product" className="group">
          <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all card-glow overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Product-Based Companies
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Prepare for top product companies like Google, Amazon, Microsoft,
                Meta, Apple, Netflix, and more. Focus on DSA, system design, and
                problem-solving.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Google", "Amazon", "Microsoft", "Meta", "Apple", "Netflix"].map(
                  (name) => (
                    <span
                      key={name}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                Explore Companies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </Link>

        {/* Service-Based */}
        <Link href="/companies/service" className="group">
          <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all card-glow overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Briefcase className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Service-Based Companies
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Prepare for leading service companies like TCS, Infosys, Wipro,
                HCL, Cognizant, Accenture, and more. Focus on fundamentals, SQL,
                and aptitude.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["TCS", "Infosys", "Wipro", "HCL", "Accenture", "Deloitte"].map(
                  (name) => (
                    <span
                      key={name}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
              <div className="flex items-center gap-2 text-accent font-medium">
                Explore Companies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Featured Modes */}
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-accent" />
        Practice Modes
      </h2>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
        <Link href="/virtual-interview" className="group">
          <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/50 transition-all overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Mic className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Virtual Interview Experience
              </h3>
              <p className="text-muted text-sm mb-5 leading-relaxed">
                Simulate a real interview round. Get timed thinking and answering
                windows on company-specific questions, then self-rate your
                performance.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                Start Practicing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </Link>

        <Link href="/challenge" className="group">
          <div className="relative bg-card border border-border rounded-2xl p-7 hover:border-accent/50 transition-all overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/15 to-transparent rounded-bl-full" />
            <div className="relative">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Swords className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Challenge a Friend
              </h3>
              <p className="text-muted text-sm mb-5 leading-relaxed">
                QuizUp-style rapid-fire battles on System Design, DSA, and Basic
                CS. Create a code, share with a friend, and see who scores
                higher.
              </p>
              <div className="flex items-center gap-2 text-accent font-medium text-sm">
                Battle Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Quick Links */}
      <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <Link
          href="/tests"
          className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition group"
        >
          <ClipboardList className="w-6 h-6 text-primary mb-3" />
          <h3 className="font-semibold text-white mb-1">Take a Test</h3>
          <p className="text-sm text-muted">
            MCQ-based assessments for your target company
          </p>
        </Link>
        <Link
          href="/learn"
          className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition group"
        >
          <BookOpen className="w-6 h-6 text-accent mb-3" />
          <h3 className="font-semibold text-white mb-1">Learn Concepts</h3>
          <p className="text-sm text-muted">
            DSA, System Design, DBMS, and more
          </p>
        </Link>
        <Link
          href="/leaderboard"
          className="bg-card border border-border rounded-xl p-5 hover:border-warning/50 transition group"
        >
          <Trophy className="w-6 h-6 text-warning mb-3" />
          <h3 className="font-semibold text-white mb-1">Leaderboard</h3>
          <p className="text-sm text-muted">
            See where you stand among peers
          </p>
        </Link>
      </div>
    </div>
  );
}
