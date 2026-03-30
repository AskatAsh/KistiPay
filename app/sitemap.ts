import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://kisti-pay.vercel.app';
  const currentDate = new Date();

  return [
    // Landing & Marketing Pages - High Priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/personal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/business`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

  ];
}