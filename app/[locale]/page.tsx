import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const Features = dynamic(() => import('@/components/Features'))
const HowItWorks = dynamic(() => import('@/components/HowItWorks'))
const Integrations = dynamic(() => import('@/components/Integrations'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

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
