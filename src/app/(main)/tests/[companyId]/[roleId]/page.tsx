import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getOrCreateTest } from "@/lib/test-generator";
import TestRunner from "@/components/TestRunner";

export default async function TestPage({
  params,
}: {
  params: Promise<{ companyId: string; roleId: string }>;
}) {
  const { companyId, roleId } = await params;
  const test = getOrCreateTest(companyId, roleId);

  if (!test) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Test not found
        </h1>
        <p className="text-muted mb-6">
          We couldn't find a test for this company and role combination.
        </p>
        <Link href="/tests" className="text-primary hover:text-primary-hover">
          Browse all tests
        </Link>
      </div>
    );
  }

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
