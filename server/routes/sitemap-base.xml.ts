import { sitemapHeaders } from '~/utils'
export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const baseSiteUrl = 'https://www.archibien.com'

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseSiteUrl}/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/a-propos/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/architectes/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/cgu/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/contact/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/cookies/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/medias/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/mentions-legales/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/tarifs/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/services/consultation/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/services/etude-de-faisabilite/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseSiteUrl}/services/visite-conseil-ou-mise-en-relation/</loc>
    <lastmod>2026-01-22</lastmod>
  </sitemap>
</sitemapindex>`

  return new Response(xml, {
    // 7 days cache for browsers, 1 hour for CDN
    headers: sitemapHeaders(604800, 3600),
  })
})
