"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Award } from "lucide-react";
import HeroBackground from "@/components/home/HeroBackground";
import { images } from "@/lib/images";

const stats = [
  { value: "15+", label: "Courses" },
  { value: "1000+", label: "Students" },
  { value: "ISO", label: "9001:2015" },
  { value: "2", label: "Branches" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <HeroBackground />

      <div className="container-main relative z-10 flex min-h-[92vh] flex-col justify-center pb-16 pt-24 md:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-soft backdrop-blur-sm">
              <Award size={14} className="text-teal-dark" />
              ISO 9001:2015 Certified
            </span>

            <h1 className="headline-xl text-balance text-brand">
              Build your future with{" "}
              <span className="text-teal-dark">Sai SEO Solution</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
              Premier computer education and IT services in Berhampur. Diploma
              programs, short courses, and professional hardware support under
              one roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#courses" className="btn-primary group">
                View Courses
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/result" className="btn-secondary">
                Check Result
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="card overflow-hidden shadow-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src={images.hero}
                  alt="Students at Sai SEO Solution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 540px"
                  priority
                />
              </div>
              <div className="border-t border-slate-100 bg-surface p-5">
                <p className="font-heading font-semibold text-brand">
                  A Unit of Software & Hardware Solution
                </p>
                <p className="mt-1 text-sm text-muted">
                  Hatibandha Street & Gurunthi Main Road, Berhampur
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="card-hover px-4 py-4 text-center">
              <p className="font-heading text-2xl font-bold text-brand">{s.value}</p>
              <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
