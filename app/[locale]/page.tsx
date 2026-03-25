import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Integrations from '@/components/Integrations'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="relative">
      <Navbar locale={locale} />
      <Hero />
      <Features />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <Contact />
      <Footer locale={locale} />
    </main>
  )
}
