"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

const location = {
  name: "Sai SEO Solution",
  tag: "Our Campus",
  address: "Hatibandha Street, Brahmapur",
  phones: ["9437020011", "9437020012"],
};

export default function Branches() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              label="Location"
              title="Visit us in Berhampur"
              description="Find us at Hatibandha Street, Brahmapur — walk in or call to schedule a campus visit."
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-hover mt-8 p-5"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">
                {location.tag}
              </span>
              <h3 className="mt-1 font-heading text-lg font-semibold text-brand">
                {location.name}
              </h3>
              <div className="mt-3 flex items-start gap-2 text-sm text-muted">
                <MapPin size={15} className="mt-0.5 shrink-0 text-teal" />
                {location.address}
              </div>
              <div className="mt-2 space-y-1">
                {location.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center gap-2 text-sm font-medium text-brand hover:text-teal-dark"
                  >
                    <Phone size={14} className="text-teal" />
                    +91 {phone}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card overflow-hidden shadow-card"
          >
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src={images.branch}
                alt="Sai SEO Solution office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="border-t border-slate-100 bg-surface p-5">
              <p className="font-heading font-semibold text-brand">Open for admissions</p>
              <p className="mt-1 text-sm text-muted">
                Walk in or call to schedule a campus visit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
