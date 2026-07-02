"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SkyAnimation from "@/components/home/SkyAnimation";
import { images } from "@/lib/images";

export default function HeroBackground() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-sky-100">
      <SkyAnimation />
      <motion.div
        style={{ y: imageY }}
        className="absolute bottom-0 left-0 right-0 h-[32%] md:h-[36%]"
      >
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          className="object-cover object-top opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </motion.div>
    </div>
  );
}
