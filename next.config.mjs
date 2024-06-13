/** @type {import('next').NextConfig}  */
const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"], // Ensure you need this
    },
    images: {
      domains: ['lh3.googleusercontent.com'], // Allows images from Google
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true, // Enables top-level await in Webpack
      }
      return config
    }
}

export default nextConfig ; 
