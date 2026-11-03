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
  // The theme's fonts, icons and CSS are served from the live site without CORS headers,
  // so browsers block them when loaded cross-origin. Proxy only these static assets same-origin.
  async rewrites() {
    return [
      {
        source: "/wellxess/wp-content/:path*",
        destination: "https://dev265.kodesolution.com/wellxess/wp-content/:path*",
      },
      {
        source: "/wellxess/wp-includes/:path*",
        destination: "https://dev265.kodesolution.com/wellxess/wp-includes/:path*",
      },
    ];
  },
};

export default nextConfig;
