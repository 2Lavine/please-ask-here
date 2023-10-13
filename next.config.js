/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openask.me',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
