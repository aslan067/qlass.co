'use client'
import { useTranslations } from 'next-intl'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const t = useTranslations('testimonials')
  const items = [0, 1, 2].map(i => ({
    name: t(`items.${i}.name`),
    role: t(`items.${i}.role`),
    text: t(`items.${i}.text`),
  }))

  const avatarColors = [
    'from-brand-600 to-brand-400',
    'from-emerald-600 to-emerald-400',
    'from-violet-600 to-violet-400',
  ]

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-brand-100/40 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-600 text-sm font-medium mb-6">
            {t('badge')}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight">
            {t('title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 relative group">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-brand-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center font-display font-bold text-white text-sm shrink-0`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-sm">{item.name}</div>
                  <div className="text-slate-400 text-xs">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'ISO 27001', label: 'Sertifikalı' },
            { value: 'GDPR', label: 'Uyumlu' },
            { value: '24/7', label: 'Destek' },
          ].map((b, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-bold text-xl text-brand-600">{b.value}</div>
              <div className="text-slate-400 text-xs mt-0.5">{b.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
