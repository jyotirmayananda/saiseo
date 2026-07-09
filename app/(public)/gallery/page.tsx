import type { Metadata } from "next";
import GalleryPageContent from "@/components/gallery/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery | Sai SEO Solution",
  description: "Photos and videos from Sai SEO Solution institute in Berhampur.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
