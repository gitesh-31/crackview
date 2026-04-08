import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCompanyById } from "@/data/companies";
import { getRoleById } from "@/data/roles";
import { getQuestionsByCompanyAndRole } from "@/data/questions";
import QuestionList from "@/components/QuestionList";

export default async function QuestionsPage({
  params,
}: {
  params: Promise<{ type: string; companyId: string; roleId: string }>;
}) {
  const { type, companyId, roleId } = await params;
  const company = getCompanyById(companyId);
  const role = getRoleById(roleId);
  const questions = getQuestionsByCompanyAndRole(companyId, roleId);

  if (!company || !role) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-white">Not found</h1>
        <Link href="/dashboard" className="text-primary mt-4 inline-block">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/companies/${type}/${companyId}/roles`}
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-4 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Roles
        </Link>
        <h1 className="text-2xl font-bold text-white mb-1">
          {company.name} — {role.name}
        </h1>
        <p className="text-muted">
          {questions.length} interview questions · Tick off as you complete them
        </p>
      </div>

      {/* Question List */}
      <QuestionList questions={questions} />
    </div>
  );
}
