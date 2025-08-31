import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@next/font'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.chandracoaters.in',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
