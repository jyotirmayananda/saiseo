import { pickImage } from "@/lib/gallery";

/** Site-wide image map using local gallery photos */
export const images = {
  hero: pickImage(31),
  heroAlt: "Sai SEO Solution institute",
  courses: {
    software: pickImage(16),
    shortTerm: pickImage(9),
    classroom: pickImage(24),
  },
  services: {
    repair: pickImage(0),
    printer: pickImage(3),
    cartridge: pickImage(6),
    network: pickImage(12),
    development: pickImage(18),
    marketing: pickImage(21),
  },
  showcase: pickImage(28),
  branch: pickImage(25),
  iso: pickImage(30),
  cta: pickImage(14),
} as const;
