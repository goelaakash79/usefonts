/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fonts.gstatic.com'],
  },
  // Optimize font loading
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig 