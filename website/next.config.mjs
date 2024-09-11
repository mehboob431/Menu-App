/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',  // Added w7.pngwing.com
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
