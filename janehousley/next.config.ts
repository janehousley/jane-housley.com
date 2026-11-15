import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Image quality levels the site is allowed to request (home photo uses 90, its blurred backdrop 50)
    qualities: [50, 75, 90],
  },
};

export default nextConfig;
