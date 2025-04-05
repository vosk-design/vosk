import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "pub-d0ef8135e95543f382dbe2a8e47ba6b8.r2.dev",
      },
      {
        hostname: "www.google.com",
      },
    ],
  },
};

export default nextConfig;
