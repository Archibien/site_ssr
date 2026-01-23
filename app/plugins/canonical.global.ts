export default defineNuxtPlugin(() => {
  const route = useRoute()
  const config = useRuntimeConfig()

  const canonical = computed(() => {
    // Enforce trailing slash consistency
    let path = route.path

    if (!path.endsWith('/')) {
      path += '/'
    }

    return `${config.public.siteUrl}${path}`
  })

  useHead({
    link: [
      {
        rel: 'canonical',
        href: canonical,
      },
    ],
  })
})
