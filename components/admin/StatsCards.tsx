"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Clock } from "lucide-react";

interface StatsCardsProps {
  totalStudents: number;
  totalCourses: number;
  recentCount: number;
}

const cards = [
  { key: "students", label: "Total Students", icon: Users },
  { key: "courses", label: "Total Courses", icon: BookOpen },
  { key: "recent", label: "Recent Entries", icon: Clock },
] as const;

export default function StatsCards({
  totalStudents,
  totalCourses,
  recentCount,
}: StatsCardsProps) {
  const values: Record<string, number> = {
    students: totalStudents,
    courses: totalCourses,
    recent: recentCount,
  };

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3">
      {cards.map((card, i) => (
        <motion.div
          key={card.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="card-hover p-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted">{card.label}</p>
              <p className="mt-1 font-heading text-3xl font-bold text-brand">
                {values[card.key]}
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">
              <card.icon size={22} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
