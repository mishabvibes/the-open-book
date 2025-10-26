import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free English Placement Test - Check Your CEFR Level (A1-C1)',
  description: 'Take our free 12-question English placement test and discover your CEFR level (A1-C1). Get personalized course recommendations and instant results. AI-powered assessment.',
  keywords: [
    'English placement test',
    'CEFR level test online',
    'English proficiency test free',
    'Check English level',
    'English assessment test',
    'A1 to C1 English test',
    'Free English evaluation',
    'Online English test Kerala'
  ],
  openGraph: {
    title: 'Free English Placement Test - The Open Book',
    description: 'Take our free AI-powered placement test and discover your English proficiency level. Get instant results and personalized course recommendations.',
    url: 'https://theopenbookhira.com/placement-test',
    type: 'website',
  },
  alternates: {
    canonical: 'https://theopenbookhira.com/placement-test',
  },
}

export default function PlacementTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

