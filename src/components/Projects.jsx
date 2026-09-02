import { useMemo, useState } from 'react'
import { projects } from '../data/projects.js'

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group card flex flex-col p-6 hover:border-brand-400/40 hover:bg-slate-100/60 dark:hover:bg-white/[0.05] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="chip !border-brand-400/20 !bg-brand-400/10 !text-brand-600 dark:!text-brand-300">
          {project.category}
        </span>
        <span className="text-slate-500 group-hover:text-brand-600 dark:group-hover:text-brand-300">
          <ArrowIcon />
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>

      <p className="mt-4 text-xs font-medium text-slate-500">
        <span className="text-slate-600 dark:text-slate-400">Mon rôle :</span> {project.role}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  const categories = useMemo(
    () => ['Tous', ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  )
  const [filter, setFilter] = useState('Tous')

  const filtered = filter === 'Tous' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" /> Réalisations
          </span>
          <h2 className="section-title mt-4">Projets récents</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Une sélection de projets livrés en télétravail : applications métier, e-commerce et sites
            dynamiques.
          </p>
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                filter === c
                  ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900'
                  : 'border border-slate-200 text-slate-600 hover:text-ink-900 dark:border-white/10 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
