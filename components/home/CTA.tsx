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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand transition-all hover:bg-surface"
            >
              Contact Us
              <ChevronRight size={16} />
            </Link>
            <Link href="/result" className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10">
              Check Result
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
