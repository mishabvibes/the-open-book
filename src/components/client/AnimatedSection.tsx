'use client'

import { ReactNode } from 'react'
import { FadeIn } from '@/components/ui/fade-in'
import { ScaleIn } from '@/components/ui/scale-in'
import { StaggerContainer, StaggerItem } from '@/components/ui/stagger-container'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export function AnimatedFadeIn({ children, className }: AnimatedSectionProps & { delay?: number; direction?: 'up' | 'down' | 'left' | 'right' | 'none' }) {
  return <FadeIn className={className} {...arguments[0]}>{children}</FadeIn>
}

export function AnimatedScaleIn({ children, className }: AnimatedSectionProps & { delay?: number }) {
  return <ScaleIn className={className} {...arguments[0]}>{children}</ScaleIn>
}

export function AnimatedStaggerContainer({ children, className }: AnimatedSectionProps & { staggerDelay?: number }) {
  return <StaggerContainer className={className} {...arguments[0]}>{children}</StaggerContainer>
}

export function AnimatedStaggerItem({ children, className }: AnimatedSectionProps) {
  return <StaggerItem className={className}>{children}</StaggerItem>
}


