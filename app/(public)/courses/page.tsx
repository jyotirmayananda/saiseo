import type { Metadata } from "next";
import CoursesPageContent from "@/components/courses/CoursesPageContent";

export const metadata: Metadata = {
  title: "Courses | Sai SEO Solution",
  description:
    "Explore all courses at Sai SEO Solution — PGDCA, DCA, CCA, Python, Java, C, C++, PHP, .NET, Oracle, Tally, AutoCAD and more in Berhampur.",
};

export default function CoursesPage() {
  return <CoursesPageContent />;
}
