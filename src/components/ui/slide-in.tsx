'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SlideInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'left' | 'right'
  className?: string
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'left',
  className = '',
}: SlideInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: direction === 'left' ? -100 : 100,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
            }
          : {
              opacity: 0,
              x: direction === 'left' ? -100 : 100,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

