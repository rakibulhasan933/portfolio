/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
      },
    ],
    qualities: [100],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2678400, // 31 days
  },
}

export default nextConfig
