"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Briefcase, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "ISO Certified",
    desc: "Quality-assured education",
  },
  {
    icon: Cpu,
    title: "Modern Labs",
    desc: "Hands-on technology training",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    desc: "Industry-aligned programs",
  },
  {
    icon: Headphones,
    title: "IT Services",
    desc: "Hardware & software support",
  },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-sky-100 bg-white py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-teal/10 text-teal-dark">
                <item.icon size={22} />
              </div>
              <div>
                <p className="font-heading font-semibold text-[#0c2d48]">{item.title}</p>
                <p className="mt-0.5 text-sm text-[#1e4976]/65">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
