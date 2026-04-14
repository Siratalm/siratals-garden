import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — pure HTML/CSS/JS, no Node.js server needed
  output: "export",

  // Enable gzip + brotli compression
  compress: true,

  // Remove X-Powered-By header
  poweredByHeader: false,

  // React strict mode for better dev experience
  reactStrictMode: true,

  // Disable trailing slashes for cleaner URLs
  trailingSlash: false,

  // Image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
