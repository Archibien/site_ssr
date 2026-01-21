export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseUrl = 'https://www.archibien.com'

  const references = await $fetch<any[]>(`${config.public.apiBase}/sitemap/references/`, {
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })

  const urls = references
    .map(
      (r) => `
    <url>
      <loc>${baseUrl}${r.url}</loc>
      <lastmod>${r.lastmod}</lastmod>
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
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
})
