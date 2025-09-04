'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white">
      <div className="min-h-screen flex flex-col">
        {/* Navigation Header */}
        <nav className="w-full px-6 lg:px-8 py-6 border-b border-gray-100">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/img/logo.png" className="w-full h-full object-contain" alt="Logo" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">The Open Book</h1>
                <p className="text-sm text-gray-500">Excellence in Education</p>
              </div>
            </div>
            
            {/* Desktop Contact Info */}
            <div className="hidden lg:flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 6235 687 911</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kozhikode, Kerala</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-4xl mx-auto w-full text-center">
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-12">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Coming Soon</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6 mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Something
                <span className="block font-medium text-blue-600 mt-2">
                  Extraordinary
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-gray-700 mt-4">
                  is Coming
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                We're crafting an exceptional digital learning experience that will transform education. 
                Get ready for innovative courses, expert training, and personalized learning paths.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">Spoken English</h4>
                <p className="text-sm text-gray-600">Expert-led courses</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">IELTS Coaching</h4>
                <p className="text-sm text-gray-600">Certified training</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">Soft Skills</h4>
                <p className="text-sm text-gray-600">Professional development</p>
              </div>
              
              <div className="text-center p-6 border border-gray-100 rounded-lg hover:border-gray-200 transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">Phonics Training</h4>
                <p className="text-sm text-gray-600">Foundation building</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center space-x-12 mb-16 text-center">
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">13+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <div className="text-3xl font-light text-gray-900 mb-1">Expert</div>
                <div className="text-sm text-gray-600">Trainers</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a 
                href="mailto:theopenbookbyhira@gmail.com"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              
              <a 
                href="tel:+918893467437"
                className="group bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 lg:px-8 py-8 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Building something amazing...</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-6 lg:hidden">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>+91 6235 687 911</span>
                  </div>
                  <div className="flex items-center space-x-2">
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
    </div>
  )
}