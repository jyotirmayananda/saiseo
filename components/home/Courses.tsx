"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Clock, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

const softwareCourses = [
  { name: "PGDCA", desc: "Post Graduate Diploma in Computer Applications" },
  { name: "DCA", desc: "Diploma in Computer Applications" },
  { name: "CCA", desc: "Certificate in Computer Applications" },
];

const shortTermCourses = [
  "Python", "Java", "C++", "PHP", ".NET", "Oracle",
  "Tally", "AutoCAD", "C", "Internet", "Visual Basic",
];

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-surface">
      <div className="container-main">
        <SectionHeader
          label="Programs"
          title="Courses for every career path"
          description="From full diploma programs to focused short-term modules — choose what fits your goals."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Software courses */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-hover overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={images.courses.software}
                alt="Software courses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand/50" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
                <GraduationCap size={20} />
                <span className="font-heading font-semibold">Software Courses</span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {softwareCourses.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between rounded-xl bg-surface-2 px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold text-brand">{c.name}</p>
                      <p className="text-xs text-muted">{c.desc}</p>
                    </div>
                    <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-bold text-teal-dark">
                      Diploma
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Short term */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-hover overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={images.courses.shortTerm}
                alt="Short term courses"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-maroon/40" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
                <Clock size={20} />
                <span className="font-heading font-semibold">Short Term Courses</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {shortTermCourses.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-brand"
                  >
                    {course}
                  </span>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-dark hover:underline"
              >
                Enquire now <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
