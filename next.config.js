/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.amazonaws.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    env: {
        NEXT_PUBLIC_URL_BE_SERVICE: process.env.NEXT_PUBLIC_URL_BE_SERVICE,
      },
}

module.exports = nextConfig
