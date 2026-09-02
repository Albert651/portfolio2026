import { profile } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" /> Profil professionnel
          </span>
          <h2 className="section-title mt-4">
            Un développeur full-stack habitué au travail à distance
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-400">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="chip">📍 {profile.location}</span>
            <span className="chip">💻 {profile.workMode}</span>
            <span className="chip">🌍 Collaboration France / Madagascar</span>
          </div>
        </div>

        <div className="reveal space-y-6">
          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Formation
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((e) => (
                <li key={e.degree}>
                  <p className="font-semibold text-ink-900 dark:text-white">{e.degree}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{e.school}</p>
                  <p className="text-xs text-slate-500">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Langues
            </h3>
            <ul className="mt-4 space-y-2">
              {profile.languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between text-sm">
                  <span className="text-ink-900 dark:text-white">{l.name}</span>
                  <span className="text-slate-600 dark:text-slate-400">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
