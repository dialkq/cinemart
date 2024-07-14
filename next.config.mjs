/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Ubah :path* menjadi * untuk menangani semua path
        destination: "https://api.themoviedb.org/:path*", // Pastikan destinasi sesuai dengan API yang dimaksud
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/**", // Ubah pathname menjadi /** untuk mencakup semua subpath
      },
    ],
  },
};

export default nextConfig;