"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Clock } from "lucide-react";

interface StatsCardsProps {
  totalStudents: number;
  totalCourses: number;
  recentCount: number;
}

const cards = [
  {
    key: "students",
    label: "Total Students",
    icon: Users,
    color: "text-teal bg-teal/10",
  },
  {
    key: "courses",
    label: "Total Courses",
    icon: BookOpen,
    color: "text-maroon bg-maroon/10",
  },
  {
    key: "recent",
    label: "Recent Entries",
    icon: Clock,
    color: "text-forest bg-forest/10",
  },
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#1d1d1f] p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#86868b]">{card.label}</p>
              <p className="mt-1 font-heading text-3xl font-semibold text-white">
                {values[card.key]}
              </p>
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
            >
              <card.icon size={24} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
