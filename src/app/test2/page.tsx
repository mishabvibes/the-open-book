'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone } from 'lucide-react'

export default function ComingSoonPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-100 flex items-center md:block">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <img src="/img/logo.png" className="w-full h-full object-contain" alt="Logo" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">The Open Book</h1>
              <p className="text-xs text-gray-500">Excellence in Education</p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center space-x-6 text-sm text-gray-600">
            <span>+91 6235 687 911</span>
            <span>Kozhikode, Kerala</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-700">Coming Soon</span>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900">
              Something <span className="text-blue-600">Extraordinary</span> is Coming
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We're building an exceptional digital learning platform for English training and professional development.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="font-medium text-gray-900">Spoken English</div>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="font-medium text-gray-900">IELTS Coaching</div>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="font-medium text-gray-900">Soft Skills</div>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg">
              <div className="font-medium text-gray-900">Phonics Training</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 text-center py-4">
            <div>
              <div className="text-2xl font-light text-gray-900">13+</div>
              <div className="text-xs text-gray-600">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div>
              <div className="text-2xl font-light text-gray-900">500+</div>
              <div className="text-xs text-gray-600">Students</div>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <a 
              href="mailto:theopenbookbyhira@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
            
            <a 
              href="tel:+918893467437"
              className="border border-gray-300 hover:border-gray-400 text-gray-900 px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></div>
            <span>Building something amazing...</span>
          </div>
          <div className="flex items-center space-x-3 sm:hidden text-xs">
            <span>+91 6235 687 911</span>
            <span>Kozhikode, Kerala</span>
          </div>
          <span className="text-xs sm:text-sm">© 2025 The Open Book</span>
        </div>
      </footer>
    </div>
  )
}