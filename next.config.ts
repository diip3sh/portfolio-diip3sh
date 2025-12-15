import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: '/public/**',
        search: '',
      },
    ],
    domains: ["framerusercontent.com"],
  },
};

export default nextConfig;
