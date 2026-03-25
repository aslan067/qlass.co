import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['tr', 'en', 'de'],
  defaultLocale: 'tr',
  localePrefix: 'always'
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
