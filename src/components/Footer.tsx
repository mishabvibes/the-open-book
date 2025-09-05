'use client'

import { BookOpen, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowUp, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "hover:bg-blue-600" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com", color: "hover:bg-red-600" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com", color: "hover:bg-sky-500" }
  ]

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Courses", url: "/courses" },
    { name: "Contact", url: "/contact" }
  ]

  const courses = [
    { name: "Spoken English", url: "https://tagmango.com/creator/course/spoken-english" },
    { name: "Phonics Training", url: "https://tagmango.com/creator/course/phonics" },
    { name: "IELTS Coaching", url: "https://tagmango.com/creator/course/ielts" },
    { name: "Personality Development", url: "https://tagmango.com/creator/course/personality" }
  ]

  const contactInfo = [
    { icon: MapPin, text: "Kozhikode, Kerala, India", color: "text-emerald-400" },
    { icon: Phone, text: "+91 98765 43210", color: "text-blue-400" },
    { icon: Mail, text: "info@theopenbook.in", color: "text-purple-400" }
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative container mx-auto px-4 py-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-4 mb-6 group">
              <div className="relative">
                <BookOpen className="h-12 w-12 text-blue-400 transition-all duration-500 group-hover:rotate-12" />
                <div className="absolute -inset-2 bg-blue-600/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div>
                <h2 className="text-4xl font-light tracking-wide">The Open Book</h2>
                <p className="text-sm text-gray-400 mt-1">Transforming Lives Through Education</p>
              </div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white relative">
                About Us
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-400"></div>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empowering students in Kozhikode, Kerala with world-class English communication and personality development training.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`group relative w-12 h-12 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} hover:shadow-lg`}
                    onMouseEnter={() => setHoveredSocial(index as any)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    
                    {/* Tooltip */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg transition-all duration-300 ${
                      hoveredSocial === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-400"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-emerald-400 group-hover:w-2 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white relative">
                Our Courses
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-purple-400"></div>
              </h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index}>
                    <a 
                      href={course.url} 
                      className="group flex items-center justify-between text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{course.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-white relative">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-yellow-400"></div>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group flex items-center space-x-3">
                    <div className={`p-2 bg-white/5 rounded-lg ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-light mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-6">Get the latest updates about our courses and events</p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2025 The Open Book. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          } md:bottom-8 md:right-8 bottom-24 right-4`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
          {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div> */}
        </button>
      </footer>
    </>
  )
}