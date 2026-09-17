const isPagesBuild = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPagesBuild ? '/cat-scroll' : '',
};

export default nextConfig;
