"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[480px]">
        <Image
          src={images.cta}
          alt="Students collaborating"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="headline-lg text-balance text-white">
              Ready to start your journey?
            </h2>
            <p className="body-lg mx-auto mt-4 max-w-lg text-white/70">
              Join thousands of students who built their careers with Sai SEO
              Solution.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-100"
              >
                Get in Touch
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/result"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Check Your Result
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
