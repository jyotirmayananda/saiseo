"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";

const branches = [
  {
    name: "Main Branch",
    address: "Hatibandha Street, Brahmapur",
    phones: ["9437020011", "9437020012"],
    primary: true,
  },
  {
    name: "Branch Office",
    address: "Gurunthi Main Road, Berhampur",
    phones: ["9437020013"],
    primary: false,
  },
];

export default function Branches() {
  return (
    <section id="branches" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label text-teal-dark">Locations</p>
            <h2 className="headline-lg mt-3 text-[#1d1d1f]">
              Visit us in Berhampur.
            </h2>
            <p className="mt-4 text-lg text-[#86868b]">
              Two convenient locations to serve students and clients across the
              region.
            </p>

            <div className="mt-10 space-y-4">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="group rounded-3xl border border-black/5 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                        {branch.primary ? "Head Office" : "Branch"}
                      </p>
                      <h3 className="mt-1 font-heading text-xl font-semibold text-[#1d1d1f]">
                        {branch.name}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-[#86868b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal"
                    />
                  </div>
                  <div className="mt-4 flex items-start gap-3 text-[#86868b]">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
                    <p className="text-sm">{branch.address}</p>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {branch.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="flex items-center gap-2 text-sm font-medium text-[#1d1d1f] transition-colors hover:text-teal"
                      >
                        <Phone size={14} className="text-teal" />
                        +91 {phone}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-4xl lg:aspect-square"
          >
            <Image
              src={images.branch}
              alt="Sai SEO Solution office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-heading text-2xl font-semibold text-white">
                Open for admissions
              </p>
              <p className="mt-1 text-sm text-white/70">
                Walk in or call to schedule a campus visit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
