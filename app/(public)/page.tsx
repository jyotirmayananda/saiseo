import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Showcase from "@/components/home/Showcase";
import Courses from "@/components/home/Courses";
import Services from "@/components/home/Services";
import ISOBadge from "@/components/home/ISOBadge";
import Branches from "@/components/home/Branches";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Showcase />
      <Courses />
      <Services />
      <ISOBadge />
      <Branches />
      <CTA />
    </>
  );
}
