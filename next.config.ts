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
      {
        protocol: "http",
        hostname: "62.72.29.120",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/api/section",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/section`,
      },
    ];
  },
};

export default nextConfig;
