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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
          scrolled ? "glass-nav-light py-2" : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl">
              <Image
                src="/logo.svg"
                alt="Sai SEO Solution"
                width={36}
                height={36}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span
              className={cn(
                "hidden font-heading text-sm font-semibold tracking-tight sm:block",
                scrolled ? "text-black" : "text-white"
              )}
            >
              Sai SEO Solution
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300",
                  scrolled
                    ? "text-[#1d1d1f] hover:text-teal"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/result"
              className={cn(
                "group flex items-center gap-1 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                scrolled
                  ? "bg-black text-white hover:bg-[#1d1d1f]"
                  : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              )}
            >
              Check Result
              <ChevronRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            className={cn(
              "md:hidden",
              scrolled ? "text-black" : "text-white"
            )}
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
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-[#1d1d1f] p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-white">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="mt-12 flex flex-col gap-2">
                {[...navLinks, { href: "/result", label: "Check Result" }].map(
                  (link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl px-4 py-4 text-lg font-medium text-white/90 transition-colors hover:bg-white/5"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
