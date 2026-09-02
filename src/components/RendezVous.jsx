import { useEffect, useRef } from 'react'
import { profile } from '../data/profile.js'

const THEME_COLORS = {
  dark: { background: '0f172a', text: 'e2e8f0', primary: '818cf8' },
  light: { background: 'ffffff', text: '0f172a', primary: '4f46e5' },
}

export default function RendezVous({ theme }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!profile.calendly) return
    if (window.Calendly) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  if (!profile.calendly) return null

  const { background, text, primary } = THEME_COLORS[theme] ?? THEME_COLORS.dark
  const widgetUrl = `${profile.calendly}?hide_gdpr_banner=1&background_color=${background}&text_color=${text}&primary_color=${primary}`

  return (
    <section id="rendez-vous" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-brand-400" /> Rendez-vous
          </span>
          <h2 className="section-title mt-4">Réservez un appel directement</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Choisissez un créneau qui vous arrange pour discuter de votre projet, sans échange
            d'emails inutile.
          </p>
        </div>

        <div className="reveal card mt-10 overflow-hidden p-2 sm:p-4">
          <div
            ref={containerRef}
            className="calendly-inline-widget"
            data-url={widgetUrl}
            style={{ minWidth: '280px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  )
}
