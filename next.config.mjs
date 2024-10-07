/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "", // Leave this empty if not using a specific port
        pathname: "/photos/**", // Matches the image paths you need
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        port: "", // Leave this empty if not using a specific port
        pathname: "/img/**", // Matches the image paths you need
      },
    ],
  },
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
