'use client'

import { LucideIcon, Clock, Target } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { ScaleIn } from '@/components/ui/scale-in'
import { StaggerContainer, StaggerItem } from '@/components/ui/stagger-container'

interface Course {
  title: string
  description: string
  icon: LucideIcon
  duration: string
  level: string
  price: string
}

interface CoursesSectionProps {
  courses: Course[]
  title: string
  subtitle: string
  badgeText: string
  badgeIcon: LucideIcon
}

export function CoursesSection({ courses, title, subtitle, badgeText, badgeIcon: BadgeIcon }: CoursesSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 overflow-hidden">
      {/* Refined Background */}
      <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-indigo-500/6 to-violet-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <ScaleIn delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 py-3 rounded-full text-sm font-semibold border border-blue-100 shadow-sm mb-6">
                <BadgeIcon className="h-4 w-4" />
                {badgeText}
              </div>
            </ScaleIn>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              {title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <StaggerItem key={index}>
                <div className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        {course.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Duration
                          </span>
                          <span className="font-semibold text-slate-900">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Level
                          </span>
                          <span className="font-semibold text-slate-900">{course.level}</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                        Access Course
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}


