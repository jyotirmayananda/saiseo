"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1d1d1f] text-[#86868b]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Sai SEO" width={36} height={36} />
              <span className="font-heading text-sm font-semibold text-white">
                Sai SEO Solution
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A Unit of Software & Hardware Solution. Premium computer education
              and IT services in Berhampur, Odisha.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/#courses", label: "Courses" },
                { href: "/#services", label: "Services" },
                { href: "/#branches", label: "Branches" },
                { href: "/result", label: "Check Result" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="tel:9437020011"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone size={14} className="text-teal" />
                  +91 9437020011
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@saiseo.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail size={14} className="text-teal" />
                  info@saiseo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sai SEO Solution. All rights reserved.</p>
          <Link href="/admin/login" className="transition-colors hover:text-white">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
