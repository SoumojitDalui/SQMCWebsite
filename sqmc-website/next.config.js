/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 1,
    disableStaticImages: true,
    unoptimized: true
  },

  typescript: {
    ignoreBuildErrors: true
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  swcMinify: true,
}

module.exports = nextConfig
