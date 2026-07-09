"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Briefcase, Wrench } from "lucide-react";

const features = [
  { icon: Shield, title: "ISO 9001:2015", desc: "Certified quality education" },
  { icon: Cpu, title: "Modern Labs", desc: "Hands-on practical training" },
  { icon: Briefcase, title: "Career Focused", desc: "Industry-ready programs" },
  { icon: Wrench, title: "IT Services", desc: "Repair & development" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-100 bg-white py-8 sm:py-10">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-left"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">
                <item.icon size={20} />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-brand">{item.title}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
