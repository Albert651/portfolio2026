import { useEffect } from 'react'
import { profile } from '../data/profile.js'

export default function CvModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overscroll-contain bg-black/60 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex h-[100dvh] w-full flex-col overflow-hidden border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-ink-800 sm:h-[85dvh] sm:max-w-3xl sm:rounded-2xl sm:border"
      >
        <div className="flex flex-shrink-0 items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-white/10">
          <h3 className="font-semibold text-ink-900 dark:text-white">
            CV — {profile.name}
          </h3>
          <div className="flex items-center gap-2">
            <a href={profile.cv} download className="btn-primary !px-4 !py-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
              </svg>
              Télécharger
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer"
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-ink-900 dark:hover:bg-white/5 dark:hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
        <iframe
          src={profile.cv}
          title="Aperçu du CV"
          scrolling="yes"
          style={{ WebkitOverflowScrolling: 'touch' }}
          className="min-h-0 flex-1 touch-pan-y overscroll-contain bg-slate-100 dark:bg-ink-900"
        />
      </div>
    </div>
  )
}
