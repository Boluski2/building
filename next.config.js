module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      }
    ],
  },
    eslint: {
    ignoreDuringBuilds: true,
  },
}

// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// }