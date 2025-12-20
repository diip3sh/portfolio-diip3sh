import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
		remotePatterns: [
			{protocol:"https", hostname:"framerusercontent.com"},
			{protocol:"https", hostname:"w.wallhaven.cc"}],
  },
};

export default nextConfig;
