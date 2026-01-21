import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

let initialized = false

export async function useGoogleMaps() {
  const config = useRuntimeConfig()

  if (!initialized) {
    setOptions({
      key: config.public.googleMapsApiKey,
    })
    initialized = true
  }

  // Load libraries (idempotent)
  await Promise.all([importLibrary('maps'), importLibrary('places'), importLibrary('marker')])

  // After importLibrary resolves, google.maps is available
  return window.google
}
