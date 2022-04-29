/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.node = {
  //     fs: 'empty'
  //   }
  //   return config;
  // },
  env: {
    PUBLIC_URL: "https://fortierpm.netlify.app",
  }
}

module.exports = nextConfig;
