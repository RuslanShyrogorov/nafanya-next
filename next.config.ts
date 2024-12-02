import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '', // Leave blank if no specific port is required
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
}

export default nextConfig
