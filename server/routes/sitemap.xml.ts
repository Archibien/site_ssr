export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const baseSiteUrl = 'https://www.archibien.com'
  const apiBase = config.public.apiBase

  // Fallback: today (YYYY-MM-DD)
  const today = new Date().toISOString().slice(0, 10)

  let lastmods: { agencies?: string; cities?: string; references?: string } = {}

  try {
    lastmods = await $fetch<{ agencies?: string; cities?: string; references?: string }>(
      `${apiBase}/sitemap/lastmod/`,
      {
        headers: {
          'X-Public-Api-Key': config.apiSecret,
        },
      }
    )
  } catch (err) {
    // Fallback if backend is temporarily unavailable
    console.warn('Failed to fetch sitemap lastmod, using fallback date')
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseSiteUrl}/sitemap-agencies.xml</loc>
    <lastmod>${lastmods.agencies || today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/sitemap-cities.xml</loc>
    <lastmod>${lastmods.cities || today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/sitemap-references.xml</loc>
    <lastmod>${lastmods.references || today}</lastmod>
  </sitemap>
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
})
