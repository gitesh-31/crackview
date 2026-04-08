"use client";

import { mockLeaderboard } from "@/data/leaderboard";
import {
  Trophy,
  Medal,
  Flame,
  Target,
  ClipboardList,
  UserPlus,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";

export default function LeaderboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLeaderboard = mockLeaderboard.filter((entry) =>
    entry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const hasData = mockLeaderboard.length > 0;

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500/10 border-yellow-500/30 text-yellow-400";
      case 2:
        return "bg-gray-400/10 border-gray-400/30 text-gray-300";
      case 3:
        return "bg-amber-600/10 border-amber-600/30 text-amber-500";
      default:
        return "bg-card border-border";
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-500" />;
      default:
        return (
          <span className="text-sm font-bold text-muted">#{rank}</span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Leaderboard</h1>
        <p className="text-muted">
          Compete with friends and track your ranking
        </p>
      </div>

      {/* Add Friend */}
      <div className="bg-card border border-border rounded-xl p-5 mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white">
            Invite friends to compete
          </p>
          <p className="text-xs text-muted mt-1">
            Add friends and compete on questions completed, test scores, and streaks
          </p>
        </div>
        <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition flex items-center gap-2 flex-shrink-0">
          <UserPlus className="w-4 h-4" />
          Add Friend
        </button>
      </div>

      {!hasData ? (
        /* Empty State */
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-muted" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-3">
            No one here yet
          </h2>
          <p className="text-muted max-w-md mx-auto mb-2">
            The leaderboard comes alive when you add friends. Invite your study
            partners and start competing on who solves more questions and scores
            higher on tests.
          </p>
          <p className="text-muted text-sm max-w-md mx-auto mb-8">
            Your progress will be tracked automatically as you solve questions
            and take tests.
          </p>
          <button className="px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl transition inline-flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Invite Your First Friend
          </button>
        </div>
      ) : (
        <>
          {/* Top 3 Podium */}
          {mockLeaderboard.length >= 3 && (
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[1, 0, 2].map((podiumIndex) => {
                const entry = mockLeaderboard[podiumIndex];
                if (!entry) return null;
                const isFirst = entry.rank === 1;

                return (
                  <div
                    key={entry.rank}
                    className={`text-center ${isFirst ? "order-2 -mt-4" : podiumIndex === 2 ? "order-3 mt-4" : "order-1 mt-4"}`}
                  >
                    <div
                      className={`border rounded-2xl p-4 sm:p-5 ${getRankStyle(entry.rank)}`}
                    >
                      <div className="flex justify-center mb-3">
                        {getRankIcon(entry.rank)}
                      </div>
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${
                          isFirst ? "bg-yellow-500/20" : "bg-primary/20"
                        } flex items-center justify-center mx-auto mb-2`}
                      >
                        <span
                          className={`text-lg font-bold ${
                            isFirst ? "text-yellow-400" : "text-primary"
                          }`}
                        >
                          {entry.avatar}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white truncate">
                        {entry.name}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {entry.questionsCompleted} questions
                      </p>
                      <p className="text-lg font-bold text-white mt-1">
                        {entry.avgScore}%
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-xl text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
          </div>

          {/* Full Leaderboard */}
          <div className="space-y-2">
            {filteredLeaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`border rounded-xl p-4 flex items-center gap-4 transition hover:bg-card-hover/50 ${getRankStyle(entry.rank)}`}
              >
                <div className="w-10 flex-shrink-0 flex justify-center">
                  {getRankIcon(entry.rank)}
                </div>

                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">
                    {entry.avatar}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-white text-sm truncate">
                    {entry.name}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted mt-0.5">
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      {entry.questionsCompleted} questions
                    </span>
                    <span className="flex items-center gap-1">
                      <ClipboardList className="w-3 h-3" />
                      {entry.testsCompleted} tests
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white">
                      {entry.avgScore}%
                    </p>
                    <p className="text-xs text-muted">avg score</p>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-orange-500/10 rounded-lg">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-bold text-orange-400">
                      {entry.streak}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
