"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Award, Users, BookOpen } from "lucide-react";
import HeroBackground from "@/components/home/HeroBackground";
import { images } from "@/lib/images";

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-6 pb-32 pt-28 lg:pb-40 lg:pt-32"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-4 py-2 backdrop-blur-md"
            >
              <Award size={14} className="text-teal-dark" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0c2d48]">
                ISO 9001:2015 · Berhampur
              </span>
            </motion.div>

            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight text-[#0c2d48] sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              Elevate your career
              <br />
              <span className="bg-gradient-to-r from-teal-dark via-[#0ea5e9] to-teal bg-clip-text text-transparent">
                under open skies.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#1e4976]/80 sm:text-lg">
              Sai SEO Solution delivers world-class computer education, industry
              certifications, and professional IT services — where ambition
              meets opportunity.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/#courses"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0c2d48] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0c2d48]/25 transition-all hover:bg-[#0a2540] hover:shadow-xl"
              >
                Explore Programs
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/result"
                className="inline-flex items-center gap-2 rounded-full border border-[#0c2d48]/20 bg-white/50 px-8 py-3.5 text-sm font-semibold text-[#0c2d48] backdrop-blur-md transition-all hover:bg-white/80"
              >
                Check Result
              </Link>
            </div>

            {/* Inline trust metrics */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#0c2d48]/10 pt-8">
              {[
                { icon: Users, value: "1000+", label: "Students trained" },
                { icon: BookOpen, value: "15+", label: "Programs" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/60 text-teal-dark backdrop-blur-sm">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-[#0c2d48]">
                      {item.value}
                    </p>
                    <p className="text-xs text-[#1e4976]/70">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-2 shadow-2xl shadow-[#0c2d48]/10 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={images.hero}
                  alt="Students at Sai SEO Solution"
                  fill
                  className="object-cover"
                  sizes="500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2d48]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-light">
                    Campus Life
                  </p>
                  <p className="mt-1 font-heading text-xl font-semibold text-white">
                    Learn. Build. Succeed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 top-12 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-md"
            >
              <p className="font-heading text-2xl font-bold text-teal-dark">ISO</p>
              <p className="text-xs font-medium text-[#1e4976]/70">9001:2015 Certified</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-xl backdrop-blur-md"
            >
              <p className="font-heading text-2xl font-bold text-[#0c2d48]">2</p>
              <p className="text-xs font-medium text-[#1e4976]/70">Branches in Berhampur</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-20"
        >
          {[
            { value: "15+", label: "Courses" },
            { value: "1000+", label: "Alumni" },
            { value: "ISO", label: "9001:2015" },
            { value: "2", label: "Branches" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 + i * 0.07 }}
              className="rounded-2xl border border-white/50 bg-white/45 px-5 py-4 text-center backdrop-blur-md transition-transform hover:-translate-y-0.5"
            >
              <p className="font-heading text-2xl font-bold text-[#0c2d48]">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#1e4976]/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-[#0c2d48]/50">
            Scroll
          </span>
          <div className="h-8 w-5 rounded-full border border-[#0c2d48]/30 p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="mx-auto h-1.5 w-1 rounded-full bg-[#0c2d48]/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}