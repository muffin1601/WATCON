import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://watcon.co.in';
  
  // Static pages
  const pages = [
    '',
    '/about',
    '/portfolio',
    '/blog',
    '/faq',
    '/top-swimming-pool-builders-india',
    '/contact',
    '/clients'
  ];

  const pageUrls = pages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

 
  const services = [
    'competition-pool', 'cryo-room', 'dehumidifier', 'jacuzzi', 'koi-ponds',
    'outdoor-fireplaces', 'outdoor-furniture', 'sauna', 'spa', 'steam',
    'swimming-pools', 'tiles-in-pool', 'water-bodies'
  ];

  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog posts (Dynamic routes)
  const blogUrls = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(), 
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pageUrls, ...serviceUrls, ...blogUrls];
}
