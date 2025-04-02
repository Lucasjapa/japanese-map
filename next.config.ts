import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Ignora erros do TypeScript no build
    },
};

export default nextConfig;
