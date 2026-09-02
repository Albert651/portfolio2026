import { experiences } from '../data/experiences.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Experience() {
  const { t, tr } = useLang()

  return (
    <section id="experience" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" /> {t('experience.eyebrow')}
          </span>
          <h2 className="section-title mt-4">{t('experience.title')}</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">{t('experience.intro')}</p>
        </div>

        <ol className="mt-12 space-y-6">
          {experiences.map((exp, idx) => (
            <li
              key={idx}
              className="reveal card p-6 hover:border-slate-300 hover:bg-slate-100/60 dark:hover:border-white/10 dark:hover:bg-white/[0.05] sm:p-8"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white">{tr(exp.title)}</h3>
                  <p className="mt-0.5 text-sm text-brand-600 dark:text-brand-300">
                    {tr(exp.company)} · {tr(exp.location)}
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-wrap items-center gap-2 sm:justify-end">
                  {exp.remote && (
                    <span className="chip !border-emerald-400/30 !bg-emerald-400/10 !text-emerald-600 dark:!text-emerald-300">
                      {t('experience.remote')}
                    </span>
                  )}
                  <span className="chip">{tr(exp.type)}</span>
                </div>
              </div>

              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                {tr(exp.period)}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                    <span>{tr(h)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
