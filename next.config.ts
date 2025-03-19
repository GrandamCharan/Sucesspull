import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tcuadaxxxenfwmdmuwie.supabase.co", // Supabase storage domain
        pathname: "/storage/v1/object/public/**", // Path pattern for the images
      },
    ],
  },
};

export default nextConfig;
