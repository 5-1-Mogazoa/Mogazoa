/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "img.siksinhot.com",
      "ak-d.tripcdn.com",
      "assets.untappd.com",
      "contents.sixshop.com",
      "blog.kakaocdn.net",
      "static.hubzum.zumst.com",
      "junggutongsin.com",
      "d12zq4w4guyljn.cloudfront.net",
      "example.com",
      "images.unsplash.com",
      "img.danawa.com",
      "pbs.twimg.com",
      "t1.daumcdn.net",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/i,
      issuer: /.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
