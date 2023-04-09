/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
    basePath: '/nextjs-nft-marketplace',
    images: {
        loader: "akamai",
        path: "",
    },
}

module.exports = nextConfig
