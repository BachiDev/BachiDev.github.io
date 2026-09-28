import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for the GitHub Pages user site (BachiDev.github.io).
  // NOTE: `images.unoptimized` is required because Pages serves static files
  // only, so Next's image optimizer is unavailable. This used to be injected
  // implicitly by actions/configure-pages in CI; now it's explicit.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
