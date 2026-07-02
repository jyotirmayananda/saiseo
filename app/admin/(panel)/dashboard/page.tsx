import { prisma } from "@/lib/prisma";
import StatsCards from "@/components/admin/StatsCards";

export default async function DashboardPage() {
  const [totalStudents, courses, recentStudents] = await Promise.all([
    prisma.student.count(),
    prisma.student.findMany({ select: { course: true }, distinct: ["course"] }),
    prisma.student.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: { id: true, name: true, rollNumber: true, course: true },
    }),
  ]);

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-brand">Dashboard</h1>
      <p className="mt-1 text-muted">Welcome to Sai SEO Solution admin panel.</p>

      <StatsCards
        totalStudents={totalStudents}
        totalCourses={courses.length}
        recentCount={recentStudents.length}
      />

      <div className="card mt-8 p-6">
        <h2 className="font-heading font-semibold text-brand">Recent Entries</h2>
        {recentStudents.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No students added yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-muted">
                  <th className="pb-3 pr-4">Roll No.</th>
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3">Course</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((s) => (
                  <tr key={s.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-3 pr-4 font-medium text-brand">{s.rollNumber}</td>
                    <td className="py-3 pr-4">{s.name}</td>
                    <td className="py-3">{s.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
