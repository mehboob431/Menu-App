/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'w7.pngwing.com',  // Added w7.pngwing.com
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
