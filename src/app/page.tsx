'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Globe, ExternalLink, BookOpen, Users, Award, Star, Clock } from 'lucide-react'

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-16 w-48 h-48 bg-purple-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-green-200 rounded-full opacity-25 blur-lg"></div>
        <div className="absolute bottom-20 right-32 w-36 h-36 bg-yellow-200 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation Header */}
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex items-center md:block"> 
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-10 lg:w-20 lg:h-12  flex items-center justify-center">
                <img src="/img/logo.png" className='' alt="" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-gray-800">The Open Book</h1>
                <p className="text-xs lg:text-sm text-gray-500">Excellence in Education</p>
              </div>
            </div>
            
            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+91 6235 687 911</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Kozhikode, Kerala</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left Column - Main Content */}
              <div className="text-center lg:text-left space-y-6 lg:space-y-8">
                {/* Status Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 shadow-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Coming Soon</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Something
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Extraordinary
                    </span>
                    <span className="block text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-700">
                      is Coming
                    </span>
                  </h2>
                  
                  <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    We're crafting an exceptional digital learning experience that will transform education. 
                    Get ready for innovative courses, expert training, and personalized learning paths.
                  </p>
                </div>

                {/* Features Preview */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <Users className="w-6 h-6 text-blue-600 mb-2 mx-auto lg:mx-0" />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Spoken English</h4>
                    <p className="text-xs text-gray-600">Expert-led courses</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <Award className="w-6 h-6 text-purple-600 mb-2 mx-auto lg:mx-0" />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">IELTS Coaching</h4>
                    <p className="text-xs text-gray-600">Certified training</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <Star className="w-6 h-6 text-green-600 mb-2 mx-auto lg:mx-0" />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Soft Skills</h4>
                    <p className="text-xs text-gray-600">Professional development</p>
                  </div>
                  
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <Clock className="w-6 h-6 text-orange-600 mb-2 mx-auto lg:mx-0" />
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Phonics Training</h4>
                    <p className="text-xs text-gray-600">Foundation building</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                  <a 
                    href="mailto:theopenbookbyhira@gmail.com"
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get in Touch</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <a 
                    href="tel:+918893467437"
                    className="group bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-300 hover:border-blue-400 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-green-600" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column - Visual Content */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Circle */}
                  <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="text-6xl lg:text-8xl mb-4 animate-bounce">🚀</div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-2">13+ Years</h3>
                      <p className="text-sm lg:text-base opacity-90">of Excellence</p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <span className="text-white text-xl font-bold">500+</span>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-gray-800 text-sm font-bold text-center leading-tight">Expert<br />Trainers</span>
                  </div>
                  
                  <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center shadow-md animate-bounce" style={{animationDelay: '0.5s'}}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-4 sm:px-6 lg:px-8 py-6 lg:py-8 bg-white/50 backdrop-blur-sm border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
                <span className="text-sm text-gray-600">Building something amazing...</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-4 lg:hidden">
                  <div className="flex items-center space-x-1">
                    <Phone className="w-3 h-3" />
                    <span>+91 6235 687 911</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>Kozhikode, Kerala</span>
                  </div>
                </div>
                <p>© 2025 The Open Book. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}