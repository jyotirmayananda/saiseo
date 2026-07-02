"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SkyAnimation from "@/components/home/SkyAnimation";
import { images } from "@/lib/images";

export default function HeroBackground() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 80]);
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#87CEEB]">
      <SkyAnimation />

      {/* Campus horizon — grounded professional imagery */}
      <motion.div
        style={{ y: imageY, opacity: imageOpacity }}
        className="absolute bottom-0 left-0 right-0 h-[38%] md:h-[42%]"
      >
        <div className="relative h-full w-full">
          <Image
            src={images.hero}
            alt={images.heroAlt}
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2d48]/20 via-transparent to-[#0c2d48]/10" />
        </div>
      </motion.div>
    </div>
  );
}
