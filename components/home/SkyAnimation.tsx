"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const CLOUDS = [
  { w: 280, h: 90, top: "12%", opacity: 0.85, duration: 55, delay: 0, y: 0 },
  { w: 420, h: 120, top: "22%", opacity: 0.7, duration: 70, delay: 8, y: 20 },
  { w: 200, h: 70, top: "8%", opacity: 0.6, duration: 45, delay: 4, y: -10 },
  { w: 360, h: 100, top: "35%", opacity: 0.55, duration: 80, delay: 15, y: 15 },
  { w: 240, h: 80, top: "18%", opacity: 0.75, duration: 60, delay: 22, y: 5 },
  { w: 500, h: 140, top: "42%", opacity: 0.45, duration: 90, delay: 5, y: 25 },
];

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 23) % 35}%`,
  size: i % 4 === 0 ? 2 : 1,
  delay: i * 0.15,
}));

function Cloud({
  width,
  height,
  top,
  opacity,
  duration,
  delay,
  yOffset,
}: {
  width: number;
  height: number;
  top: string;
  opacity: number;
  duration: number;
  delay: number;
  yOffset: number;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ top, width, height, opacity }}
      initial={{ x: "-30vw" }}
      animate={{ x: "130vw" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <motion.div
        animate={{ y: [yOffset, yOffset + 12, yOffset] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <div
          className="absolute inset-0 rounded-[50%] bg-white blur-[1px]"
          style={{ boxShadow: "0 0 60px 20px rgba(255,255,255,0.4)" }}
        />
        <div className="absolute -left-[20%] top-[30%] h-[55%] w-[45%] rounded-full bg-white/95" />
        <div className="absolute -right-[15%] top-[25%] h-[60%] w-[40%] rounded-full bg-white/90" />
        <div className="absolute left-[25%] -top-[20%] h-[50%] w-[35%] rounded-full bg-white/85" />
      </motion.div>
    </motion.div>
  );
}

export default function SkyAnimation() {
  const { scrollY } = useScroll();
  const skyY = useTransform(scrollY, [0, 600], [0, 150]);
  const cloudOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <motion.div style={{ y: skyY }} className="absolute inset-0 overflow-hidden">
      {/* Animated sky gradient */}
      <div className="sky-gradient absolute inset-0" />

      {/* Atmospheric glow layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c2d48]/40 via-transparent to-[#e0f7fa]/30" />
      <div className="sky-horizon absolute bottom-0 left-0 right-0 h-[45%]" />

      {/* Twinkling stars (upper sky) */}
      <div className="absolute inset-0">
        {STARS.map((star) => (
          <motion.span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 2 + (star.id % 3),
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Sun with animated rays */}
      <motion.div
        className="absolute -right-16 top-16 md:right-12 md:top-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-28 w-28 md:h-36 md:w-36">
          <motion.div
            className="sun-rays absolute inset-0 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FFE066] via-[#FFD166] to-[#F4B942] shadow-[0_0_80px_30px_rgba(255,209,102,0.45)]" />
        </div>
      </motion.div>

      {/* Drifting clouds */}
      <motion.div style={{ opacity: cloudOpacity }} className="absolute inset-0">
        {CLOUDS.map((cloud, i) => (
          <Cloud
            key={i}
            width={cloud.w}
            height={cloud.h}
            top={cloud.top}
            opacity={cloud.opacity}
            duration={cloud.duration}
            delay={cloud.delay}
            yOffset={cloud.y}
          />
        ))}
      </motion.div>

      {/* Soft light beams */}
      <div className="sky-beams absolute inset-0 opacity-30" />

      {/* Floating particles — dust in sunlight */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/60"
          style={{
            left: `${10 + (i * 19) % 80}%`,
            top: `${20 + (i * 13) % 60}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Bottom fade to white sections */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </motion.div>
  );
}
