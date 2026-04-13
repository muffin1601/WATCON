import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
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
      // Dead page URLs Google crawled → redirect to correct pages
      {
        source: '/about-us/',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/contact-us/',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/water-bodies',
        destination: '/services/water-bodies/',
        permanent: true,
      },
      {
        source: '/outdoor-firepalces',
        destination: '/services/outdoor-fireplaces/',
        permanent: true,
      },
      {
        source: '/jacuzzi',
        destination: '/services/jacuzzi/',
        permanent: true,
      },
      {
        source: '/clients-1/',
        destination: '/clients/',
        permanent: true,
      },
      {
        source: '/clients-1',
        destination: '/clients/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
