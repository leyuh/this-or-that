/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*images.stockcake.com",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org*",
            },
            {
                protocol: "https",
                hostname: "www.wikipedia.org*",
            },
            {
                protocol: "https",
                hostname: "rwfs.renweb.com*",
            },
        ]
    }
};

export default nextConfig;
