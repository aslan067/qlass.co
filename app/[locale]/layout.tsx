import type { Metadata } from 'next'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Syne, DM_Sans } from 'next/font/google'
import '../globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const locales = ['tr', 'en', 'de', 'fr', 'nl']

const metadataByLocale: Record<string, { title: string; description: string }> = {
  tr: {
    title: 'Qlass ERP – İşletmenizi Yönetmenin Qlass Yolu',
    description:
      'KOBİler için modern ERP yazılımı. Finans, satış, tedarik zinciri ve daha fazlası tek platformda.'
  },
  en: {
    title: 'Qlass ERP – The Smarter Way to Manage Your Business',
    description:
      'Modern ERP software for SMEs. Manage finance, sales, procurement, and supply chain in one platform.'
  },
  de: {
    title: 'Qlass ERP – Der Smarte Weg, Ihr Unternehmen zu Steuern',
    description:
      'Moderne ERP-Software für KMU. Finanzen, Vertrieb, Beschaffung und Lieferkette auf einer Plattform.'
  },
  fr: {
    title: 'Qlass ERP – La Façon Intelligente de Gérer Votre Entreprise',
    description:
      'Logiciel ERP moderne pour les PME. Gérez la finance, les ventes, les achats et la chaîne d\'approvisionnement sur une seule plateforme.'
  },
  nl: {
    title: 'Qlass ERP – De Slimme Manier om Uw Bedrijf te Beheren',
    description:
      'Moderne ERP-software voor het MKB. Beheer financiën, verkoop, inkoop en toeleveringsketen op één platform.'
  }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qlass.co'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  if (!locales.includes(locale)) notFound()

  const localized = metadataByLocale[locale]
  const canonical = `/${locale}`

  return {
    metadataBase: new URL(siteUrl),
    title: localized.title,
    description: localized.description,
    alternates: {
      canonical,
      languages: {
        tr: '/tr',
        en: '/en',
        de: '/de',
        fr: '/fr',
        nl: '/nl',
        'x-default': '/tr'
      }
    },
    openGraph: {
      title: localized.title,
      description: localized.description,
      url: canonical,
      siteName: 'Qlass ERP',
      locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: localized.title,
      description: localized.description
    }
  }
}


export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale)) notFound()
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2HEX0K7RVE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2HEX0K7RVE');
          `}
        </Script>
      </head>
      <body className="font-body bg-slate-50 text-slate-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
