import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_PRODUCTION_URL || 'https://doktoronline.ba'
  const lastModified = new Date('2024-01-01') // Fixed date for better caching
  
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add more URLs only when you create those pages
    // Example for future pages:
    // {
    //   url: `${baseUrl}/doktori`,
    //   lastModified,
    //   changeFrequency: 'weekly',  
    //   priority: 0.9,
    // },
  ]
}