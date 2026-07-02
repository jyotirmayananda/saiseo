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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 py-2.5 shadow-soft backdrop-blur-md"
            : "bg-white/60 py-4 backdrop-blur-sm"
        )}
      >
        <div className="container-main flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Sai SEO" width={36} height={36} priority />
            <div className="hidden sm:block">
              <p className="font-heading text-sm font-bold leading-tight text-brand">
                Sai SEO Solution
              </p>
              <p className="text-[10px] text-muted">Software & Hardware</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/result" className="btn-teal !px-5 !py-2 text-xs">
              Check Result
              <ChevronRight size={14} />
            </Link>
          </nav>

          <button
            className="rounded-lg p-2 text-brand md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-brand/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-y-0 right-0 z-[70] w-full max-w-xs bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-brand">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close">
                  <X size={22} className="text-slate-500" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {[...navLinks, { href: "/result", label: "Check Result" }].map(
                  (link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 font-medium text-brand hover:bg-surface-2"
                    >
                      {link.label}
                    </Link>
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
