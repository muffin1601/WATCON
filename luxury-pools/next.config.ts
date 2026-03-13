import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ddasports.in',
      }
    ],
  },
};

export default nextConfig;
