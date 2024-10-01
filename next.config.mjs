/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lifestyle-eta.vercel.app'
            
          },
          {
            protocol: 'https',
            hostname: 'utfs.io'
            
          },
          {
            protocol:'https',
            hostname:'readymadeui.com'
          },
          {
            protocol:'https',
            hostname:'static.vecteezy.com'
          }
        ],
      },
};

export default nextConfig;
