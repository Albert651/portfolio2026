import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import LanguageToggle from './LanguageToggle.jsx'

const links = [
  { href: '#about', key: 'nav.about' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#rendez-vous', key: 'nav.rendezvous' },
  { href: '#contact', key: 'nav.contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-ink-900/80'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-ink-900 dark:text-white">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-8 w-8 rounded-lg object-cover ring-1 ring-inset ring-black/10 dark:ring-white/10"
          />
          <span className="hidden sm:block">Zafimandimby Albert</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-ink-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a href="#contact" className="hidden btn-primary !px-4 !py-2 sm:inline-flex">
            {t('nav.contactCta')}
          </a>
          <button
            type="button"
            aria-label={t('nav.openMenu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-ink-900 dark:border-white/10 dark:text-white md:hidden"
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-md dark:border-white/5 dark:bg-ink-900/95 md:hidden">
          <ul className="container-page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-ink-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 btn-primary w-full"
              >
                {t('nav.contactCta')}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
