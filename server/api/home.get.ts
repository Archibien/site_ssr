export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  setHeader(event, 'Cache-Control', 'public, s-maxage=3600')

  return await $fetch(`${config.public.apiBase}/agencies-projects/`, {
    headers: {
      Accept: 'application/json',
      'X-Public-Api-Key': config.apiSecret,
    },
  })
})
