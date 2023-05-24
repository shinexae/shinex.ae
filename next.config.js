/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: "/qr",
        destination: "/images/shinex_qr.webp",
        permanent: true,
      },
    ];
  },
};
