"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ISOBadge() {
  return (
    <section className="section-padding bg-surface-2">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card overflow-hidden shadow-card"
        >
          <div className="grid items-center gap-8 p-8 md:grid-cols-[1fr_auto] md:p-12">
            <div>
              <SectionHeader
                label="Quality Assured"
                title="ISO 9001:2015 Certified Institute"
                description="Our quality management system meets international standards for education and IT services — giving you confidence in every program."
                align="left"
              />
            </div>
            <div className="flex justify-center">
              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-gold/50 bg-gradient-to-br from-gold/10 to-teal/5 md:h-40 md:w-40">
                <Award size={32} className="text-gold" />
                <p className="mt-2 font-heading text-2xl font-bold text-brand">ISO</p>
                <p className="text-xs font-semibold text-muted">9001:2015</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
