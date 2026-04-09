import { DashboardNav } from "@/components/DashboardNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-background min-h-[calc(100vh-88px)] w-full">
      <DashboardNav />
      <main className="flex-1 w-full pb-24 md:pb-8">
        {/* pb-24 on mobile to account for the bottom nav bar */}
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
