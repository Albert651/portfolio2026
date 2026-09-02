import { useState } from 'react'
import { profile } from '../data/profile.js'
import CvModal from './CvModal.jsx'

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" />
      <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mx-auto mb-8 h-28 w-28 sm:h-32 sm:w-32">
            <div className="relative h-full w-full">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-400 to-cyan-400 opacity-60 blur-md" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-xl dark:border-ink-900"
              />
            </div>
          </div>

          <span className="reveal inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability} · {profile.workMode}
          </span>

          <h1 className="reveal mt-6 text-4xl font-black leading-tight tracking-tight text-ink-900 dark:text-white sm:text-6xl">
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-brand-300 via-brand-400 to-cyan-400 bg-clip-text text-transparent">
              {profile.role}
            </span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="btn-primary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-ghost">
              Me contacter
            </a>
            <button type="button" onClick={() => setCvOpen(true)} className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Voir mon CV
            </button>
          </div>

          <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />

          <dl className="reveal mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {profile.stats.map((s) => (
              <div key={s.label} className="card px-5 py-4 text-center">
                <dt className="text-2xl font-extrabold text-ink-900 dark:text-white">{s.value}</dt>
                <dd className="mt-1 text-xs text-slate-600 dark:text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
