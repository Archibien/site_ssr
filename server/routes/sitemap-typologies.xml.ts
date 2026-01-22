import { sitemapHeaders } from '~/utils'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseUrl = 'https://www.archibien.com'

  const typologies = await $fetch<any[]>(`${config.public.apiBase}/sitemap/typologies/`, {
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })

  const urls = typologies
    .map(
      (t) => `
    <url>
      <loc>${baseUrl}${t.url}</loc>
      <lastmod>${t.lastmod}</lastmod>
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
