import { getTranslations } from 'next-intl/server'
import { ArrowRight } from 'lucide-react'

const integrations = [
  { name: 'SAP', letter: 'S', color: '#0070F3', bg: 'rgba(0,112,243,0.08)' },
  { name: 'Microsoft', letter: 'M', color: '#00A4EF', bg: 'rgba(0,164,239,0.08)' },
  { name: 'Oracle', letter: 'O', color: '#F80000', bg: 'rgba(248,0,0,0.08)' },
  { name: 'Salesforce', letter: 'SF', color: '#00A1E0', bg: 'rgba(0,161,224,0.08)' },
  { name: 'Slack', letter: 'Sl', color: '#4A154B', bg: 'rgba(74,21,75,0.08)' },
  { name: 'Shopify', letter: 'Sh', color: '#96BF48', bg: 'rgba(150,191,72,0.08)' },
  { name: 'Stripe', letter: 'St', color: '#6772E5', bg: 'rgba(103,114,229,0.08)' },
  { name: 'HubSpot', letter: 'H', color: '#FF7A59', bg: 'rgba(255,122,89,0.08)' },
  { name: 'Jira', letter: 'J', color: '#0052CC', bg: 'rgba(0,82,204,0.08)' },
  { name: 'Zoom', letter: 'Z', color: '#2D8CFF', bg: 'rgba(45,140,255,0.08)' },
  { name: 'AWS', letter: 'A', color: '#FF9900', bg: 'rgba(255,153,0,0.08)' },
  { name: 'Google', letter: 'G', color: '#4285F4', bg: 'rgba(66,133,244,0.08)' },
]

export default async function Integrations() {
  const t = await getTranslations('integrations')

  return (
    <section id="integrations" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-brand-100/40 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 text-brand-600 text-sm font-medium mb-6">
            {t('badge')}
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-5 leading-tight">
            {t('title')}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-12">
          {integrations.map((intg, i) => (
            <div key={i}
              className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 group cursor-default aspect-square">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-2xl transition-transform group-hover:scale-110"
                style={{ background: intg.bg, color: intg.color }}>
                {intg.letter}
              </div>
              <span className="text-slate-500 text-xs font-medium group-hover:text-slate-700 transition-colors text-center leading-tight">{intg.name}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-500 text-sm font-medium transition-colors group">
            {t('cta')}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Marquee strip */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <div className="flex gap-4 animate-[marquee_25s_linear_infinite]">
            {[...integrations, ...integrations].map((intg, i) => (
              <div key={i} className="flex items-center gap-2.5 whitespace-nowrap px-4 py-2.5 glass-card rounded-full text-sm text-slate-600 shrink-0">
                <span className="w-6 h-6 rounded-lg flex items-center justify-center font-display font-bold text-xs shrink-0"
                  style={{ background: intg.bg, color: intg.color }}>
                  {intg.letter}
                </span>
                <span className="font-medium">{intg.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
