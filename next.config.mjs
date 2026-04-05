const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingExcludes: {
    "*": [
      "node_modules/@vercel/og/**",
      "node_modules/next/dist/compiled/@vercel/og/**",
      "node_modules/@resvg/resvg-js*/**",
      "node_modules/@yoga-layout/wasm/**"
    ],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {},
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Stub out the heavy @vercel/og library which adds ~1.8MB of WASM bloat
      config.resolve.alias["@vercel/og"] = false;
    }
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
