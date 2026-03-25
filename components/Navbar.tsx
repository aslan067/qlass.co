'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

const localeNames: Record<string, string> = { tr: 'TR', en: 'EN', de: 'DE' }
const localeFull: Record<string, string> = { tr: 'Türkçe', en: 'English', de: 'Deutsch' }
const localeFlags: Record<string, string> = { tr: '🇹🇷', en: '🇬🇧', de: '🇩🇪' }

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: t('features') },
    { href: '#how', label: t('howItWorks') },
    { href: '#integrations', label: t('integrations') },
    { href: '#testimonials', label: t('testimonials') },
    { href: '#contact', label: t('contact') },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center glow-brand">
            <span className="font-display font-bold text-white text-sm">Q</span>
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            qlass
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5">
              <Globe size={14} />
              <span className="font-medium">{localeNames[locale]}</span>
              <ChevronDown size={12} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 glass-card rounded-xl py-1 w-40 shadow-xl shadow-black/50">
                {['tr', 'en', 'de'].map(l => (
                  <Link key={l} href={`/${l}`} onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-white/5 transition-colors ${
                      l === locale ? 'text-brand-400 font-medium' : 'text-slate-400'
                    }`}>
                    <span>{localeFlags[l]}</span>
                    <span>{localeFull[l]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="https://app.qlass.co" target="_blank"
            className="text-sm text-slate-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all font-medium">
            {t('login')}
          </a>
          <a href="#contact"
            className="text-sm font-semibold bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-brand-600/30 hover:-translate-y-0.5">
            {t('demo')}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-slate-400" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-xl border-t border-white/5 px-4 py-6 flex flex-col gap-4">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white py-2 font-medium">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            {['tr', 'en', 'de'].map(l => (
              <Link key={l} href={`/${l}`} onClick={() => setOpen(false)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm ${
                  l === locale ? 'bg-brand-600/20 text-brand-400' : 'text-slate-400 hover:text-white'
                }`}>
                {localeFlags[l]} {localeNames[l]}
              </Link>
            ))}
          </div>
          <a href="#contact" onClick={() => setOpen(false)}
            className="bg-brand-600 text-white text-center py-3 rounded-xl font-semibold mt-2">
            {t('demo')}
          </a>
        </div>
      )}
    </header>
  )
}
