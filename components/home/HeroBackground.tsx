"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/lib/images";

const ORBS = [
  {
    color: "bg-teal/30",
    size: "h-[500px] w-[500px]",
    top: "-10%",
    left: "-5%",
    duration: 18,
    delay: 0,
  },
  {
    color: "bg-gold/20",
    size: "h-[400px] w-[400px]",
    top: "20%",
    right: "-8%",
    duration: 22,
    delay: 2,
  },
  {
    color: "bg-maroon/15",
    size: "h-[350px] w-[350px]",
    bottom: "5%",
    left: "25%",
    duration: 20,
    delay: 4,
  },
  {
    color: "bg-forest/20",
    size: "h-[300px] w-[300px]",
    bottom: "20%",
    right: "20%",
    duration: 16,
    delay: 1,
  },
];

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: `${8 + (i * 17) % 85}%`,
  y: `${12 + (i * 23) % 75}%`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
  duration: 4 + (i % 5) * 1.2,
  delay: i * 0.25,
}));

export default function HeroBackground() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 140]);
  const orbY = useTransform(scrollY, [0, 700], [0, 80]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ken Burns — slow cinematic zoom & drift on photo */}
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.12, 1.06, 1.14, 1],
            x: [0, -20, 10, -15, 0],
            y: [0, 15, -10, 8, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={images.hero}
            alt={images.heroAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Aurora mesh — animated gradient wash */}
      <div className="hero-aurora absolute inset-0 opacity-60" />

      {/* Floating gradient orbs */}
      <motion.div style={{ y: orbY }} className="absolute inset-0">
        {ORBS.map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-[100px] ${orb.color} ${orb.size}`}
            style={{
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
            }}
            animate={{
              x: [0, 40, -30, 20, 0],
              y: [0, -30, 25, -15, 0],
              scale: [1, 1.15, 0.95, 1.1, 1],
              opacity: [0.4, 0.7, 0.5, 0.65, 0.4],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Light sweep — subtle horizontal gleam */}
      <motion.div
        className="hero-sweep absolute inset-0"
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 6,
        }}
      />

      {/* Particle field */}
      <div className="absolute inset-0">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.1, 0.55, 0.1],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Grid lines — faint tech texture */}
      <div className="hero-grid absolute inset-0 opacity-[0.04]" />

      {/* Vignette & readability overlays */}
      <div className="image-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
