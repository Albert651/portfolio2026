import { useEffect, useRef } from 'react'
import { profile } from '../data/profile.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const THEME_COLORS = {
  dark: { background: '0f172a', text: 'e2e8f0', primary: '818cf8' },
  light: { background: 'ffffff', text: '0f172a', primary: '4f46e5' },
}

// Calendly localise surtout selon la langue du navigateur du visiteur.
// `locale` n'est pas officiellement documenté pour l'embed : on l'envoie
// quand même, Calendly l'utilise s'il le sait, sinon il l'ignore.
const CALENDLY_LOCALE = { fr: 'fr', en: 'en' }
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js'

export default function RendezVous({ theme }) {
  const { t, lang } = useLang()
  const containerRef = useRef(null)

  const { background, text, primary } = THEME_COLORS[theme] ?? THEME_COLORS.dark
  const widgetUrl = profile.calendly
    ? `${profile.calendly}?hide_gdpr_banner=1` +
      `&background_color=${background}&text_color=${text}&primary_color=${primary}` +
      `&locale=${CALENDLY_LOCALE[lang] ?? 'fr'}`
    : null

  useEffect(() => {
    if (!widgetUrl) return
    let cancelled = false

    const render = () => {
      if (cancelled || !containerRef.current || !window.Calendly) return
      containerRef.current.innerHTML = ''
      window.Calendly.initInlineWidget({
        url: widgetUrl,
        parentElement: containerRef.current,
      })
    }

    if (window.Calendly) {
      render()
      return () => {
        cancelled = true
      }
    }

    let script = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`)
    const created = !script
    if (!script) {
      script = document.createElement('script')
      script.src = CALENDLY_SCRIPT
      script.async = true
      document.body.appendChild(script)
    }
    script.addEventListener('load', render)

    return () => {
      cancelled = true
      script.removeEventListener('load', render)
      if (created) script.remove()
    }
  }, [widgetUrl])

  if (!widgetUrl) return null

  return (
    <section id="rendez-vous" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" /> {t('rdv.eyebrow')}
          </span>
          <h2 className="section-title mt-4">{t('rdv.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('rdv.intro')}</p>
        </div>

        <div className="reveal card mt-10 overflow-hidden p-2 sm:p-4" style={{ '--reveal-delay': '120ms' }}>
          <div ref={containerRef} style={{ minWidth: '280px', height: '700px' }} />
        </div>
      </div>
    </section>
  )
}
