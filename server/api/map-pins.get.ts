export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  const bbox = query.bbox

  if (!bbox) {
    throw createError({
      statusCode: 400,
      statusMessage: 'bbox query parameter is required',
    })
  }

  const config = useRuntimeConfig()
  console.log('Fetching API map-pins with bbox:', bbox)
  // Forward request to Django public API
  return await $fetch(`${config.public.apiBase}/map-pins/`, {
    query: {
      bbox,
    },

    // VERY IMPORTANT:
    // - server-side fetch
    // - let Django control cache headers
    headers: {
      Accept: 'application/json',
    },
  })
})
