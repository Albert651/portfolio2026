import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-400" /> Stack technique
          </span>
          <h2 className="section-title mt-4">Compétences techniques</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            De la base de données à l’interface, en passant par les API et l’automatisation.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="reveal card p-6 hover:border-slate-300 hover:bg-slate-100/60 dark:hover:border-white/10 dark:hover:bg-white/[0.05]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
