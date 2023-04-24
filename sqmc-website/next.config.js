/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 1,
    disableStaticImages: true,
    unoptimized: true
  },
}

module.exports = nextConfig
