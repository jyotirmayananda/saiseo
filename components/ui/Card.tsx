"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  const Component = hover ? motion.div : "div";
  const motionProps = hover
    ? {
        whileHover: { y: -4, boxShadow: "0 20px 40px rgba(45, 191, 184, 0.15)" },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={cn(
        "rounded-xl border border-gray-100 bg-white p-6 shadow-md",
        className
      )}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
