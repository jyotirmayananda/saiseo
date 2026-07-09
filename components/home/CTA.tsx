"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-brand">
      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="headline-lg text-balance text-white">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Join thousands of students who built their careers with Sai SEO
            Solution.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-brand transition-all active:scale-[0.98] hover:bg-surface sm:w-auto sm:rounded-full sm:py-3"
            >
              Contact Us
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/result"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-white/10 sm:w-auto sm:rounded-full sm:py-3"
            >
              Check Result
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
