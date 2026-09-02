import { useState } from 'react'
import { profile } from '../data/profile.js'
import { useLang } from '../i18n/LanguageContext.jsx'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const services = [
  {
    fr: 'Développement web (site vitrine / application)',
    en: 'Web development (showcase site / application)',
  },
  { fr: 'CMS — WordPress / Shopify', en: 'CMS — WordPress / Shopify' },
  {
    fr: 'Automatisation (Make, Zapier, n8n)',
    en: 'Automation (Make, Zapier, n8n)',
  },
  { fr: 'SEO & Analytics', en: 'SEO & Analytics' },
  { fr: 'Autre', en: 'Other' },
]

export default function Contact() {
  const { t, tr, lang } = useLang()
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const serviceLabel =
      form.service !== '' ? services[Number(form.service)]?.[lang] ?? '' : ''

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${t('contact.subjectPrefix')}${form.name || t('contact.noName')} — ${serviceLabel}`,
          from_name: form.name,
          email: form.email,
          [t('contact.service')]: serviceLabel,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-200 py-20 dark:border-white/5 sm:py-24">
      <div className="container-page">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div className="reveal">
              <span className="eyebrow">
                <span className="h-px w-8 bg-brand-400" /> {t('contact.eyebrow')}
              </span>
              <h2 className="section-title mt-4">{t('contact.title')}</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{t('contact.intro')}</p>

              <ul className="mt-8 space-y-3 text-sm">
                <li>
                  <span className="text-slate-500">{t('contact.emailLabel')}</span>
                  <a href={`mailto:${profile.email}`} className="text-ink-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-300">
                    {profile.email}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">{t('contact.phoneLabel')}</span>
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, '')}`}
                    className="text-ink-900 hover:text-brand-600 dark:text-white dark:hover:text-brand-300"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">{t('contact.locationLabel')}</span>
                  <span className="text-ink-900 dark:text-white">{tr(profile.location)} · {tr(profile.workMode)}</span>
                </li>
              </ul>
            </div>

            <form onSubmit={onSubmit} className="reveal space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('contact.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-slate-400 focus:border-brand-400 dark:border-white/10 dark:bg-ink-800 dark:text-white dark:placeholder:text-slate-600"
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('contact.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-slate-400 focus:border-brand-400 dark:border-white/10 dark:bg-ink-800 dark:text-white dark:placeholder:text-slate-600"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('contact.service')}
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={onChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 dark:border-white/10 dark:bg-ink-800 dark:text-white"
                >
                  <option value="" disabled>
                    {t('contact.servicePlaceholder')}
                  </option>
                  {services.map((s, i) => (
                    <option key={i} value={i}>
                      {tr(s)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={form.message}
                  onChange={onChange}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-slate-400 focus:border-brand-400 dark:border-white/10 dark:bg-ink-800 dark:text-white dark:placeholder:text-slate-600"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                {status === 'sending' ? t('contact.sending') : t('contact.send')}
              </button>

              {status === 'success' && (
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300">
                  {t('contact.success')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">
                  {t('contact.error')}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
