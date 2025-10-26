'use client'

import { ReactNode } from 'react'
import { FadeIn } from '@/components/ui/fade-in'
import { ScaleIn } from '@/components/ui/scale-in'
import { StaggerContainer, StaggerItem } from '@/components/ui/stagger-container'
import { SlideIn } from '@/components/ui/slide-in'

// Simple wrapper to enable animations in server components
export { FadeIn, ScaleIn, StaggerContainer, StaggerItem, SlideIn }

interface AnimatedWrapperProps {
  children: ReactNode
  type?: 'fade' | 'scale' | 'slide' | 'stagger' | 'stagger-item'
  [key: string]: any
}

export function AnimatedWrapper({ children, type = 'fade', ...props }: AnimatedWrapperProps) {
  switch (type) {
    case 'scale':
      return <ScaleIn {...props}>{children}</ScaleIn>
    case 'slide':
      return <SlideIn {...props}>{children}</SlideIn>
    case 'stagger':
      return <StaggerContainer {...props}>{children}</StaggerContainer>
    case 'stagger-item':
      return <StaggerItem {...props}>{children}</StaggerItem>
    default:
      return <FadeIn {...props}>{children}</FadeIn>
  }
}


