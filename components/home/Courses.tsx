"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";

const softwareCourses = [
  { name: "PGDCA", desc: "Post Graduate Diploma" },
  { name: "DCA", desc: "Diploma in Computer Applications" },
  { name: "CCA", desc: "Certificate in Computer Applications" },
];

const shortTermCourses = [
  "Python", "Java", "C++", "PHP", ".NET", "Oracle",
  "Tally", "AutoCAD", "C", "Internet", "Visual Basic",
];

export default function Courses() {
  return (
    <section id="courses" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="section-label text-teal-dark">Programs</p>
          <h2 className="headline-lg mt-3 text-[#1d1d1f]">
            Courses designed for real careers.
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-xl text-[#86868b]">
            From diploma programs to focused skill modules — pick the path that
            fits your ambition.
          </p>
        </motion.div>

        {/* Bento grid — Apple/Samsung style */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-5">
          {/* Large software card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[420px] overflow-hidden rounded-4xl bg-[#1d1d1f] md:row-span-2"
          >
            <Image
              src={images.courses.software}
              alt="Software development course"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-light">
                Diploma Programs
              </p>
              <h3 className="mt-2 font-heading text-3xl font-semibold text-white md:text-4xl">
                Software Courses
              </h3>
              <div className="mt-6 space-y-3">
                {softwareCourses.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md"
                  >
                    <div>
                      <p className="font-semibold text-white">{c.name}</p>
                      <p className="text-xs text-white/60">{c.desc}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-teal-light" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Short term card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative min-h-[280px] overflow-hidden rounded-4xl bg-white"
          >
            <Image
              src={images.courses.shortTerm}
              alt="Short term computer courses"
              fill
              className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="relative flex h-full flex-col justify-between p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-maroon">
                  Quick Skills
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-[#1d1d1f]">
                  Short Term Courses
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {shortTermCourses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full bg-[#f5f5f7] px-3.5 py-1.5 text-xs font-medium text-[#1d1d1f] transition-colors hover:bg-teal/10 hover:text-teal-dark"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Classroom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative min-h-[200px] overflow-hidden rounded-4xl"
          >
            <Image
              src={images.courses.classroom}
              alt="Students in classroom"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-teal/80 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <div>
                <p className="font-heading text-2xl font-semibold text-white">
                  Hands-on learning.
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Every course includes practical lab sessions.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 hover:underline"
                >
                  Enroll today <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
