import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Courses - IELTS, Spoken English & Business English in Kozhikode',
  description: 'Explore our comprehensive English courses: Spoken English, IELTS Preparation, Business English, Phonics Training, and more. Live online and recorded options available in Kozhikode, Kerala.',
  keywords: [
    'English courses Kozhikode',
    'IELTS preparation course',
    'Spoken English classes',
    'Business English training',
    'Phonics course Kerala',
    'English for professionals',
    'Online English courses',
    'Grammar course Kozhikode',
    'Personality development English'
  ],
  openGraph: {
    title: 'English Courses - The Open Book Kozhikode',
    description: 'Expert-led English courses: IELTS, Spoken English, Business English, and more. Live online and recorded options.',
    url: 'https://theopenbookhira.com/courses',
    type: 'website',
  },
  alternates: {
    canonical: 'https://theopenbookhira.com/courses',
  },
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

