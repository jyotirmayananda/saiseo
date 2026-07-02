import { prisma } from "@/lib/prisma";
import StatsCards from "@/components/admin/StatsCards";

export default async function DashboardPage() {
  const [totalStudents, courses, recentStudents] = await Promise.all([
    prisma.student.count(),
    prisma.student.findMany({
      select: { course: true },
      distinct: ["course"],
    }),
    prisma.student.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        rollNumber: true,
        course: true,
        createdAt: true,
      },
    }),
  ]);

  return (
    <div>
      <h1 className="font-heading text-2xl font-semibold text-white">
        Dashboard
      </h1>
      <p className="mt-1 text-[#86868b]">
        Welcome to Sai SEO Solution admin panel.
      </p>

      <StatsCards
        totalStudents={totalStudents}
        totalCourses={courses.length}
        recentCount={recentStudents.length}
      />

      <div className="mt-8 rounded-2xl border border-white/10 bg-[#1d1d1f] p-6">
        <h2 className="font-heading text-lg font-semibold text-white">
          Recent Entries
        </h2>
        {recentStudents.length === 0 ? (
          <p className="mt-4 text-sm text-[#86868b]">No students added yet.</p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-[#86868b]">
                  <th className="pb-3 pr-4">Roll No.</th>
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3">Course</th>
                </tr>
              </thead>
              <tbody>
                {recentStudents.map((s) => (
                  <tr key={s.id} className="border-b border-white/5 last:border-0">
                    <td className="py-3 pr-4 font-medium text-white">
                      {s.rollNumber}
                    </td>
                    <td className="py-3 pr-4 text-white/80">{s.name}</td>
                    <td className="py-3 text-white/80">{s.course}</td>
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
