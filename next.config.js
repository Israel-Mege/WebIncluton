/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Necesario para generar archivos estáticos para Cloudflare Pages
  images: {
    unoptimized: true, // Necesario para exportación estática
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true, // Ayuda con el enrutamiento en Cloudflare Pages
};

module.exports = nextConfig;
