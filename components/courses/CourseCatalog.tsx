"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  Code2,
  GraduationCap,
  Layers,
} from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import CourseMobileList from "@/components/courses/CourseMobileList";
import {
  allCourses,
  categoryDescriptions,
  categoryLabels,
  diplomaCourses,
  programmingCourses,
  professionalCourses,
  type Course,
  type CourseCategory,
} from "@/lib/courses";
import { cn } from "@/lib/utils";

const categoryIcons: Record<CourseCategory, typeof GraduationCap> = {
  diploma: GraduationCap,
  programming: Code2,
  professional: Briefcase,
};

const sections: { category: CourseCategory; courses: Course[] }[] = [
  { category: "diploma", courses: diplomaCourses },
  { category: "programming", courses: programmingCourses },
  { category: "professional", courses: professionalCourses },
];

const tabShortLabel: Record<CourseCategory, string> = {
  diploma: "Diploma",
  programming: "Coding",
  professional: "Skills",
};

export default function CourseCatalog() {
  const [activeTab, setActiveTab] = useState<CourseCategory>("diploma");
  const activeSection = sections.find((s) => s.category === activeTab)!;
  const ActiveIcon = categoryIcons[activeTab];

  return (
    <>
      {/* ── MOBILE ── */}
      <div className="md:hidden">
        {/* Segmented tabs */}
        <div className="grid grid-cols-3 gap-1 rounded-2xl bg-slate-100/90 p-1 ring-1 ring-slate-200/60">
          {sections.map(({ category, courses }) => {
            const Icon = categoryIcons[category];
            const active = activeTab === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={cn(
                  "flex flex-col items-center gap-1 rounded-xl px-2 py-2.5 text-center transition-all duration-200",
                  active
                    ? "bg-white text-brand shadow-sm shadow-slate-200/80"
                    : "text-slate-500 active:bg-white/50"
                )}
              >
                <Icon size={18} className={active ? "text-teal-dark" : undefined} />
                <span className="text-[11px] font-bold leading-tight">
                  {tabShortLabel[category]}
                </span>
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[9px] font-bold",
                    active ? "bg-teal/10 text-teal-dark" : "bg-slate-200/80 text-slate-500"
                  )}
                >
                  {courses.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active category header */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-5 rounded-2xl bg-brand p-4 text-white"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <ActiveIcon size={20} className="text-teal-light" />
            </div>
            <div>
              <p className="font-heading text-base font-bold">
                {categoryLabels[activeTab]}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                {categoryDescriptions[activeTab]}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Course accordion list */}
        <div className="mt-4">
          <CourseMobileList
            key={activeTab}
            courses={activeSection.courses}
            category={activeTab}
          />
        </div>

        {/* Compact CTA */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-teal/10 to-surface-2 p-4 ring-1 ring-teal/15">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal/15 text-teal-dark">
              <Layers size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-brand">
                {allCourses.length} courses available
              </p>
              <p className="text-xs text-muted">Morning & evening batches</p>
            </div>
          </div>
          <Link
            href="/#contact"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-white active:scale-[0.98]"
          >
            Enquire fees & timings
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-center gap-2">
          {sections.map(({ category }) => {
            const Icon = categoryIcons[category];
            return (
              <a
                key={category}
                href={`#${category}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand transition-colors hover:border-teal/40 hover:bg-surface-2"
              >
                <Icon size={16} className="text-teal-dark" />
                {categoryLabels[category]}
              </a>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-teal/20 bg-teal/5 p-6 text-center">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-brand">{allCourses.length} courses</span>{" "}
            available — PGDCA, DCA, CCA, Python, Java, C, C++, PHP, .NET, Oracle,
            Tally, AutoCAD, Visual Basic, Internet & more.
          </p>
          <Link
            href="/#contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:underline"
          >
            Enquire about fees & batch timings <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-14 space-y-16">
          {sections.map(({ category, courses }) => {
            const Icon = categoryIcons[category];
            return (
              <div key={category} id={category} className="scroll-mt-24">
                <div className="mb-8 flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-brand lg:text-3xl">
                      {categoryLabels[category]}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-muted">
                      {categoryDescriptions[category]}
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {courses.map((course, i) => (
                    <CourseCard key={course.id} course={course} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div className="flex items-center gap-3">
            <Clock size={20} className="shrink-0 text-teal-dark" />
            <p className="text-sm text-slate-600">
              Morning & evening batches available. Contact us for fees, duration,
              and admission dates.
            </p>
          </div>
          <Link href="/#contact" className="btn-primary shrink-0 !py-2.5 !text-xs">
            Enquire now
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
