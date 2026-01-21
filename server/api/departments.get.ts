export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)

  const code = query.code as string

  if (!code) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing department code',
    })
  }

  return await $fetch(`${config.public.apiBase}/departments/`, {
    query: {
      code,
    },
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })
})
