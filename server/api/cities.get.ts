export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const config = useRuntimeConfig()

  const postCode = query.post_code as string
  const city = query.city as string

  if (!postCode || !city) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing city params',
    })
  }

  return await $fetch(`${config.public.apiBase}/cities/`, {
    query: {
      post_code: postCode,
      city: city.toLowerCase(),
    },
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })
})
