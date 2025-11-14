import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoshi0518.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yoshi0518.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://yoshi0518.com/privacy-policy',
      lastModified: new Date(),
    },
    {
      url: 'https://yoshi0518.com/discrimer',
      lastModified: new Date(),
    },
  ];
}
