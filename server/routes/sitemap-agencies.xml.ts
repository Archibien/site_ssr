import { sitemapHeaders } from '~/utils'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseUrl = 'https://www.archibien.com'

  const agencies = await $fetch<any[]>(`${config.public.apiBase}/sitemap/agencies/`, {
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })

  const urls = agencies
    .map(
      (a) => `
    <url>
      <loc>${baseUrl}${a.url}</loc>
      <lastmod>${a.lastmod}</lastmod>
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
    // 1 day cache for browsers, 15 minutes for CDN
    headers: sitemapHeaders(86400, 900),
  })
})
