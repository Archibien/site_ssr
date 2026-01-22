export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const config = useRuntimeConfig()

  const types = query.types as string
  const category = query.category as string
  const code = query?.code as string

  if (!types || !category) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing types and category params',
    })
  }

  return await $fetch(`${config.public.apiBase}/typologies/`, {
    query: {
      types: types,
      category: category,
      code: code,
    },
    headers: {
      'X-Public-Api-Key': config.apiSecret,
    },
  })
})
