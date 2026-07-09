"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Images } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  galleryImages,
  galleryVideos,
  mediaUrl,
} from "@/lib/gallery";

type Tab = "photos" | "videos";

export default function GalleryPageContent() {
  const [tab, setTab] = useState<Tab>("photos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxType, setLightboxType] = useState<"image" | "video">("image");

  const openImage = (filename: string) => {
    setLightboxType("image");
    setLightbox(mediaUrl(filename));
  };

  const openVideo = (filename: string) => {
    setLightboxType("video");
    setLightbox(mediaUrl(filename));
  };

  return (
    <section className="min-h-screen bg-surface pb-20 pt-20 sm:pt-24 sm:pb-16">
      <div className="container-main">
        <SectionHeader
          label="Gallery"
          title="Life at Sai SEO Solution"
          description="Photos and videos from our institute, classrooms, events, and campus activities in Berhampur."
        />

        <div className="mt-8 flex justify-center gap-2">
          {(["photos", "videos"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                tab === t
                  ? "bg-brand text-white"
                  : "bg-white text-brand border border-slate-200 hover:bg-surface-2"
              }`}
            >
              {t} ({t === "photos" ? galleryImages.length : galleryVideos.length})
            </button>
          ))}
        </div>

        {tab === "photos" ? (
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((file, i) => (
              <motion.button
                key={file}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.04 }}
                onClick={() => openImage(file)}
                className="mb-4 block w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-teal/40"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={mediaUrl(file)}
                    alt={`Sai SEO Solution gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.map((file) => (
              <motion.div
                key={file}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <video
                  src={mediaUrl(file)}
                  controls
                  className="aspect-video w-full bg-black object-contain"
                  preload="metadata"
                />
                <button
                  type="button"
                  onClick={() => openVideo(file)}
                  className="w-full border-t border-slate-100 px-4 py-2 text-left text-sm font-medium text-teal-dark hover:bg-surface-2"
                >
                  Open fullscreen
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxType === "image" ? (
                <div className="relative max-h-[85vh] w-[min(90vw,960px)]">
                  <Image
                    src={lightbox}
                    alt="Gallery preview"
                    width={1200}
                    height={900}
                    className="max-h-[85vh] w-auto rounded-lg object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <video
                  src={lightbox}
                  controls
                  autoPlay
                  className="max-h-[85vh] max-w-[90vw] rounded-lg"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function GalleryPreview() {
  const preview = galleryImages.slice(-8).reverse();

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            label="Gallery"
            title="Our institute in pictures"
            description="Explore campus life, training sessions, and events at Sai SEO Solution."
            align="left"
          />
          <Link href="/gallery" className="btn-secondary shrink-0">
            <Images size={16} />
            View all
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {preview.map((file, i) => (
            <Link
              key={file}
              href="/gallery"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-soft"
            >
              <div className="relative aspect-square">
                <Image
                  src={mediaUrl(file)}
                  alt={`Gallery preview ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-brand/0 transition-colors group-hover:bg-brand/20" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
