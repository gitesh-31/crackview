"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  X,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from "lucide-react";

type QuickReply = {
  label: string;
  intent: string;
};

type Message = {
  id: string;
  from: "bot" | "user";
  body: string;
  links?: { href: string; label: string }[];
  replies?: QuickReply[];
};

const INITIAL_REPLIES: QuickReply[] = [
  { label: "Where should I start?", intent: "start" },
  { label: "How does Challenge mode work?", intent: "challenge" },
  { label: "How do Tests work?", intent: "tests" },
  { label: "Pick a company or role", intent: "company" },
  { label: "Open the Learning path", intent: "learn" },
  { label: "Virtual Interview?", intent: "virtual" },
  { label: "Leaderboard & profile", intent: "profile" },
];

function reply(intent: string): Message {
  switch (intent) {
    case "start":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "Welcome to CrackView! Here's a 4-step walkthrough to get the most out of the platform:\n\n1. Pick a company & role — browse Product or Service companies, choose a role that matches your target.\n2. Read company questions — study real interview questions for that (company, role).\n3. Take a Test — a timed 10-question MCQ assessment. Scores go to your profile.\n4. Challenge a friend — pick a category (DSA / System Design / Basic CS / Mixed), share the code, both play the exact same questions with the same timer.\n\nPro tip: the Learning tab has curated videos per topic — pick one that matches your learning style.",
        links: [
          { href: "/companies/product", label: "Browse companies" },
          { href: "/learn", label: "Go to Learning" },
          { href: "/tests", label: "Browse tests" },
        ],
        replies: [
          { label: "How do Challenges work?", intent: "challenge" },
          { label: "How do Tests work?", intent: "tests" },
          { label: "Roles available", intent: "roles" },
        ],
      };
    case "challenge":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "Challenge mode is a live 1-v-1+ quiz:\n\n1. Pick a category — DSA, System Design, Basic CS, or Mixed.\n2. Click Create Challenge — you get a 6-character code and enter a lobby.\n3. Share the code (or link) with your friend.\n4. Your friend joins from their device and lands in the same lobby. They cannot change the category — it's locked to yours.\n5. When everyone has joined, you click Start. Both players get the exact same 10 questions, with the same 15-second timer per question.\n6. Results show a live leaderboard.",
        links: [{ href: "/challenge", label: "Open Challenge" }],
        replies: [
          { label: "How to practice solo?", intent: "solo" },
          { label: "Back to start", intent: "start" },
        ],
      };
    case "solo":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "On the Challenge page click 'Practice Solo' — same format (10 questions, 15s each) but no code / no friend needed. Your score is saved locally.",
        links: [{ href: "/challenge", label: "Open Challenge" }],
        replies: [
          { label: "How do Tests work?", intent: "tests" },
          { label: "Back to start", intent: "start" },
        ],
      };
    case "tests":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "Tests are full MCQ assessments per (company, role):\n\n• 10 questions, ~15 minutes\n• Questions mix role-specific and general CS topics\n• You get a score + per-question explanations at the end\n• Every (company, role) combo is supported — pick one from the Tests page, or open a company and tap Take Test on a role.",
        links: [
          { href: "/tests", label: "Browse tests" },
          { href: "/companies/product", label: "Browse companies" },
        ],
        replies: [
          { label: "Roles available", intent: "roles" },
          { label: "How does Challenge work?", intent: "challenge" },
        ],
      };
    case "company":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "CrackView covers Product-based companies (Google, Amazon, Microsoft, Stripe, OpenAI, etc.) and Service-based companies (TCS, Infosys, Accenture, Deloitte, etc.). For each company you can browse roles, view real interview questions, and take a generated MCQ test.",
        links: [
          { href: "/companies/product", label: "Product-based" },
          { href: "/companies/service", label: "Service-based" },
        ],
        replies: [
          { label: "Roles available", intent: "roles" },
          { label: "Back to start", intent: "start" },
        ],
      };
    case "roles":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "Supported roles include: SDE, Frontend, Backend, Full Stack, DevOps, Data Engineer, ML Engineer, AI Engineer, Network Engineer, Database Admin, QA, Cloud Architect, Cloud Engineer, Security Engineer, Business Analyst, and Data Analyst. Each role has its own question bank (30+ questions per role) used in generated tests.",
        replies: [
          { label: "How do Tests work?", intent: "tests" },
          { label: "Back to start", intent: "start" },
        ],
      };
    case "learn":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "The Learn page groups resources by topic (DSA, System Design, OOP, OS, DBMS, Networks, Web, DevOps, Aptitude, Behavioral). Each topic has multiple video options, articles, courses, and practice links — pick the one that suits your learning style.",
        links: [{ href: "/learn", label: "Open Learning" }],
        replies: [
          { label: "How do Challenges work?", intent: "challenge" },
          { label: "Back to start", intent: "start" },
        ],
      };
    case "virtual":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "Virtual Interview is a simulated interview mode: you answer open-ended technical or behavioral prompts one by one, with a timer. Great for practicing how you explain things under time pressure.",
        links: [{ href: "/virtual-interview", label: "Open Virtual Interview" }],
        replies: [
          { label: "How do Tests work?", intent: "tests" },
          { label: "Back to start", intent: "start" },
        ],
      };
    case "profile":
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "The Leaderboard ranks users by tests completed, average score, and streak. Your profile shows your progress. Log in to sync across devices.",
        links: [
          { href: "/leaderboard", label: "Leaderboard" },
          { href: "/profile", label: "Profile" },
        ],
        replies: [
          { label: "How do Tests work?", intent: "tests" },
          { label: "Back to start", intent: "start" },
        ],
      };
    default:
      return {
        id: crypto.randomUUID(),
        from: "bot",
        body:
          "I can walk you through CrackView — pick a topic from the suggestions, or click 'Where should I start?' for a full tour.",
        replies: INITIAL_REPLIES,
      };
  }
}

