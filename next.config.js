/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.node = {
  //     fs: 'empty'
  //   }
  //   return config;
  // },
}

module.exports = nextConfig;
