import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mevot",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
