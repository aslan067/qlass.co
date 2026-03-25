'use client'
import { useTranslations } from 'next-intl'
import { DollarSign, TrendingUp, ShoppingCart, Truck, Headphones, Settings2 } from 'lucide-react'

const icons = [DollarSign, TrendingUp, ShoppingCart, Truck, Headphones, Settings2]
const iconClasses = ['icon-finance', 'icon-sales', 'icon-procurement', 'icon-supply', 'icon-service', 'icon-assets']
const gradients = [
  'from-brand-600/20 to-brand-600/5',
  'from-emerald-600/20 to-emerald-600/5',
  'from-amber-600/20 to-amber-600/5',
  'from-blue-600/20 to-blue-600/5',
  'from-pink-600/20 to-pink-600/5',
  'from-violet-600/20 to-violet-600/5',
]
const borderColors = [
  'hover:border-brand-500/40',
  'hover:border-emerald-500/40',
  'hover:border-amber-500/40',
  'hover:border-blue-500/40',
  'hover:border-pink-500/40',
  'hover:border-violet-500/40',
]

export default function Features() {
  const t = useTranslations('features')
  const keys = ['finance', 'sales', 'procurement', 'supplyChain', 'service', 'assets'] as const

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-brand-600/5 blur-[80px]" />
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-brand-400/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-600/10 text-brand-300 text-sm font-medium mb-6">
            {t('badge')}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
            {t('title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {keys.map((key, i) => {
            const Icon = icons[i]
            return (
              <div key={key}
                className={`glass-card ${borderColors[i]} rounded-2xl p-7 group cursor-default`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}>
                  <Icon size={22} className={iconClasses[i]} />
                </div>
                {/* Text */}
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`items.${key}.desc`)}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-px bg-gradient-to-r from-white/5 to-transparent" />
                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-600 group-hover:text-slate-500 transition-colors">
                  <span className="w-1 h-1 rounded-full bg-current" />
                  <span className="w-8 h-1 rounded-full bg-current" />
                  <span className="w-4 h-1 rounded-full bg-current" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
