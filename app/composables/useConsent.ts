export const useConsent = () => {
  const consent = useCookie<boolean | null>('cookie_consent', {
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 180,
  })
  const bannerVisible = computed(() => consent.value == null)

  const grantConsent = () => {
    consent.value = true

    window.gtag?.('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    })

    loadHubspot()
  }

  const denyConsent = () => {
    consent.value = false
  }

  const loadHubspot = () => {
    if (document.getElementById('hs-script')) return

    const script = document.createElement('script')
    script.id = 'hs-script'
    script.async = true
    script.src = 'https://js.hs-scripts.com/4999873.js'
    document.body.appendChild(script)
  }

  const loadGTM = () => {
    if (consent.value !== true) return
    if (document.getElementById('gtm-script')) return

    const script = document.createElement('script')
    script.id = 'gtm-script'
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NXN3SL9T'
    document.head.appendChild(script)
  }

  return {
    consent,
    bannerVisible,
    grantConsent,
    denyConsent,
    loadGTM,
  }
}
