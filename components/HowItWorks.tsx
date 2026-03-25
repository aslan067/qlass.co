'use client'
import { useTranslations } from 'next-intl'
import { Search, Lightbulb, Rocket } from 'lucide-react'

const stepIcons = [Search, Lightbulb, Rocket]
const stepColors = ['brand', 'emerald', 'violet']
const stepGlows = [
  'shadow-brand-600/20',
  'shadow-emerald-600/20',
  'shadow-violet-600/20',
]
const stepBgs = [
  'bg-brand-600',
  'bg-emerald-600',
  'bg-violet-600',
]

export default function HowItWorks() {
  const t = useTranslations('howItWorks')
  const steps = [0, 1, 2].map(i => ({
    num: t(`steps.${i}.num`),
    title: t(`steps.${i}.title`),
    desc: t(`steps.${i}.desc`),
  }))

  return (
    <section id="how" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white/50 to-slate-50" />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-100/40 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-600 text-sm font-medium mb-6">
            {t('badge')}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 leading-tight max-w-2xl mx-auto">
            {t('title')}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-px">
            <div className="w-full h-full bg-gradient-to-r from-brand-400/50 via-emerald-400/50 to-violet-400/50 relative">
              <div className="absolute inset-0 shimmer" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={i} className="relative group">
                  {/* Step number bg blob */}
                  <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full ${stepBgs[i]}/5 blur-2xl transition-all group-hover:scale-150 pointer-events-none`} />

                  <div className="glass-card rounded-2xl p-8 relative z-10 group-hover:border-brand-300">
                    {/* Number + Icon row */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${stepBgs[i]} flex items-center justify-center shadow-lg ${stepGlows[i]} transition-all group-hover:scale-105`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <span className="font-display font-bold text-5xl text-slate-100">{step.num}</span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
