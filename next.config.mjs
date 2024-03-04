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
};

export default nextConfig;
