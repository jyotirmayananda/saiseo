"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const CLOUDS = [
  { w: 220, top: "15%", duration: 90, delay: 0, opacity: 0.9 },
  { w: 320, top: "28%", duration: 110, delay: 20, opacity: 0.75 },
  { w: 180, top: "8%", duration: 75, delay: 40, opacity: 0.85 },
  { w: 280, top: "38%", duration: 100, delay: 10, opacity: 0.65 },
];

function Cloud({
  width,
  top,
  opacity,
  duration,
  delay,
}: {
  width: number;
  top: string;
  opacity: number;
  duration: number;
  delay: number;
}) {
  const height = width * 0.35;
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, width, height, opacity }}
      initial={{ x: "-25vw" }}
      animate={{ x: "125vw" }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-[50%] bg-white shadow-[0_8px_32px_rgba(255,255,255,0.8)]" />
        <div className="absolute -left-[18%] top-[28%] h-[58%] w-[42%] rounded-full bg-white" />
        <div className="absolute -right-[12%] top-[22%] h-[62%] w-[38%] rounded-full bg-white/95" />
      </div>
    </motion.div>
  );
}

export default function SkyAnimation() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
      <div className="sky-gradient absolute inset-0" />
      <div className="sky-horizon absolute bottom-0 left-0 right-0 h-[55%]" />

      {/* Sun */}
      <motion.div
        className="absolute right-[8%] top-[12%] md:right-[15%] md:top-[15%]"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-[0_0_60px_20px_rgba(251,191,36,0.35)] md:h-24 md:w-24" />
      </motion.div>

      {/* Clouds */}
      {CLOUDS.map((c, i) => (
        <Cloud key={i} width={c.w} top={c.top} opacity={c.opacity} duration={c.duration} delay={c.delay} />
      ))}
    </motion.div>
  );
}
