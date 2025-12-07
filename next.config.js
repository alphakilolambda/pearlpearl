/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pearlpearl',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

