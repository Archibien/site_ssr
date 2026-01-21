export default defineEventHandler(async (event) => {
  console.log('Fetching 30 agencies from backend')
  const config = useRuntimeConfig()
  const query = getQuery(event)
  // Build backend query params safely
  const params: Record<string, any> = {}

  if (query.type) {
    params.type = query.type
  }

  if (query.category) {
    params.category = query.category
  }

  setHeader(event, 'Cache-Control', 'public, s-maxage=86400')

  return await $fetch(`${config.public.apiBase}/agencies/?page_size=30`, {
    headers: {
      Accept: 'application/json',
      'X-Public-Api-Key': config.apiSecret,
    },
    query: params,
  })
})
