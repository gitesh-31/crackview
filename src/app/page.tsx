import Link from "next/link";
import {
  GraduationCap,
  Target,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20">
          {/* Nav */}
          <nav className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CrackView</span>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/auth/login"
                className="px-5 py-2.5 text-sm font-medium text-muted hover:text-white transition"
              >
                Log In
              </Link>
              <Link
                href="/auth/signup"
                className="px-5 py-2.5 text-sm font-medium bg-primary hover:bg-primary-hover text-white rounded-lg transition"
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Your path to landing your dream job
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-6">
              Crack Any
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {" "}Interview{" "}
              </span>
              With Confidence
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
              Company-specific questions, mock tests, progress tracking, and
              learning resources — everything you need to prepare for
              product-based and service-based company interviews.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl text-lg transition flex items-center justify-center gap-2"
              >
                Start Preparing
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-8 py-4 bg-card hover:bg-card-hover text-white font-semibold rounded-xl text-lg transition border border-border"
              >
                Explore Demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A complete preparation system designed by professionals who cracked
              interviews at top companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Company-Specific",
                desc: "Questions curated for Google, Amazon, Microsoft, TCS, Infosys, and 15+ more companies.",
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: CheckCircle,
                title: "Track Progress",
                desc: "Tick off completed questions, track your daily progress, and stay on target.",
                color: "text-success",
                bg: "bg-success/10",
              },
              {
                icon: BookOpen,
                title: "Learn & Practice",
                desc: "Curated DSA, System Design, DBMS resources from top platforms like LeetCode & GFG.",
                color: "text-accent",
                bg: "bg-accent/10",
              },
              {
                icon: Users,
                title: "Compete",
                desc: "Challenge friends, climb the leaderboard, and stay motivated with streaks.",
                color: "text-warning",
                bg: "bg-warning/10",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition group"
              >
                <div
                  className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Join thousands of professionals and students who are already
            preparing smarter, not harder.
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-xl text-lg transition"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved by Vasudev Gitesh</p>
          <p className="mt-1 text-muted/60">CrackView - Interview Preparation Management System</p>
        </div>
      </footer>
    </div>
  );
}
