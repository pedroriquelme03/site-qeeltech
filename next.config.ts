import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (avoids inferring a parent dir).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
