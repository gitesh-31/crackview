"use client";

import { useEffect, useState, useRef } from "react";
import {
  User,
  Target,
  ClipboardList,
  Trophy,
  TrendingUp,
  Calendar,
  Pencil,
  Check,
  X,
  Camera,
  LogOut,
  Mail,
  Clock,
} from "lucide-react";
import { getCompletedCount, getTestResults } from "@/lib/progress";
import { createClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [stats, setStats] = useState({
    questionsCompleted: 0,
    testsCompleted: 0,
    avgScore: 0,
    bestScore: 0,
  });

  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatarUrl: string;
    joinedAt: string;
  }>({ name: "", email: "", avatarUrl: "", joinedAt: "" });

  const [isEditingName, setIsEditingName] = useState(false);
  const [editName, setEditName] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
    const best =
      results.length > 0
        ? Math.round(
            Math.max(...results.map((r) => (r.score / r.total) * 100))
          )
        : 0;

    setStats({
      questionsCompleted: completed,
      testsCompleted: results.length,
      avgScore: avg,
      bestScore: best,
    });

    loadUser();
  }, []);

  const loadUser = async () => {
    const supabase = createClient();
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (authUser) {
      setUser({
        name: authUser.user_metadata?.full_name || authUser.email?.split("@")[0] || "Candidate",
        email: authUser.email || "",
        avatarUrl: authUser.user_metadata?.avatar_url || "",
        joinedAt: authUser.created_at || "",
      });
      setEditName(authUser.user_metadata?.full_name || authUser.email?.split("@")[0] || "");
    }
  };

  const handleSaveName = async () => {
    const sanitized = editName.trim().replace(/<[^>]*>/g, "");
    if (sanitized.length < 2) {
      setMessage({ type: "error", text: "Name must be at least 2 characters" });
      return;
    }

    setSaving(true);
    setMessage(null);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      data: { full_name: sanitized },
    });

    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setUser((prev) => ({ ...prev, name: sanitized }));
      setIsEditingName(false);
      setMessage({ type: "success", text: "Name updated!" });
      setTimeout(() => setMessage(null), 3000);
    }
    setSaving(false);
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Please select an image file" });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setMessage({ type: "error", text: "Image must be under 2MB" });
      return;
    }

    setSaving(true);
    setMessage(null);

    // Convert to base64 data URL for storage in user metadata
    const reader = new FileReader();
    reader.onload = async () => {
      const base64 = reader.result as string;

      // Resize to a small avatar (max 200x200) to stay within metadata limits
      const resized = await resizeImage(base64, 200);

      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        data: { avatar_url: resized },
      });

      if (error) {
        setMessage({ type: "error", text: "Failed to upload photo. Try a smaller image." });
      } else {
        setUser((prev) => ({ ...prev, avatarUrl: resized }));
        setMessage({ type: "success", text: "Photo updated!" });
        setTimeout(() => setMessage(null), 3000);
      }
      setSaving(false);
    };
    reader.readAsDataURL(file);
  };

  const resizeImage = (base64: string, maxSize: number): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;
        if (width > height) {
          if (width > maxSize) {
            height = (height * maxSize) / width;
            width = maxSize;
          }
        } else {
          if (height > maxSize) {
            width = (width * maxSize) / height;
            height = maxSize;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.7));
      };
      img.src = base64;
    });
  };

  const handleRemoveAvatar = async () => {
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      data: { avatar_url: "" },
    });
    if (!error) {
      setUser((prev) => ({ ...prev, avatarUrl: "" }));
      setMessage({ type: "success", text: "Photo removed" });
      setTimeout(() => setMessage(null), 3000);
    }
    setSaving(false);
  };

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Your Profile</h1>
        <p className="text-muted">Manage your account and track progress</p>
      </div>

      {/* Status Message */}
      {message && (
        <div
          className={`mb-6 p-3 rounded-lg text-sm flex items-center gap-2 ${
            message.type === "success"
              ? "bg-success/10 border border-success/20 text-green-400"
              : "bg-danger/10 border border-danger/20 text-red-400"
          }`}
        >
          {message.type === "success" ? (
            <Check className="w-4 h-4 flex-shrink-0" />
          ) : (
            <X className="w-4 h-4 flex-shrink-0" />
          )}
          {message.text}
        </div>
      )}

      {/* Profile Card */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center flex-shrink-0">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                </span>
              )}
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={saving}
              className="absolute inset-0 w-20 h-20 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer"
            >
              <Camera className="w-5 h-5 text-white" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </div>

          {/* Name & Email */}
          <div className="flex-1 min-w-0">
            {isEditingName ? (
              <div className="flex items-center gap-2 mb-1">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  autoFocus
                  maxLength={50}
                  className="bg-background border border-border rounded-lg px-3 py-1.5 text-white text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full max-w-xs"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSaveName();
                    if (e.key === "Escape") {
                      setIsEditingName(false);
                      setEditName(user.name);
                    }
                  }}
                />
                <button
                  onClick={handleSaveName}
                  disabled={saving}
                  className="p-1.5 bg-success/20 hover:bg-success/30 rounded-lg transition text-green-400"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setIsEditingName(false);
                    setEditName(user.name);
                  }}
                  className="p-1.5 bg-danger/20 hover:bg-danger/30 rounded-lg transition text-red-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold text-white truncate">
                  {user.name || "Candidate"}
                </h2>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="p-1.5 hover:bg-border/50 rounded-lg transition text-muted hover:text-white flex-shrink-0"
                  title="Edit name"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {user.email || "—"}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Joined {formatDate(user.joinedAt)}
              </span>
            </div>

            {/* Avatar actions */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={saving}
                className="text-xs text-primary hover:text-primary-hover font-medium transition"
              >
                {user.avatarUrl ? "Change Photo" : "Upload Photo"}
              </button>
              {user.avatarUrl && (
                <button
                  onClick={handleRemoveAvatar}
                  disabled={saving}
                  className="text-xs text-muted hover:text-red-400 font-medium transition"
                >
                  Remove Photo
                </button>
              )}
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-danger/10 hover:bg-danger/20 text-red-400 text-sm font-medium rounded-lg transition flex items-center gap-2 flex-shrink-0"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: "Questions Done",
            value: stats.questionsCompleted,
            icon: Target,
            color: "text-primary",
            bg: "bg-primary/10",
          },
          {
            label: "Tests Taken",
            value: stats.testsCompleted,
            icon: ClipboardList,
            color: "text-accent",
            bg: "bg-accent/10",
          },
          {
            label: "Avg Score",
            value: `${stats.avgScore}%`,
            icon: TrendingUp,
            color: "text-warning",
            bg: "bg-warning/10",
          },
          {
            label: "Best Score",
            value: `${stats.bestScore}%`,
            icon: Trophy,
            color: "text-success",
            bg: "bg-success/10",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-5"
          >
            <div
              className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center mb-3`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Recent Activity
        </h3>
        {stats.testsCompleted > 0 || stats.questionsCompleted > 0 ? (
          <div className="space-y-3">
            {stats.questionsCompleted > 0 && (
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white">
                    Completed {stats.questionsCompleted} interview questions
                  </p>
                  <p className="text-xs text-muted">Keep going!</p>
                </div>
              </div>
            )}
            {stats.testsCompleted > 0 && (
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <ClipboardList className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white">
                    Completed {stats.testsCompleted} mock tests with{" "}
                    {stats.avgScore}% avg score
                  </p>
                  <p className="text-xs text-muted">Great effort!</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <Calendar className="w-12 h-12 text-muted mx-auto mb-3" />
            <p className="text-muted">
              No activity yet. Start solving questions or take a test!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
