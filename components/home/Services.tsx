"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { images } from "@/lib/images";

const services = [
  { title: "Desktop & Laptop Repair", image: images.services.repair },
  { title: "Printer Repair", image: images.services.printer },
  { title: "Cartridge Refilling", image: images.services.cartridge },
  { title: "Networking & Hosting", image: images.services.network },
  { title: "Software Development", image: images.services.development },
  { title: "Digital Marketing", image: images.services.marketing },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-main">
        <SectionHeader
          label="Services"
          title="Complete IT & hardware solutions"
          description="Beyond training — we offer professional repair, development, and digital services for individuals and businesses."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-hover group overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="border-t border-slate-100 p-4">
                <h3 className="font-heading font-semibold text-brand">{service.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
