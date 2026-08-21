import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kachitaro.vercel.app';
  const currentDate = new Date();

  const routes = ['', '/about', '/skills', '/projects', '/experience', '/contact'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
