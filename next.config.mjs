/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com', // Correct hostname for ImgBB
        },
      ],
    },
  };
  
  export default nextConfig;
  