import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Open Book - English Communication Training',
  description: 'Transform your communication skills with expert-led courses in Kozhikode, Kerala. Spoken English, Phonics, IELTS, and Personality Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navigation /> */}
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
