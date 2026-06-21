const nextConfig = {
    output: "export",
    trailingSlash: true,

    basePath: "/readmevisualizer",
    assetPrefix: "/readmevisualizer/",

    images: {
        unoptimized: true,
    },

    typescript: {
        ignoreBuildErrors: true,
    },
}

export default nextConfig 