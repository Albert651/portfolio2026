import { useLang } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang()

  return (
    <div
      className="inline-flex items-center rounded-lg border border-slate-200 p-0.5 text-xs font-bold dark:border-white/10"
      role="group"
      aria-label={t('lang.switch')}
    >
      {['fr', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-md px-2 py-1 uppercase transition ${
            lang === code
              ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900'
              : 'text-slate-500 hover:text-ink-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  )
}
