/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "img.siksinhot.com",
      "ak-d.tripcdn.com",
      "assets.untappd.com",
      "contents.sixshop.com",
      "blog.kakaocdn.net",
      "static.hubzum.zumst.com",
      "junggutongsin.com",
      "d12zq4w4guyljn.cloudfront.net",
      "example.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
