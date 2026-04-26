import { jobPlatforms, JobPlatformCategory } from "@/data/jobPlatforms";
import { ExternalLink, Send } from "lucide-react";

const categoryColors: Record<JobPlatformCategory, { bg: string; text: string }> =
  {
    General: { bg: "bg-blue-500/10", text: "text-blue-400" },
    "Remote (Global)": { bg: "bg-green-500/10", text: "text-green-400" },
    "USD / International Remote": {
      bg: "bg-yellow-500/10",
      text: "text-yellow-400",
    },
    Freelance: { bg: "bg-purple-500/10", text: "text-purple-400" },
    "Tech-Specific": { bg: "bg-pink-500/10", text: "text-pink-400" },
    Internships: { bg: "bg-orange-500/10", text: "text-orange-400" },
  };

const categoryOrder: JobPlatformCategory[] = [
  "General",
  "Remote (Global)",
  "USD / International Remote",
  "Freelance",
  "Tech-Specific",
  "Internships",
];

const categoryBlurbs: Record<JobPlatformCategory, string> = {
  General: "Big general-purpose boards — start here for the widest reach.",
  "Remote (Global)":
    "Remote-only listings, open to candidates worldwide.",
  "USD / International Remote":
    "Companies that hire globally and pay in USD or equivalent.",
  Freelance: "Project-based work — bid, sell gigs, or get matched with clients.",
  "Tech-Specific":
    "Boards built for engineers, startups, and the tech ecosystem.",
  Internships: "Entry-level and student-focused internships.",
};

export default function ApplyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Send className="w-5 h-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-white">Where to Apply</h1>
        </div>
        <p className="text-muted">
          Curated platforms to find your next role — from local job boards to
          global remote and USD-paying gigs. Click any card to open the site in
          a new tab.
        </p>
      </div>

      {categoryOrder.map((category) => {
        const platformsInCategory = jobPlatforms.filter(
          (p) => p.category === category
        );
        if (platformsInCategory.length === 0) return null;
        const colors = categoryColors[category];

        return (
          <div key={category} className="mb-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text}`}
              >
                {category}
              </span>
              <span className="text-sm text-muted">
                {categoryBlurbs[category]}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {platformsInCategory.map((platform, index) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">
                        {platform.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted group-hover:text-primary transition flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {platform.description}
                    </p>
                    {platform.tags && platform.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {platform.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-[11px] font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}

      <div className="mt-10 bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted leading-relaxed">
          <span className="text-white font-medium">Tip:</span> Don&apos;t spray
          your resume across every platform. Pick 2–3 that match the work you
          actually want — remote, USD, freelance, internship — and apply
          consistently. Tailor your profile and CV to each board&apos;s
          audience.
        </p>
      </div>
    </div>
  );
}
