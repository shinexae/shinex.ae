/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextTranslate(nextConfig, {
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
