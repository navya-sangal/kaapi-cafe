import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image only loads photos from hosts listed here (a safety feature).
    // Add your client's image host if their photos live somewhere else.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    // AVIF photos are usually much smaller than WebP; browsers that can't show AVIF get WebP.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Puts the (small) stylesheet straight into the HTML instead of a separate file,
    // so phones can draw the page one network round trip sooner.
    inlineCss: true,
  },
};

export default nextConfig;
