'use client'
import { useTranslations } from 'next-intl'
import { MapPin, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const t = useTranslations('contact')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Failed')
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/60 to-slate-50" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-100/40 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-600 text-sm font-medium mb-6">
              {t('badge')}
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-5 leading-tight">
              {t('title')}
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12">
              {t('subtitle')}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, label: t('address'), color: 'text-brand-600', bg: 'bg-brand-50' },
                { icon: Mail, label: t('emailLabel'), color: 'text-emerald-600', bg: 'bg-emerald-50' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <span className="text-slate-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-emerald-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">{t('successTitle')}</h3>
                <p className="text-slate-500 text-sm">{t('successMessage')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-500 text-xs font-medium block mb-1.5">{t('name')}</label>
                    <input required type="text" name="name"
                      value={formData.name} onChange={handleChange}
                      className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                      placeholder={t('namePlaceholder')} />
                  </div>
                  <div>
                    <label className="text-slate-500 text-xs font-medium block mb-1.5">{t('company')}</label>
                    <input type="text" name="company"
                      value={formData.company} onChange={handleChange}
                      className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                      placeholder={t('companyPlaceholder')} />
                  </div>
                </div>
                <div>
                  <label className="text-slate-500 text-xs font-medium block mb-1.5">{t('email')}</label>
                  <input required type="email" name="email"
                    value={formData.email} onChange={handleChange}
                    className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                    placeholder={t('emailPlaceholder')} />
                </div>
                <div>
                  <label className="text-slate-500 text-xs font-medium block mb-1.5">{t('message')}</label>
                  <textarea rows={4} name="message"
                    value={formData.message} onChange={handleChange}
                    className="input-glass w-full px-4 py-3 rounded-xl text-sm resize-none"
                    placeholder={t('messagePlaceholder')} />
                </div>
                {error && (
                  <p className="text-red-500 text-sm text-center">{t('errorMessage')}</p>
                )}
                <button type="submit" disabled={sending}
                  className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-70 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/20 hover:-translate-y-0.5 mt-2">
                  {sending ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      {t('submit')}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
