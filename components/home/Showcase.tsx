"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

export default function Showcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <SectionHeader
          label="About Us"
          title="Quality education for every student"
          description="Modern computer labs, experienced faculty, and a curriculum aligned with industry needs — helping you succeed in IT and beyond."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200/80"
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={images.showcase}
              alt="Classroom at Sai SEO Solution"
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-teal-light">
                Campus Experience
              </p>
              <p className="mt-2 font-heading text-xl font-semibold text-white md:text-2xl">
                Learn in a professional, supportive environment
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
