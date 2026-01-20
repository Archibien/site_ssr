export default defineEventHandler(async () => {
  const config = useRuntimeConfig();

  const baseSiteUrl = "https://www.archibien.com";
  const apiBase = config.public.apiBase; // http://localhost:8000/api/public/v3

  // Fallback: today (YYYY-MM-DD)
  const today = new Date().toISOString().slice(0, 10);

  let lastmods: { agencies?: string } = {};

  try {
    lastmods = await $fetch(`${apiBase}/sitemap/lastmod/`);
  } catch (err) {
    // Fallback if backend is temporarily unavailable
    console.warn("Failed to fetch sitemap lastmod, using fallback date");
  }

  const agenciesLastmod = lastmods.agencies || today;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseSiteUrl}/sitemap-agencies.xml</loc>
    <lastmod>${agenciesLastmod}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
});
