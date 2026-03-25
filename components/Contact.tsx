'use client'
import { useTranslations } from 'next-intl'
import { MapPin, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const t = useTranslations('contact')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/60 to-dark-900" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-600/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-600/10 text-brand-300 text-sm font-medium mb-6">
              {t('badge')}
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
              {t('title')}
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              {t('subtitle')}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                { icon: MapPin, label: t('address'), color: 'text-brand-400', bg: 'bg-brand-600/10' },
                { icon: Mail, label: t('emailLabel'), color: 'text-emerald-400', bg: 'bg-emerald-600/10' },
                { icon: Phone, label: t('phoneLabel'), color: 'text-amber-400', bg: 'bg-amber-600/10' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                    <item.icon size={18} className={item.color} />
                  </div>
                  <span className="text-slate-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="glass-card rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-600/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Mesajınız İletildi!</h3>
                <p className="text-slate-400 text-sm">En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-1.5">{t('name')}</label>
                    <input required type="text"
                      className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="Ahmet Yılmaz" />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-medium block mb-1.5">{t('company')}</label>
                    <input type="text"
                      className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                      placeholder="Şirket A.Ş." />
                  </div>
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">{t('email')}</label>
                  <input required type="email"
                    className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                    placeholder="ahmet@sirket.com" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">{t('phone')}</label>
                  <input type="tel"
                    className="input-glass w-full px-4 py-3 rounded-xl text-sm"
                    placeholder="+90 555 000 00 00" />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium block mb-1.5">{t('message')}</label>
                  <textarea rows={4}
                    className="input-glass w-full px-4 py-3 rounded-xl text-sm resize-none"
                    placeholder="Projenizi anlatın..." />
                </div>
                <button type="submit" disabled={sending}
                  className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 disabled:opacity-70 text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5 mt-2">
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
