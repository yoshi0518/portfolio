import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yoshi0518's Portfolio",
    short_name: 'Yoshi0518',
    description: "Yoshi0518's Portfolio",
    start_url: '/',
    display: 'standalone',
    theme_color: '#000000',
    background_color: '#F9FAFB',
    icons: [
      { src: 'icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
