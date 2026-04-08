import Link from "next/link";
import { ClipboardList, Clock, ArrowRight } from "lucide-react";
import { tests } from "@/data/tests";
import { getCompanyById } from "@/data/companies";
import { getRoleById } from "@/data/roles";

export default function TestsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Mock Tests</h1>
        <p className="text-muted">
          Take company-specific MCQ tests to assess your preparation
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tests.map((test, index) => {
          const company = getCompanyById(test.companyId);
          const role = getRoleById(test.roleId);

          return (
            <Link
              key={test.id}
              href={`/tests/${test.companyId}/${test.roleId}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {test.title}
                </h3>
                <p className="text-sm text-muted mb-4">
                  {company?.name} · {role?.name}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted mb-4 mt-auto">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {test.duration} min
                  </div>
                  <span>{test.questions.length} questions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                  Start Test
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
