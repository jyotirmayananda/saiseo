"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Briefcase, ChevronDown, Clock, Layers } from "lucide-react";
import type { Course } from "@/lib/courses";
import { cn } from "@/lib/utils";

export default function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      id={course.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.05 }}
      className="card scroll-mt-28 overflow-hidden"
    >
      <div className="border-b border-slate-100 bg-surface-2 px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-dark">
              {course.name}
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold text-brand sm:text-xl">
              {course.fullName}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand ring-1 ring-slate-200">
              <Clock size={12} />
              {course.duration}
            </span>
            <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark">
              {course.level}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4 p-4 sm:space-y-5 sm:p-6">
        <p className="text-sm leading-relaxed text-slate-600">{course.description}</p>

        <div>
          <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <Layers size={14} className="text-teal-dark" />
            Key highlights
          </p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {course.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-slate-600 before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-teal"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: collapsible details */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-surface-2 px-4 py-3 text-sm font-semibold text-brand"
          >
            {expanded ? "Hide syllabus & careers" : "View syllabus & careers"}
            <ChevronDown
              size={18}
              className={cn("text-teal-dark transition-transform", expanded && "rotate-180")}
            />
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4">
                  <SyllabusBlock syllabus={course.syllabus} />
                  <CareerBlock career={course.career} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: always visible */}
        <div className="hidden space-y-5 md:block">
          <SyllabusBlock syllabus={course.syllabus} />
          <CareerBlock career={course.career} />
        </div>
      </div>
    </motion.article>
  );
}

function SyllabusBlock({ syllabus }: { syllabus: string[] }) {
  return (
    <div>
      <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
        <BookOpen size={14} className="text-teal-dark" />
        Syllabus
      </p>
      <ol className="grid gap-1.5 sm:grid-cols-2">
        {syllabus.map((item, i) => (
          <li key={item} className="flex gap-2 text-sm text-slate-600">
            <span className="font-semibold text-teal-dark">{i + 1}.</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

function CareerBlock({ career }: { career: string[] }) {
  return (
    <div className="rounded-xl bg-surface-2 p-4">
      <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
        <Briefcase size={14} className="text-teal-dark" />
        Career opportunities
      </p>
      <div className="flex flex-wrap gap-2">
        {career.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-brand"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
