"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#courses", label: "Courses" },
  { href: "/#services", label: "Services" },
  { href: "/#branches", label: "Branches" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-black/5 bg-white/85 py-2 shadow-sm backdrop-blur-2xl"
            : "bg-white/10 py-4 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Sai SEO Solution" width={36} height={36} priority />
            <span className="hidden font-heading text-sm font-bold tracking-tight text-[#0c2d48] sm:block">
              Sai SEO Solution
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0c2d48]/80 transition-colors hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/result"
              className="group flex items-center gap-1 rounded-full bg-[#0c2d48] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0a2540] hover:shadow-lg"
            >
              Check Result
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            className="text-[#0c2d48] md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-[#0c2d48]/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-white p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-[#0c2d48]">Menu</span>
                <button onClick={() => setOpen(false)} className="text-[#0c2d48]/60" aria-label="Close">
                  <X size={22} />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-1">
                {[...navLinks, { href: "/result", label: "Check Result" }].map((link, i) => (
                  <motion.div
                    key={link.href + link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-[#0c2d48] hover:bg-sky-50"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
