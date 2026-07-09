/** Local media in public/imges/ */
export const MEDIA_FOLDER = "/imges";

export const galleryImages = [
  "WhatsApp Image 2026-07-02 at 23.19.56.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.08.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.12.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.17.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.21.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.23.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.28.jpeg",
  "WhatsApp Image 2026-07-02 at 23.20.43.jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.17.jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.18.jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.35.jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.43 (1).jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.43.jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.44.jpeg",
  "WhatsApp Image 2026-07-02 at 23.21.46.jpeg",
  "WhatsApp Image 2026-07-02 at 23.22.09.jpeg",
  "WhatsApp Image 2026-07-02 at 23.22.14.jpeg",
  "WhatsApp Image 2026-07-02 at 23.22.34.jpeg",
  "WhatsApp Image 2026-07-02 at 23.25.37.jpeg",
  "WhatsApp Image 2026-07-02 at 23.25.45.jpeg",
  "WhatsApp Image 2026-07-02 at 23.27.24.jpeg",
  "WhatsApp Image 2026-07-02 at 23.28.35.jpeg",
  "WhatsApp Image 2026-07-02 at 23.28.46.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.03.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.24.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.32.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.33.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.38.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.42.jpeg",
  "WhatsApp Image 2026-07-02 at 23.29.48.jpeg",
  "WhatsApp Image 2026-07-02 at 23.30.56.jpeg",
  "WhatsApp Image 2026-07-02 at 23.31.08.jpeg",
  "WhatsApp Image 2026-07-02 at 23.31.12.jpeg",
  "WhatsApp Video 2026-07-02 at 23.19.40.jpeg",
] as const;

export const galleryVideos = [
  "WhatsApp Video 2026-07-02 at 23.15.53.mp4",
  "WhatsApp Video 2026-07-02 at 23.18.45.mp4",
  "WhatsApp Video 2026-07-02 at 23.19.40.mp4",
  "WhatsApp Video 2026-07-02 at 23.19.55.mp4",
  "WhatsApp Video 2026-07-02 at 23.21.45.mp4",
  "WhatsApp Video 2026-07-02 at 23.31.07 (1).mp4",
  "WhatsApp Video 2026-07-02 at 23.31.07.mp4",
  "WhatsApp Video 2026-07-02 at 23.31.08.mp4",
  "WhatsApp Video 2026-07-02 at 23.31.14 (1).mp4",
  "WhatsApp Video 2026-07-02 at 23.31.14.mp4",
] as const;

export function mediaUrl(filename: string): string {
  return `${MEDIA_FOLDER}/${encodeURIComponent(filename)}`;
}

export function pickImage(index: number): string {
  return mediaUrl(galleryImages[index % galleryImages.length]);
}

export function pickVideo(index: number): string {
  return mediaUrl(galleryVideos[index % galleryVideos.length]);
}
