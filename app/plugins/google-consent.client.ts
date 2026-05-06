export default defineNuxtPlugin(() => {
  if (!process.client) return

  // 1. Create dataLayer
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  // 2. Load Google tag immediately (ADVANCED MODE)
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2FZ6E5PM6T'
  document.head.appendChild(script)

  // 3. Default consent denied
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  })

  // 4. Initialize GA (cookieless until granted)
  gtag('js', new Date())
  gtag('config', 'G-2FZ6E5PM6T', {
    anonymize_ip: true,
  })

  // expose globally
  window.gtag = gtag

  // 5. Restore consent for returning visitors who already accepted
  const existingConsent = useCookie('cookie_consent')
  if (existingConsent.value === true) {
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    })
  }
})
