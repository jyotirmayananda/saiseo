"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

const services = [
  {
    title: "Desktop & Laptop Repair",
    description: "Precision repair for every major brand.",
    image: images.services.repair,
  },
  {
    title: "Printer Repair",
    description: "Expert maintenance and diagnostics.",
    image: images.services.printer,
  },
  {
    title: "Cartridge Refilling",
    description: "Premium ink & toner at fair prices.",
    image: images.services.cartridge,
  },
  {
    title: "Networking & Hosting",
    description: "Enterprise-grade infrastructure setup.",
    image: images.services.network,
  },
  {
    title: "Software Development",
    description: "Custom apps built for your business.",
    image: images.services.development,
  },
  {
    title: "Digital Marketing",
    description: "Grow your brand across every channel.",
    image: images.services.marketing,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-label">Services</p>
          <h2 className="headline-lg mt-3 text-white">
            Beyond the classroom.
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-xl">
            Full-stack IT and hardware services — the same quality you expect
            from world-class brands.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#1d1d1f]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-heading text-xl font-semibold text-white md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 transition-colors group-hover:text-white/80">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
