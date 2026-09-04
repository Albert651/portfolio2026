import { profile } from '../data/profile.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function About() {
  const { t, tr } = useLang()

  return (
    <section id="about" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" /> {t('about.eyebrow')}
          </span>
          <h2 className="section-title mt-4">{t('about.title')}</h2>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            {profile.about.map((p, i) => (
              <p key={i}>{tr(p)}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="chip">📍 {tr(profile.location)}</span>
            <span className="chip">💻 {tr(profile.workMode)}</span>
            <span className="chip">{t('about.collab')}</span>
          </div>
        </div>

        <div className="reveal space-y-6" style={{ '--reveal-delay': '120ms' }}>
          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t('about.education')}
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((e, i) => (
                <li key={i}>
                  <p className="font-semibold text-ink-900 dark:text-white">{tr(e.degree)}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{tr(e.school)}</p>
                  <p className="text-xs text-slate-500">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t('about.languages')}
            </h3>
            <ul className="mt-4 space-y-2">
              {profile.languages.map((l, i) => (
                <li key={i} className="flex items-center justify-between text-sm">
                  <span className="text-ink-900 dark:text-white">{tr(l.name)}</span>
                  <span className="text-slate-600 dark:text-slate-400">{tr(l.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
