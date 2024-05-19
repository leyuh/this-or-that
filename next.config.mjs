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
                hostname: "i.abcnewsfe.com*",
            },
            {
                protocol: "https",
                hostname: "static01.nyt.com*",
            },
        ]
    }
};

export default nextConfig;
