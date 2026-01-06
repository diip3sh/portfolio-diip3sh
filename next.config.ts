import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "w.wallhaven.cc" },
      { protocol: "https", hostname: "images.unsplash.com"},
      { protocol: "https", hostname: "plus.unsplash.com"},
    ],
  },
};

export default nextConfig;
