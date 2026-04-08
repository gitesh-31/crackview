import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCompanyById } from "@/data/companies";
import { roles } from "@/data/roles";
import { getAvailableRolesForCompany } from "@/data/questions";

const roleColorMap: Record<string, { bg: string; text: string; border: string }> = {
  sde: { bg: "bg-blue-500/10", text: "text-blue-400", border: "hover:border-blue-500/50" },
  frontend: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "hover:border-cyan-500/50" },
  backend: { bg: "bg-green-500/10", text: "text-green-400", border: "hover:border-green-500/50" },
  fullstack: { bg: "bg-purple-500/10", text: "text-purple-400", border: "hover:border-purple-500/50" },
  devops: { bg: "bg-orange-500/10", text: "text-orange-400", border: "hover:border-orange-500/50" },
  "data-engineer": { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "hover:border-yellow-500/50" },
  "ml-engineer": { bg: "bg-pink-500/10", text: "text-pink-400", border: "hover:border-pink-500/50" },
  "network-engineer": { bg: "bg-teal-500/10", text: "text-teal-400", border: "hover:border-teal-500/50" },
  "db-admin": { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "hover:border-indigo-500/50" },
  "qa-engineer": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "hover:border-emerald-500/50" },
  "cloud-architect": { bg: "bg-sky-500/10", text: "text-sky-400", border: "hover:border-sky-500/50" },
  "security-engineer": { bg: "bg-red-500/10", text: "text-red-400", border: "hover:border-red-500/50" },
  "ai-engineer": { bg: "bg-violet-500/10", text: "text-violet-400", border: "hover:border-violet-500/50" },
};

export default async function RolesPage({
  params,
}: {
  params: Promise<{ type: string; companyId: string }>;
}) {
  const { type, companyId } = await params;
  const company = getCompanyById(companyId);
  const availableRoleIds = getAvailableRolesForCompany(companyId);
  const availableRoles = roles.filter((r) => availableRoleIds.includes(r.id));

  if (!company) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Company not found</h1>
        <Link href={`/companies/${type}`} className="text-primary mt-4 inline-block">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/companies/${type}`}
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-4 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Companies
        </Link>
        <h1 className="text-2xl font-bold text-white mb-1">
          {company.name} - Select a Role
        </h1>
        <p className="text-muted">
          Choose a role to view interview questions specific to {company.name}
        </p>
      </div>

      {/* Roles Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {availableRoles.map((role, index) => {
          const colors = roleColorMap[role.id] || {
            bg: "bg-primary/10",
            text: "text-primary",
            border: "hover:border-primary/50",
          };
          return (
            <Link
              key={role.id}
              href={`/companies/${type}/${companyId}/roles/${role.id}/questions`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`bg-card border border-border rounded-2xl p-6 ${colors.border} transition-all h-full`}
              >
                <div
                  className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <span className={`text-2xl font-bold ${colors.text}`}>
                    {role.icon.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {role.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {role.description}
                </p>
                <div
                  className={`flex items-center gap-2 text-sm ${colors.text} font-medium`}
                >
                  View Questions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {availableRoles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted text-lg">
            No questions available for this company yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
