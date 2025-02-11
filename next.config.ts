/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true, // Հնարավոր խնդիրների լուծում
  },
};

module.exports = nextConfig;
