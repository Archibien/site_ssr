export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const body = await readBody(event)

  if (!body) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing body',
    })
  }

  try {
    return await $fetch(`${config.public.apiBase}/agency-contact/`, {
      method: 'POST',
      body,
      headers: {
        'X-Public-Api-Key': config.apiSecret,
      },
    })
  } catch (error: any) {
    // Optional: forward backend validation errors cleanly
    if (error?.status === 400) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid contact payload',
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit contact form',
    })
  }
})
