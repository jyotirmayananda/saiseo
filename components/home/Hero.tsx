"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import HeroBackground from "@/components/home/HeroBackground";

export default function Hero() {
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <HeroBackground />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1200px] flex-col justify-center px-6 pb-24 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-label mb-6 text-teal-light"
          >
            ISO 9001:2015 Certified · Berhampur
          </motion.p>

          <h1 className="headline-xl text-balance text-white">
            Shape your future
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-teal-light via-white to-teal bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              in technology.
            </motion.span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Sai SEO Solution — premium computer education, professional IT
            training, and enterprise-grade hardware services.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/30"
            >
              Explore Courses
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/result"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15"
            >
              Check Result
            </Link>
          </div>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl sm:grid-cols-4 lg:max-w-3xl"
        >
          {[
            { value: "15+", label: "Courses" },
            { value: "1000+", label: "Alumni" },
            { value: "ISO", label: "9001:2015" },
            { value: "2", label: "Branches" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="bg-black/40 px-6 py-5 text-center backdrop-blur-md"
            >
              <p className="font-heading text-2xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs uppercase tracking-wider text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-10 w-6 rounded-full border border-white/30 p-1.5"
        >
          <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
