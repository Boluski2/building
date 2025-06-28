/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  // Optional: ESLint configuration (choose one approach)
  // Approach 1: Disable specific rules
  // eslint: {
  //   ignoreDuringBuilds: false,
  //   dirs: ['src'],
  //   // Optional: override specific rules
  //   rules: {
  //     'react/no-unescaped-entities': 'warn', // or 'off'
  //     'react-hooks/exhaustive-deps': 'warn' // or 'off'
  //   }
  // },
  
  // Approach 2: Disable ESLint completely during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig