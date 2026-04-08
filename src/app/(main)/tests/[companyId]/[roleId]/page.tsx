import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTestsByCompanyAndRole } from "@/data/tests";
import { getCompanyById } from "@/data/companies";
import { getRoleById } from "@/data/roles";
import TestRunner from "@/components/TestRunner";

export default async function TestPage({
  params,
}: {
  params: Promise<{ companyId: string; roleId: string }>;
}) {
  const { companyId, roleId } = await params;
  const testsForRole = getTestsByCompanyAndRole(companyId, roleId);
  const company = getCompanyById(companyId);
  const role = getRoleById(roleId);

  if (testsForRole.length === 0 || !company || !role) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          No tests available
        </h1>
        <p className="text-muted mb-6">
          Tests for this company and role combination are coming soon.
        </p>
        <Link href="/tests" className="text-primary hover:text-primary-hover">
          Browse all tests
        </Link>
      </div>
    );
  }

  const test = testsForRole[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <Link
        href="/tests"
        className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-6 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tests
      </Link>

      <TestRunner test={test} />
    </div>
  );
}
