import Link from "next/link";
import { ArrowLeft, ExternalLink, BookOpen } from "lucide-react";
import { getTopicById, getResourcesByTopic } from "@/data/learning";

const typeColors: Record<string, { bg: string; text: string }> = {
  Article: { bg: "bg-blue-500/10", text: "text-blue-400" },
  Video: { bg: "bg-red-500/10", text: "text-red-400" },
  Course: { bg: "bg-green-500/10", text: "text-green-400" },
  Practice: { bg: "bg-yellow-500/10", text: "text-yellow-400" },
  Documentation: { bg: "bg-purple-500/10", text: "text-purple-400" },
};

const difficultyColors: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "bg-success/10", text: "text-success" },
  Intermediate: { bg: "bg-warning/10", text: "text-warning" },
  Advanced: { bg: "bg-danger/10", text: "text-danger" },
};

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topicId: string }>;
}) {
  const { topicId } = await params;
  const topic = getTopicById(topicId);
  const resources = getResourcesByTopic(topicId);

  if (!topic) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Topic not found</h1>
        <Link href="/learn" className="text-primary mt-4 inline-block">
          Go back
        </Link>
      </div>
    );
  }

  // Group by type
  const types = Array.from(new Set(resources.map((r) => r.type)));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-4 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Topics
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{topic.name}</h1>
            <p className="text-muted text-sm">{topic.description}</p>
          </div>
        </div>
      </div>

      {/* Resources grouped by type */}
      {types.map((type) => {
        const typeResources = resources.filter((r) => r.type === type);
        const typeColor = typeColors[type] || {
          bg: "bg-primary/10",
          text: "text-primary",
        };

        return (
          <div key={type} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${typeColor.bg} ${typeColor.text}`}
              >
                {type}
              </span>
              <span className="text-xs text-muted">
                {typeResources.length} resources
              </span>
            </div>

            <div className="space-y-3">
              {typeResources.map((resource) => {
                const diffColor = difficultyColors[resource.difficulty] || {
                  bg: "bg-muted/10",
                  text: "text-muted",
                };

                return (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-white group-hover:text-primary transition truncate">
                          {resource.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-muted">
                            {resource.platform}
                          </span>
                          <span
                            className={`px-2 py-0.5 text-xs font-medium rounded-full ${diffColor.bg} ${diffColor.text}`}
                          >
                            {resource.difficulty}
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition flex-shrink-0 ml-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
