/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
    unoptimized: false,
  },
}

module.exports = nextConfig
