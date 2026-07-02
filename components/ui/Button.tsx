"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "apple" | "apple-dark";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "bg-maroon text-white hover:bg-maroon-dark",
  outline:
    "border border-white/30 bg-transparent text-white hover:bg-white/10",
  ghost: "text-[#86868b] hover:text-white hover:bg-white/5",
  apple:
    "rounded-full bg-teal px-7 text-white hover:bg-teal-dark shadow-lg shadow-teal/20",
  "apple-dark":
    "rounded-full bg-white text-black hover:bg-gray-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm font-medium",
  lg: "px-8 py-3.5 text-base font-medium",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const isApple = variant === "apple" || variant === "apple-dark";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal/40 disabled:cursor-not-allowed disabled:opacity-50",
        !isApple && "rounded-xl",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
