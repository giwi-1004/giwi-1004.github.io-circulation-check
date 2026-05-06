/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(process.env.GITHUB_ACTIONS
    ? {
        basePath: "/giwi-1004.github.io-circulation-check",
        assetPrefix: "/giwi-1004.github.io-circulation-check/",
      }
    : {}),
}

export default nextConfig
