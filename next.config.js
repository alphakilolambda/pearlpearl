/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath removed for custom domain (nlpearlai.xyz)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

