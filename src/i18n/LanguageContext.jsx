import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './ui.js'

const LanguageContext = createContext(null)
const LANGS = ['fr', 'en']
const DEFAULT_LANG = 'fr'

function detectInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (LANGS.includes(saved)) return saved
  } catch {
    /* localStorage indisponible */
  }
  const nav = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase()
  return nav.startsWith('en') ? 'en' : DEFAULT_LANG
}

/**
 * Renvoie la variante linguistique d'un champ.
 * - `{ fr, en }`  -> la valeur pour `lang`
 * - une chaine    -> renvoyee telle quelle (champ non traduit)
 * - un tableau    -> chaque element passe dans pick()
 */
export function pick(field, lang) {
  if (Array.isArray(field)) return field.map((item) => pick(item, lang))
  if (field && typeof field === 'object' && ('fr' in field || 'en' in field)) {
    return field[lang] ?? field[DEFAULT_LANG] ?? field.en
  }
  return field
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang)

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState(LANGS.includes(next) ? next : DEFAULT_LANG)
  }, [])

  const toggle = useCallback(() => {
    setLangState((l) => (l === 'fr' ? 'en' : 'fr'))
  }, [])

  const t = useCallback(
    (key) => ui[key]?.[lang] ?? ui[key]?.[DEFAULT_LANG] ?? key,
    [lang],
  )

  const tr = useCallback((field) => pick(field, lang), [lang])

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, tr }),
    [lang, setLang, toggle, t, tr],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang doit être utilisé dans <LanguageProvider>')
  return ctx
}
