import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do not fail production builds on ESLint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
