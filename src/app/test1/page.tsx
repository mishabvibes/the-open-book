'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Star, Users, Award, BookOpen, MessageCircle, Play, CheckCircle, ArrowRight, Phone, Mail, MapPin, Target, Clock, Globe } from 'lucide-react'

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [stats, setStats] = useState({ students: 0, courses: 0, experience: 0 })

  // Animated stats counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ students: 500, courses: 4, experience: 13 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Exit intent popup
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])

  const courses = [
    {
      title: "Spoken English & Soft Skills",
      description: "Master fluent English communication and essential soft skills for personal and professional growth.",
      duration: "3-6 months",
      level: "Beginner to Advanced",
      icon: MessageCircle,
      tagmangoUrl: "https://tagmango.com/creator/course/spoken-english"
    },
    {
      title: "Phonics Training",
      description: "Build strong reading foundation with systematic phonics instruction for kids and adults.",
      duration: "2-4 months",
      level: "Foundation",
      icon: BookOpen,
      tagmangoUrl: "https://tagmango.com/creator/course/phonics"
    },
    {
      title: "IELTS Coaching",
      description: "Comprehensive IELTS preparation with expert guidance for international opportunities.",
      duration: "2-3 months",
      level: "Intermediate to Advanced",
      icon: Globe,
      tagmangoUrl: "https://tagmango.com/creator/course/ielts"
    },
    {
      title: "Personality Development",
      description: "Transform your confidence, communication, and leadership skills for success.",
      duration: "1-2 months",
      level: "All Levels",
      icon: Target,
      tagmangoUrl: "https://tagmango.com/creator/course/personality"
    }
  ]

  const testimonials = [
    {
      name: "Priya Nair",
      role: "Software Engineer",
      content: "The Open Book transformed my communication skills completely. From being hesitant to speak English to confidently presenting in meetings!",
      rating: 5,
      avatar: "PN"
    },
    {
      name: "Arjun Kumar",
      role: "Student",
      content: "IELTS coaching here helped me achieve 8.5 band score. The personalized attention and practice sessions were exceptional.",
      rating: 5,
      avatar: "AK"
    },
    {
      name: "Sneha Thomas",
      role: "Parent",
      content: "My daughter's phonics training at The Open Book laid such a strong foundation. She's now reading confidently at age 6!",
      rating: 5,
      avatar: "ST"
    }
  ]

  const learningPath = [
    { stage: "Foundation", description: "Basic communication & phonics", icon: BookOpen },
    { stage: "Intermediate", description: "Fluency & confidence building", icon: MessageCircle },
    { stage: "Advanced", description: "Professional skills & IELTS prep", icon: Globe },
    { stage: "Expert", description: "Leadership & personality mastery", icon: Award }
  ]

  const memberships = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      features: ["Access to basic resources", "Community support", "Monthly webinars", "Basic study materials"],
      popular: false,
      tagmangoUrl: "https://tagmango.com/creator/membership/free"
    },
    {
      name: "Professional",
      price: "₹999",
      period: "/month",
      features: ["All Free features", "Live interactive classes", "Personal feedback", "Priority support", "Downloadable resources"],
      popular: true,
      tagmangoUrl: "https://tagmango.com/creator/membership/pro"
    },
    {
      name: "Premium",
      price: "₹1,999",
      period: "/month",
      features: ["All Pro features", "1-on-1 mentoring sessions", "IELTS mock tests", "Career guidance", "Certificate courses"],
      popular: false,
      tagmangoUrl: "https://tagmango.com/creator/membership/premium"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section id="home" className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                13+ Years of Excellence in Education
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-slate-900">Unlock Your</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Voice
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                  Master English communication, boost confidence, and unlock global opportunities with expert-led courses in Kozhikode, Kerala.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-slate-200">
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats.students}+</div>
                  <div className="text-sm text-slate-600 font-medium">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats.experience}+</div>
                  <div className="text-sm text-slate-600 font-medium">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stats.courses}</div>
                  <div className="text-sm text-slate-600 font-medium">Courses</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://tagmango.com/creator/membership/free" className="group inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#courses" className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200">
                  View Courses
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:pl-8">
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-slate-200/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-slate-500">Live Session</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-semibold">
                        M
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Mishahira</div>
                        <div className="text-sm text-slate-500">English Instructor</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-2xl p-4 space-y-3">
                      <div className="text-sm text-slate-600">"Let's practice pronunciation together..."</div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-slate-500">12 students online</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-violet-400 rounded-3xl opacity-20 rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-violet-400 to-pink-400 rounded-3xl opacity-10 -rotate-12 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Courses</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Comprehensive programs designed to transform your communication skills and boost your confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => {
              const IconComponent = course.icon
              return (
                <div key={index} className="group bg-white rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                      <IconComponent className="h-7 w-7 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{course.title}</h3>
                    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{course.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Duration</span>
                        <span className="font-medium text-slate-900">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Level</span>
                        <span className="font-medium text-slate-900">{course.level}</span>
                      </div>
                    </div>
                    
                    <a href={course.tagmangoUrl} className="block w-full bg-slate-900 text-white py-3 px-6 rounded-2xl text-center font-semibold hover:bg-slate-800 transition-all duration-200 group-hover:scale-105 transform">
                      Enroll Now
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Your Learning Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Follow our structured path from foundation to expert level mastery.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
              {learningPath.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className="relative flex-1 max-w-sm">
                    <div className="bg-white rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 p-8 text-center group hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                        <IconComponent className="h-8 w-8 text-slate-600 group-hover:text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{step.stage}</h3>
                      <p className="text-slate-600 font-light">{step.description}</p>
                    </div>
                    {index < learningPath.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What Our Students Say</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Real stories from students who transformed their communication skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 font-light leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-semibold text-slate-700">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Choose Your Plan</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Flexible membership options to suit your learning needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {memberships.map((plan, index) => (
              <div key={index} className={`bg-white rounded-3xl border p-8 relative transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 ${
                plan.popular 
                  ? 'border-slate-900 ring-4 ring-slate-900 ring-opacity-5 scale-105' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && <span className="text-slate-600 font-light">{plan.period}</span>}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={plan.tagmangoUrl} className={`block w-full py-4 px-6 rounded-2xl text-center font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
            Join thousands of students who have already unlocked their potential with The Open Book.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 group">
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center border border-slate-600 text-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative border border-slate-200">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-2xl font-light"
            >
              ×
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Don't Miss Out!</h3>
              <p className="text-slate-600 mb-8 font-light">
                Start your English learning journey with our FREE membership. No commitment required!
              </p>
              <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200 group w-full">
                Get Free Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}