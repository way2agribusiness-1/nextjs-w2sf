/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com","backend.way2foods.in", "lh3.googleusercontent.com",'127.0.0.1'],
  },
}

module.exports = nextConfig
