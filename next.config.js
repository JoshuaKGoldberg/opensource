const withTM = require("next-transpile-modules")([
  "@codecademy/gamut",
  "@codecademy/konamimojisplosion",
  "@codecademy/variance",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
