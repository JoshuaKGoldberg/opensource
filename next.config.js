const withTM = require("next-transpile-modules")([
  "@codecademy/gamut",
  "@codecademy/konamimojisplosion",
  "@codecademy/variance",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // @TODO: [https://codecademy.atlassian.net/browse/WEB-1808]
    // Enable this and remove `next-transpile-modules` once we've eliminated CSS modules from gamut-labs & co
    esmExternals: false,
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
