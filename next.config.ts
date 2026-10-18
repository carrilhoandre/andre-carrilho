import type { NextConfig } from "next";

// Export estático: gera a pasta out/ e roda em qualquer host (Vercel, GitHub Pages, Netlify).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
