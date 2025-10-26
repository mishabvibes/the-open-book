'use client'

import { useState, ReactNode } from 'react'

interface CoursesFilterProps {
  children: (props: {
    activeTab: string
    searchTerm: string
    selectedMode: string
    setActiveTab: (tab: string) => void
    setSearchTerm: (term: string) => void
    setSelectedMode: (mode: string) => void
  }) => ReactNode
}

export function CoursesFilter({ children }: CoursesFilterProps) {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMode, setSelectedMode] = useState('live')

  return (
    <>
      {children({
        activeTab,
        searchTerm,
        selectedMode,
        setActiveTab,
        setSearchTerm,
        setSelectedMode,
      })}
    </>
  )
}

