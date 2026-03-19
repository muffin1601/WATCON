import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
  async redirects() {
    return [
      // Dead blog slugs Google crawled → redirect to /blog
      {
        source: '/blog/musical-fountains-luxury-hotels',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/cold-plunge-pools-wellness-resorts',
        destination: '/blog',
        permanent: true,
      },
      // Dead page URLs Google crawled → redirect to correct pages
      {
        source: '/jacuzzi',
        destination: '/services/jacuzzi',
        permanent: true,
      },
      {
        source: '/clients-1',
        destination: '/clients',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
