import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

let initialized = false

export async function useGoogleMaps() {
  const config = useRuntimeConfig()

  if (!initialized) {
    setOptions({
      key: config.public.googleMapsApiKey,
      // Style de carte créé ici : https://console.cloud.google.com/google/maps-apis/studio/maps?authuser=1&project=archibien&supportedpurview=project
      mapIds: [config.public.simpleMapId],
    })
    initialized = true
  }

  // Load libraries (idempotent)
  await Promise.all([importLibrary('maps'), importLibrary('places'), importLibrary('marker')])

  // After importLibrary resolves, google.maps is available
  return window.google
}
