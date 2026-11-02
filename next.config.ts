import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // The theme's icon fonts are served from the live site without CORS headers,
  // so browsers block them when loaded cross-origin. Proxy them same-origin.
  async rewrites() {
    return [
      {
        source: "/wellxess/:path*",
        destination: "https://dev265.kodesolution.com/wellxess/:path*",
      },
    ];
  },
};

export default nextConfig;
