import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { OrganizationSchema, LocalBusinessSchema, WebsiteSchema } from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://theopenbookhira.com'),
  title: {
    default: 'The Open Book - English Communication Training in Kozhikode, Kerala',
    template: '%s | The Open Book'
  },
  description: 'Transform your English communication skills with expert-led courses in Kozhikode, Kerala. Spoken English, Phonics, IELTS preparation, Business English, and Personality Development by certified trainers.',
  keywords: [
    'English speaking course Kozhikode',
    'IELTS coaching Kerala',
    'Spoken English classes Kozhikode',
    'English communication training',
    'Business English course',
    'Phonics training Kerala',
    'English language institute Kozhikode',
    'Personality development course',
    'English proficiency test',
    'Best English academy Kerala'
  ],
  authors: [{ name: 'The Open Book', url: 'https://theopenbookhira.com' }],
  creator: 'The Open Book',
  publisher: 'The Open Book',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'The Open Book - English Communication Training in Kozhikode',
    description: 'Transform your communication skills with expert-led English courses. IELTS, Spoken English, Business English & more in Kozhikode, Kerala.',
    url: 'https://theopenbookhira.com',
    siteName: 'The Open Book',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'The Open Book - English Communication Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Open Book - English Communication Training',
    description: 'Transform your English skills with expert-led courses in Kozhikode, Kerala.',
    images: ['/img/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3TCTDs67Xk5GvS00UflZSd8UZRGXJyRc8JlpNdBqh7s',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://theopenbookhira.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
