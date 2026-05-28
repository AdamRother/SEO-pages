import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://clientintelligence.ai'),
  title: {
    default: 'Client Intelligence — The AI Operating System for Service Providers',
    template: '%s | Client Intelligence',
  },
  description:
    'The AI operating system for service providers. One Brain. Every client. Complete isolation. Your methodology applied with precision.',
  openGraph: {
    siteName: 'Client Intelligence',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Client Intelligence',
  url: 'https://clientintelligence.ai',
  contactPoint: { '@type': 'ContactPoint', email: 'hello@clientintelligence.ai' },
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Client Intelligence',
  url: 'https://clientintelligence.ai',
  applicationCategory: 'BusinessApplication',
  description:
    'The AI operating system for service providers. One Brain. Every client. Complete isolation. Your methodology applied with precision.',
  offers: [
    { '@type': 'Offer', name: 'Full Access', price: '1000', priceCurrency: 'USD', billingIncrement: 'month' },
  ],
  operatingSystem: 'Web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
