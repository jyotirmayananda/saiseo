"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Showcase() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="section-label">Why Sai SEO</p>
          <h2 className="headline-lg mt-4 text-balance text-white">
            Education that feels
            <br />
            as refined as the tech you use.
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-2xl">
            Modern labs. Expert instructors. Industry-aligned curriculum — designed
            for the next generation of developers and IT professionals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 aspect-[16/9] overflow-hidden rounded-4xl md:aspect-[21/9]"
        >
          <Image
            src={images.showcase}
            alt="Modern classroom at Sai SEO Solution"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-sm font-medium uppercase tracking-widest text-teal-light">
              Campus Experience
            </p>
            <p className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
              Learn in an environment built for excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
