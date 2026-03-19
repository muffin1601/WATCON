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
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
  async redirects() {
    return [
      // ── www → non-www canonical redirect (fixes duplicate-without-canonical for ALL pages) ──
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.watcon.co.in' }],
        destination: 'https://watcon.co.in/:path*',
        permanent: true,
      },

      // ── Dead blog slugs Google cached (non-www) → /blog ──
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

      // ── Same dead slugs on www (single-hop: skips the www→non-www step) ──
      {
        source: '/blog/musical-fountains-luxury-hotels',
        has: [{ type: 'host', value: 'www.watcon.co.in' }],
        destination: 'https://watcon.co.in/blog',
        permanent: true,
      },
      {
        source: '/blog/cold-plunge-pools-wellness-resorts',
        has: [{ type: 'host', value: 'www.watcon.co.in' }],
        destination: 'https://watcon.co.in/blog',
        permanent: true,
      },

      // ── Dead non-service URLs Google has crawled ──
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

