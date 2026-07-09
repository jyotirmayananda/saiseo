"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import CourseCatalog from "@/components/courses/CourseCatalog";

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-surface">
      <div className="container-main">
        {/* Mobile header — left aligned, tighter */}
        <div className="md:hidden">
          <span className="section-label">Programs</span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-brand">
            Our courses
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Tap a category, then expand any course for full syllabus & career info.
          </p>
        </div>

        <div className="hidden md:block">
          <SectionHeader
            label="Programs"
            title="Courses for every career path"
            description="Full details on every diploma program, programming language, and professional course — all in one place."
          />
        </div>

        <div className="mt-6 md:mt-12">
          <CourseCatalog />
        </div>
      </div>
    </section>
  );
}
