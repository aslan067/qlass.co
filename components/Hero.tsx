'use client'
import { useTranslations } from 'next-intl'
import { ArrowRight, Play, TrendingUp, Users, Globe2 } from 'lucide-react'
import { useEffect } from 'react'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-24 pb-16">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-400/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-900/20 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-600/10 text-brand-300 text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          {t('badge')}
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 tracking-tight">
          <span className="text-white">{t('title')}</span>
          <br />
          <span className="gradient-text">{t('titleAccent')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t('subtitle')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#contact"
            className="group flex items-center gap-2.5 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-2xl transition-all hover:shadow-2xl hover:shadow-brand-600/40 hover:-translate-y-1 text-base">
            {t('cta')}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#features"
            className="group flex items-center gap-2.5 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-2xl transition-all text-base font-medium hover:bg-white/5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Play size={12} className="ml-0.5" />
            </div>
            {t('ctaSecondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-16">
          {[
            { icon: Users, value: '10K+', label: t('stat1'), color: 'text-brand-400' },
            { icon: Globe2, value: '25+', label: t('stat2'), color: 'text-emerald-400' },
            { icon: TrendingUp, value: '20+', label: t('stat3'), color: 'text-amber-400' },
          ].map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 text-center">
              <s.icon size={20} className={`${s.color} mx-auto mb-2`} />
              <div className={`font-display font-bold text-2xl md:text-3xl ${s.color}`}>{s.value}</div>
              <div className="text-slate-500 text-xs md:text-sm mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow behind mockup */}
          <div className="absolute inset-0 bg-brand-600/10 blur-3xl rounded-3xl scale-110" />
          
          <div className="relative glass-card rounded-3xl overflow-hidden border border-brand-500/20 shadow-2xl shadow-brand-900/50">
            {/* Browser bar */}
            <div className="bg-dark-700 px-4 py-3 flex items-center gap-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-dark-600 rounded-md px-3 py-1 text-slate-500 text-xs font-mono flex items-center gap-2">
                  <span className="text-brand-400">🔒</span> app.qlass.co/dashboard
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="bg-dark-800 p-6">
              {/* Top stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { label: t('dashboard.revenue'), value: '₺2.4M', change: '+12%', color: 'text-emerald-400' },
                  { label: t('dashboard.activeOrders'), value: '847', change: '+5%', color: 'text-brand-400' },
                  { label: t('dashboard.suppliers'), value: '124', change: '+2%', color: 'text-amber-400' },
                  { label: t('dashboard.inventoryValue'), value: '₺890K', change: '-3%', color: 'text-rose-400' },
                ].map((item, i) => (
                  <div key={i} className="bg-dark-700 rounded-xl p-4">
                    <div className="text-slate-500 text-xs mb-2">{item.label}</div>
                    <div className={`font-display font-bold text-lg ${item.color}`}>{item.value}</div>
                    <div className="text-slate-600 text-xs mt-1">{item.change} {t('dashboard.thisMonth')}</div>
                  </div>
                ))}
              </div>

              {/* Chart placeholder + sidebar */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-dark-700 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm font-medium">{t('dashboard.revenueChart')}</span>
                    <span className="text-brand-400 text-xs">{t('dashboard.last12Months')}</span>
                  </div>
                  {/* Fake chart bars */}
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 65, 45, 75, 55, 85, 70, 90, 60, 95, 80, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? 'linear-gradient(to top, #6366f1, #818cf8)'
                            : 'rgba(99,102,241,0.25)'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-dark-700 rounded-xl p-4">
                  <div className="text-white text-sm font-medium mb-3">{t('dashboard.modules')}</div>
                  {[
                    { name: t('dashboard.finance'), pct: 92, color: '#818cf8' },
                    { name: t('dashboard.sales'), pct: 78, color: '#34d399' },
                    { name: t('dashboard.procurement'), pct: 65, color: '#f59e0b' },
                  ].map((m, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>{m.name}</span><span>{m.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${m.pct}%`, background: m.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
