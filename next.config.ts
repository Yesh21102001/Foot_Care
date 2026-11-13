import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds plain HTML into ./out for Firebase Hosting (free plan). Static files can't be resized on
// request, so image optimisation is switched off for that build only; `next dev` and `next start` keep it.
// Cache Components (partial prerendering) can't run in export mode either; no page uses it, they are all static.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: !staticExport,
  partialPrefetching: !staticExport,
  ...(staticExport && { output: "export", images: { unoptimized: true } }),
};

export default nextConfig;
