"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

interface ResultCardProps {
  data: {
    student: {
      name: string;
      rollNumber: string;
      course: string;
      fatherName: string;
    };
    results: {
      subjectName: string;
      marksObtained: number;
      maxMarks: number;
    }[];
    totalObtained: number;
    totalMax: number;
    percentage: number;
    grade: string;
    passed: boolean;
  };
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1d1d1f]">
      <div className="border-b border-white/10 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal">
          Examination Result
        </p>
        <p className="mt-1 font-heading text-lg font-semibold text-white">
          Sai SEO Solution
        </p>
      </div>

      <div className="space-y-5 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Info label="Student" value={data.student.name} />
          <Info label="Roll No." value={data.student.rollNumber} />
          <Info label="Course" value={data.student.course} />
          <Info label="Father's Name" value={data.student.fatherName} />
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-4 py-3 text-left font-medium text-[#86868b]">
                  Subject
                </th>
                <th className="px-4 py-3 text-center font-medium text-[#86868b]">
                  Marks
                </th>
                <th className="px-4 py-3 text-center font-medium text-[#86868b]">
                  Max
                </th>
              </tr>
            </thead>
            <tbody>
              {data.results.map((r, i) => (
                <motion.tr
                  key={r.subjectName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/5 last:border-0"
                >
                  <td className="px-4 py-3 text-white">{r.subjectName}</td>
                  <td className="px-4 py-3 text-center font-medium text-white">
                    {r.marksObtained}
                  </td>
                  <td className="px-4 py-3 text-center text-[#86868b]">
                    {r.maxMarks}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Total" value={`${data.totalObtained}/${data.totalMax}`} />
          <Stat label="Percentage" value={`${data.percentage}%`} />
          <Stat label="Grade" value={data.grade} />
          <div className="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-3">
            <span className="text-xs text-[#86868b]">Status</span>
            <span
              className={`mt-1 flex items-center gap-1 text-sm font-bold ${
                data.passed ? "text-teal" : "text-red-400"
              }`}
            >
              {data.passed ? (
                <>
                  <CheckCircle size={14} /> PASS
                </>
              ) : (
                <>
                  <XCircle size={14} /> FAIL
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-[#86868b]">{label}</p>
      <p className="mt-0.5 font-medium text-white">{value}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 p-3 text-center">
      <p className="text-xs text-[#86868b]">{label}</p>
      <p className="mt-0.5 font-heading text-lg font-semibold text-white">
        {value}
      </p>
    </div>
  );
}
