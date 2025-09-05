'use client'

import { BookOpen, Home, User, BookOpenCheck, MessageCircle, Plus, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { icon: Home, label: 'Home', href: '/', id: 'home' },
    { icon: User, label: 'About', href: '/about', id: 'about' },
    { icon: BookOpenCheck, label: 'Courses', href: '/courses', id: 'courses' },
    { icon: MessageCircle, label: 'Contact', href: '/contact', id: 'contact' },
  ]

  return (
    <>
      {/* Desktop Floating Vertical Navigation */}
      <nav className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">
          {/* Main Navigation Container */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-xl shadow-black/10">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative group">
                  <a
                    href={item.href}
                    className={`relative flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 hover:bg-white/20 ${
                      activeSection === item.id 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:text-blue-600' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                    onMouseEnter={() => setActiveSection(item.id)}
                  >
                    <item.icon className={`h-5 w-5 transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    
                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                      {item.label}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                    </div>
                  </a>
                </div>
              ))}
              
              {/* Separator */}
              <div className="my-2 h-px bg-white/20"></div>
              
              {/* CTA Button */}
              <div className="relative group">
                <a
                  href="https://tagmango.com/creator/membership/free"
                  className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
                >
                  <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                  
                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                    Join Free
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Floating Logo */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2">
            <div className="group relative">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/img/logo.png" className="w-full h-full object-contain" alt="The Open Book" />
                </div>
              </div>
              
              {/* Logo Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                The Open Book
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Tablet Navigation - Horizontal Floating */}
      <nav className="hidden md:block lg:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-xl shadow-black/10">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <a
                  href={item.href}
                  className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:bg-white/20 ${
                    activeSection === item.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onMouseEnter={() => setActiveSection(item.id)}
                >
                  <item.icon className={`h-5 w-5 transition-all duration-300 text-black ${
                    activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                    {item.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </a>
              </div>
            ))}
            
            {/* Separator */}
            <div className="mx-2 w-px h-8 bg-white/20"></div>
            
            {/* CTA Button */}
            <div className="relative group">
              <a
                href="https://tagmango.com/creator/membership/free"
                className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
              >
                <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
                  Join Free
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/img/logo.png" className="w-full h-full object-contain" alt="" />
              </div>
              <span className="text-xl font-light text-gray-900">The Open Book</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </a>
              ))}
              <a
                href="https://tagmango.com/creator/membership/free"
                className="flex items-center justify-center space-x-2 w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Plus className="h-5 w-5" />
                <span>Join Free</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Floating Navigation */}
        <nav className="fixed bottom-4 left-4 right-4 z-50">
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-xl p-2">
            <div className="flex items-center justify-around">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 active:scale-95"
                >
                  <div className="relative">
                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors duration-300 mt-1 font-medium">
                    {item.label}
                  </span>
                </a>
              ))}

              {/* Floating Action Button */}
              <a
                href="https://tagmango.com/creator/membership/free"
                className="group relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <Plus className="h-5 w-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer for mobile content */}
      <div className="md:hidden h-20"></div>
    </>
  )
}