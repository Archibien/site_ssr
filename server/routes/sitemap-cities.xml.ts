import { sitemapHeaders } from '~/utils'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseUrl = 'https://www.archibien.com'

  const cities = await $fetch<any[]>(`${config.public.apiBase}/sitemap/cities/`, {
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })

  const urls = cities
    .map(
      (c) => `
    <url>
      <loc>${baseUrl}${c.url}</loc>
      <lastmod>${c.lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: sitemapHeaders(259200, 1800),
  })
})
