import Sidebar from "@/components/admin/Sidebar";

// Avoid Prisma queries at build time (Netlify has no DB during build)
export const dynamic = "force-dynamic";

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <div className="lg:pl-64">
        <main className="min-h-screen p-4 pt-16 lg:p-8 lg:pt-8">{children}</main>
      </div>
    </div>
  );
}
