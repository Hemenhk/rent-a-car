/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/webp"],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
    CLOUDINARY_NAME:  process.env.CLOUDINARY_NAME,
    CLOUDINARY_PRESET:  process.env.CLOUDINARY_PRESET,
  },
};

module.exports = nextConfig;
