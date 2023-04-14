/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.cricketcb.com"],
  },
}

module.exports = nextConfig
