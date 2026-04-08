import Link from "next/link";
import { learningTopics } from "@/data/learning";
import { learningResources } from "@/data/learning";
import { ArrowRight, BookOpen } from "lucide-react";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Core CS": { bg: "bg-blue-500/10", text: "text-blue-400" },
  Development: { bg: "bg-green-500/10", text: "text-green-400" },
  Aptitude: { bg: "bg-yellow-500/10", text: "text-yellow-400" },
  "Soft Skills": { bg: "bg-purple-500/10", text: "text-purple-400" },
};

export default function LearnPage() {
  const categories = Array.from(new Set(learningTopics.map((t) => t.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">
          Learning Resources
        </h1>
        <p className="text-muted">
          Curated study materials from top platforms to strengthen your
          fundamentals
        </p>
      </div>

      {categories.map((category) => {
        const topicsInCategory = learningTopics.filter(
          (t) => t.category === category
        );
        const colors = categoryColors[category] || {
          bg: "bg-primary/10",
          text: "text-primary",
        };

        return (
          <div key={category} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text}`}
              >
                {category}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {topicsInCategory.map((topic, index) => {
                const resourceCount = learningResources.filter(
                  (r) => r.topicId === topic.id
                ).length;

                return (
                  <Link
                    key={topic.id}
                    href={`/learn/${topic.id}`}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full flex flex-col">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {topic.name}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                        {topic.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted">
                          {resourceCount} resources
                        </span>
                        <div className="flex items-center gap-1 text-sm text-primary font-medium">
                          Explore
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
