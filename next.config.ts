import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/section",
        destination: "http://localhost:5000/api/section",
      },
    ];
  },
};

export default nextConfig;
