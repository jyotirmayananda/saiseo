"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import CourseCatalog from "@/components/courses/CourseCatalog";

export default function CoursesPageContent() {
  return (
    <section className="min-h-screen bg-surface pb-20 pt-20 sm:pt-24 sm:pb-16">
      <div className="container-main">
        <SectionHeader
          label="All Courses"
          title="Complete course catalog"
          description="Detailed information on every diploma program, programming language, and professional course offered at Sai SEO Solution, Berhampur."
        />

        <div className="mt-12">
          <CourseCatalog />
        </div>
      </div>
    </section>
  );
}
