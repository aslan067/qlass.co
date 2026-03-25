'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations('footer')

  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">Q</span>
              </div>
              <span className="font-display font-bold text-xl text-white">qlass</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              {t('desc')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target="_blank"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-brand-500/40 transition-all hover:bg-brand-600/10">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">{t('product')}</h4>
            <ul className="flex flex-col gap-3">
              {(['features', 'integrations', 'pricing', 'changelog'] as const).map(k => (
                <li key={k}>
                  <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {t(`links.${k}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">{t('company')}</h4>
            <ul className="flex flex-col gap-3">
              {(['about', 'careers', 'blog', 'contact'] as const).map(k => (
                <li key={k}>
                  <a href={k === 'contact' ? '#contact' : '#'} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                    {t(`links.${k}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">{t('copyright')}</p>

          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {[
              { code: 'tr', flag: '🇹🇷' },
              { code: 'en', flag: '🇬🇧' },
              { code: 'de', flag: '🇩🇪' },
            ].map(l => (
              <Link key={l.code} href={`/${l.code}`}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  l.code === locale
                    ? 'bg-brand-600/20 text-brand-400 font-medium'
                    : 'text-slate-600 hover:text-slate-400 hover:bg-white/5'
                }`}>
                {l.flag} {l.code.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
