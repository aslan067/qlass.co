import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'

const locales = ['tr', 'en', 'de']

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
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-dark-900 text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
