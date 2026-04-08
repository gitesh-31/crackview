import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Briefcase } from "lucide-react";
import { getCompaniesByType } from "@/data/companies";
import { CompanyType } from "@/types/database";

const companyColors: Record<string, string> = {
  google: "from-blue-500 to-red-500",
  amazon: "from-orange-500 to-yellow-500",
  microsoft: "from-blue-600 to-cyan-500",
  meta: "from-blue-500 to-indigo-500",
  apple: "from-gray-400 to-gray-600",
  netflix: "from-red-600 to-red-800",
  uber: "from-black to-gray-700",
  adobe: "from-red-500 to-red-700",
  salesforce: "from-blue-400 to-blue-600",
  flipkart: "from-yellow-400 to-blue-600",
  tcs: "from-blue-600 to-blue-800",
  infosys: "from-blue-500 to-indigo-600",
  wipro: "from-purple-500 to-blue-600",
  hcl: "from-blue-700 to-blue-900",
  cognizant: "from-blue-500 to-purple-600",
  accenture: "from-purple-600 to-purple-800",
  capgemini: "from-blue-600 to-teal-500",
  techm: "from-red-500 to-blue-600",
  deloitte: "from-green-600 to-green-800",
  lti: "from-blue-600 to-indigo-700",
};

export default async function CompaniesPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const companyType = type as CompanyType;
  const companies = getCompaniesByType(companyType);
  const isProduct = companyType === "product";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-4 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              isProduct ? "bg-primary/10" : "bg-accent/10"
            }`}
          >
            {isProduct ? (
              <Building2 className="w-6 h-6 text-primary" />
            ) : (
              <Briefcase className="w-6 h-6 text-accent" />
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              {isProduct ? "Product-Based" : "Service-Based"} Companies
            </h1>
            <p className="text-muted">
              Select a company to view roles and interview questions
            </p>
          </div>
        </div>
      </div>

      {/* Company Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {companies.map((company, index) => (
          <Link
            key={company.id}
            href={`/companies/${type}/${company.id}/roles`}
            className="group animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all h-full">
              {/* Company Header */}
              <div
                className={`h-24 bg-gradient-to-r ${
                  companyColors[company.id] || "from-primary to-accent"
                } flex items-center justify-center`}
              >
                <span className="text-4xl font-bold text-white/90">
                  {company.logo}
                </span>
              </div>

              {/* Company Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {company.name}
                </h3>
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {company.industry}
                </span>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {company.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  View Roles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
