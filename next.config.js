const { FaL } = require("react-icons/fa6");
const withMdx = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = withMdx(nextConfig);
