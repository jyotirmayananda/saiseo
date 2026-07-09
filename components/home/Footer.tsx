"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-brand text-white/70">
      <div className="container-main py-12 pb-8 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt="Sai SEO" width={32} height={32} />
              <span className="font-heading text-sm font-bold text-white">
                Sai SEO Solution
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A Unit of Software & Hardware Solution. Quality computer education
              and IT services in Berhampur, Odisha.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { href: "/#courses", label: "Courses" },
                { href: "/#services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/#location", label: "Location" },
                { href: "/result", label: "Check Result" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-teal-light" />
                Hatibandha Street, Brahmapur
              </li>
              <li>
                <a href="tel:9437020011" className="flex items-center gap-2 hover:text-white">
                  <Phone size={15} className="text-teal-light" />
                  +91 9437020011
                </a>
              </li>
              <li>
                <a href="mailto:info@saiseo.com" className="flex items-center gap-2 hover:text-white">
                  <Mail size={15} className="text-teal-light" />
                  info@saiseo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Sai SEO Solution. All rights reserved.</p>
          <Link href="/admin/login" className="hover:text-white">
            Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
}
