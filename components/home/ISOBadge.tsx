"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function ISOBadge() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl"
        >
          <div className="relative aspect-[21/9] min-h-[280px]">
            <Image
              src={images.iso}
              alt="ISO certification quality standards"
              fill
              className="object-cover"
              sizes="1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="grid w-full items-center gap-8 px-8 md:grid-cols-2 md:px-16">
              <div>
                <p className="section-label">Quality Assured</p>
                <h2 className="headline-lg mt-3 text-white">
                  ISO 9001:2015
                  <br />
                  Certified.
                </h2>
                <p className="mt-4 max-w-md text-white/60">
                  Our commitment to quality management in education and IT
                  services meets international standards — so you learn with
                  confidence.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-gold/40 bg-black/50 backdrop-blur-md md:h-44 md:w-44">
                  <span className="font-heading text-3xl font-bold text-gold md:text-4xl">
                    ISO
                  </span>
                  <span className="text-xs font-medium tracking-widest text-white/60">
                    9001:2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