function matchFreeText(input: string): string {
  const q = input.toLowerCase();
  if (/challenge|multiplayer|friend|code|battle/.test(q)) return "challenge";
  if (/solo|practice/.test(q)) return "solo";
  if (/test|mcq|assessment|quiz/.test(q)) return "tests";
  if (/compan|google|amazon|tcs|infosys|service|product/.test(q))
    return "company";
  if (/role|sde|frontend|backend|devops|analyst|engineer/.test(q))
    return "roles";
  if (/learn|video|resource|course|tutorial/.test(q)) return "learn";
  if (/virtual|interview simulator|mock/.test(q)) return "virtual";
  if (/leaderboard|profile|score|rank|streak/.test(q)) return "profile";
  if (/start|begin|how to use|guide|tour|walkthrough|help/.test(q))
    return "start";
  return "unknown";
}

export default function HelpAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          from: "bot",
          body:
            "Hi, I'm CrackBot 👋  I can guide you through CrackView. What would you like to do first?",
          replies: INITIAL_REPLIES,
        },
      ]);
    }
  }, [messages.length]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (userText: string, intent?: string) => {
    const userMsg: Message = {
      id: crypto.randomUUID(),
      from: "user",
      body: userText,
    };
    const intentKey = intent ?? matchFreeText(userText);
    const botMsg = reply(intentKey);
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    send(text);
  };

  const resetChat = () => {
    setMessages([]);
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open help assistant"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-3 rounded-full shadow-lg shadow-primary/30 transition"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium hidden sm:inline">
            Need help?
          </span>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(92vw,380px)] h-[min(75vh,560px)] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white leading-tight">
                  CrackBot
                </p>
                <p className="text-[11px] text-muted leading-tight">
                  Your CrackView guide
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                aria-label="Reset conversation"
                className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-card-hover"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-card-hover"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={listRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                    m.from === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-background border border-border text-white rounded-bl-sm"
                  }`}
                >
                  <p>{m.body}</p>
                  {m.links && m.links.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.links.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20"
                        >
                          {l.label}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  )}
                  {m.replies && m.replies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.replies.map((r) => (
                        <button
                          key={r.intent}
                          onClick={() => send(r.label, r.intent)}
                          className="text-xs px-2.5 py-1 rounded-full bg-card border border-border text-white hover:border-primary hover:bg-primary/10"
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="border-t border-border p-3 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tests, challenges, roles..."
              className="flex-1 bg-background border border-border text-white rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-3 py-2 bg-primary hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl text-sm"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
