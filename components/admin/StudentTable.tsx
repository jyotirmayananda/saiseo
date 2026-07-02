"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { Pencil, Trash2, Search } from "lucide-react";

interface Student {
  id: string;
  rollNumber: string;
  name: string;
  course: string;
}

interface Pagination {
  page: number;
  totalPages: number;
  total: number;
}

export default function StudentTable() {
  const router = useRouter();
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    totalPages: 1,
    total: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchStudents = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "10",
        ...(search && { search }),
      });
      const res = await fetch(`/api/students?${params}`);
      const data = await res.json();
      setStudents(data.students);
      setPagination(data.pagination);
    } catch {
      setStudents([]);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    const timer = setTimeout(fetchStudents, 300);
    return () => clearTimeout(timer);
  }, [fetchStudents]);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Delete student "${name}"? This cannot be undone.`)) return;

    await fetch(`/api/students/${id}`, { method: "DELETE" });
    fetchStudents();
    router.refresh();
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b]"
          />
          <input
            type="text"
            placeholder="Search by roll number or name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
          />
        </div>
        <Link href="/admin/students/new">
          <Button size="sm">Add Student</Button>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#1d1d1f]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 text-left font-medium text-[#86868b]">
                Roll Number
              </th>
              <th className="px-4 py-3 text-left font-medium text-[#86868b]">
                Name
              </th>
              <th className="px-4 py-3 text-left font-medium text-[#86868b]">
                Course
              </th>
              <th className="px-4 py-3 text-right font-medium text-[#86868b]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-[#86868b]">
                  Loading...
                </td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-[#86868b]">
                  No students found.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="border-t border-white/5 transition-colors hover:bg-white/[0.02]"
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {student.rollNumber}
                  </td>
                  <td className="px-4 py-3 text-white/80">{student.name}</td>
                  <td className="px-4 py-3 text-white/80">{student.course}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/students/${student.id}/edit`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="!p-2 text-white/60 hover:bg-white/10 hover:text-white"
                        >
                          <Pencil size={16} />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="!p-2 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                        onClick={() => handleDelete(student.id, student.name)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination.totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-[#86868b]">
            {pagination.total} student{pagination.total !== 1 ? "s" : ""} total
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Previous
            </Button>
            <span className="flex items-center px-3 text-sm text-[#86868b]">
              Page {page} of {pagination.totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= pagination.totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
