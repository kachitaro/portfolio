import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/experience', destination: '/#experience', permanent: true },
      { source: '/projects', destination: '/#work', permanent: true },
      { source: '/skills', destination: '/#about', permanent: true },
    ];
  },
};

export default nextConfig;
