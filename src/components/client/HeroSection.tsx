'use client'

import { useState, useEffect } from 'react'
import { Award, ArrowRight, MessageSquare, BookOpen, CheckCircle, Star, GraduationCap } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { ScaleIn } from '@/components/ui/scale-in'
import { StaggerContainer, StaggerItem } from '@/components/ui/stagger-container'
import { SlideIn } from '@/components/ui/slide-in'

interface HeroSectionProps {
  initialStats: {
    students: number
    courses: number
    experience: number
  }
}

export function HeroSection({ initialStats }: HeroSectionProps) {
  const [stats, setStats] = useState(initialStats)

  // Animated stats counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(initialStats)
    }, 1000)
    return () => clearTimeout(timer)
  }, [initialStats])

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-violet-50"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-100/40 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Enhanced Badge */}
            <FadeIn delay={0.1} direction="down">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 py-3 rounded-full text-sm font-semibold border border-blue-100 shadow-sm">
                <Award className="w-4 h-4 mr-2" />
                13+ Years of Excellence in Education
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-slate-900">Unlock Your</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Confidence in English
                  </span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                  Master English communication, boost confidence, and unlock global opportunities with expert-led courses in Kozhikode, Kerala.
                </p>
              </FadeIn>
            </div>

            {/* Enhanced Stats */}
            <StaggerContainer className="grid grid-cols-3 gap-8 py-8 border-t border-slate-200" staggerDelay={0.15}>
              <StaggerItem>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stats.students}+</div>
                  <div className="text-sm text-slate-600 font-medium">Happy Students</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stats.experience}+</div>
                  <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stats.courses}+</div>
                  <div className="text-sm text-slate-600 font-medium">Expert Courses</div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Enhanced CTA Buttons */}
            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://tagmango.com/creator/membership/free" className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#courses" className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
                  View Courses
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Enhanced Hero Visual */}
          <SlideIn direction="right" delay={0.3}>
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8 border border-white/50 relative z-10">
                  <div className="space-y-8">
                    {/* Header with Progress Ring */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">English Mastery</h3>
                        <p className="text-slate-600 text-sm mt-1">Your Learning Journey</p>
                      </div>
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                          />
                          <path
                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                            fill="none"
                            stroke="url(#progress-gradient)"
                            strokeWidth="2"
                            strokeDasharray="85, 100"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#6366f1" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-slate-900">85%</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Skills Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-sm">
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Speaking</div>
                            <div className="text-xs text-slate-600">Advanced</div>
                          </div>
                        </div>
                        <div className="w-full bg-blue-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-4 border border-violet-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Grammar</div>
                            <div className="text-xs text-slate-600">Expert</div>
                          </div>
                        </div>
                        <div className="w-full bg-violet-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Writing</div>
                            <div className="text-xs text-slate-600">Intermediate</div>
                          </div>
                        </div>
                        <div className="w-full bg-emerald-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Listening</div>
                            <div className="text-xs text-slate-600">Advanced</div>
                          </div>
                        </div>
                        <div className="w-full bg-orange-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-indigo-700/20"></div>
                      <div className="relative flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">Next Milestone</div>
                          <div className="text-xs opacity-90">Complete 5 more lessons</div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Star className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Card */}
                <div className="absolute -top-4 -right-4 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-emerald-500/20 p-4 border border-white/60 z-20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Lesson Complete!</div>
                      <div className="text-xs text-slate-600">+50 XP earned</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2 text-center border border-emerald-100">
                    <div className="text-xs text-slate-600">Pronunciation Practice</div>
                    <div className="text-lg font-bold text-slate-900">Perfect Score!</div>
                  </div>
                </div>

                {/* Refined Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl rotate-12 blur-sm animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-violet-400/15 to-purple-400/15 rounded-3xl -rotate-12 blur-sm animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500/25 to-indigo-500/25 rounded-xl rotate-45 blur-sm animate-pulse delay-500"></div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

