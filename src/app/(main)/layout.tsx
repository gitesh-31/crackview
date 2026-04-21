import Navbar from "@/components/layout/Navbar";
import HelpAssistant from "@/components/HelpAssistant";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-[#334155] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-[#64748b] text-sm">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved by Vasudev Gitesh</p>
          <p className="mt-1 text-[#64748b]/60">CrackView - Interview Preparation Management System</p>
        </div>
      </footer>
      <HelpAssistant />
    </>
  );
}
