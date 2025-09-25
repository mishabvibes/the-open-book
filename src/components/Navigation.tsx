'use client'

import { BookOpen, Home, User, BookOpenCheck, MessageCircle, Plus, Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function UniversalNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Determine active section based on current pathname
  const getActiveSection = () => {
    if (pathname === '/') return 'home'
    if (pathname === '/about') return 'about'
    if (pathname === '/courses') return 'courses'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }
  
  const [activeSection, setActiveSection] = useState(getActiveSection())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update active section when pathname changes
  useEffect(() => {
    setActiveSection(getActiveSection())
  }, [pathname])

  const navItems = [
    { icon: Home, label: 'Home', href: '/', id: 'home' },
    { icon: User, label: 'About', href: '/about', id: 'about' },
    { icon: BookOpenCheck, label: 'Courses', href: '/courses', id: 'courses' },
    { icon: MessageCircle, label: 'Contact', href: '/contact', id: 'contact' },
  ]

  // Clean universal theme - works on any background
  const getThemeClasses = () => {
    return {
      // Always white background with proper shadows for visibility
      bg: isScrolled 
        ? 'bg-white/98 backdrop-blur-xl border-white/60 shadow-lg shadow-gray-900/10' 
        : 'bg-white/90 backdrop-blur-sm border-white/40 shadow-md shadow-gray-900/5',
      text: 'text-gray-700',
      textActive: 'text-gray-900',
      textMuted: 'text-gray-500',
      hover: 'hover:bg-gray-50',
      active: 'bg-blue-50 text-blue-700 border-blue-100',
      tooltip: 'bg-gray-900 text-white border-gray-800',
      ctaButton: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      separator: 'bg-gray-200'
    }
  }

  const theme = getThemeClasses()

  return (
    <>
      {/* Desktop Floating Vertical Navigation */}
      <nav className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
        <div className="relative">
          {/* Main Navigation Container */}
          <div className={`${theme.bg} border rounded-2xl p-2 shadow-xl transition-all duration-300`}>
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative group">
                  <a
                    href={item.href}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                      activeSection === item.id 
                        ? `${theme.active} shadow-sm` 
                        : `${theme.text} ${theme.hover}`
                    }`}
                    aria-label={item.label}
                  >
                    <item.icon className={`h-5 w-5 transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                    }`} />
                    
                    {/* Enhanced Tooltip */}
                    <div className={`absolute right-full mr-3 px-3 py-2 ${theme.tooltip} text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border shadow-lg`}>
                      {item.label}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                    </div>
                  </a>
                </div>
              ))}
              
              {/* Elegant Separator */}
              {/* <div className={`my-2 mx-3 h-px ${theme.separator} opacity-30`}></div> */}
              
              {/* Enhanced CTA Button */}
              <div className="relative group">
                {/* <a
                  href="https://tagmango.com/creator/membership/free"
                  className={`relative flex items-center justify-center w-12 h-12 ${theme.ctaButton} text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group`}
                  aria-label="Join Free"
                >
                  <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                  
                  
                  <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-700 shadow-lg">
                    Join Free
                    <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                  </div>
                </a> */}
              </div>
            </div>
          </div>

          {/* Floating Logo */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="group relative">
              <div className={`w-14 h-14 p-1 ${theme.bg} border  rounded-2xl flex items-center justify-center shadow-lg ${theme.hover} transition-all duration-300`}>
                <div className="w-ful flex items-center justify-center">
                  <img src="/img/logo.webp" className="w-full h-full object-contain rounded-xl" alt="The Open Book" />
                </div>
              </div>
              
              {/* Logo Tooltip */}
              <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 ${theme.tooltip} text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border shadow-lg`}>
                The Open Book
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Tablet Navigation - Horizontal Floating */}
      <nav className="hidden md:block lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className={`${theme.bg} border rounded-2xl p-2 shadow-xl transition-all duration-300`}>
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <a
                  href={item.href}
                  className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? `${theme.active} shadow-sm` 
                      : `${theme.text} ${theme.hover}`
                  }`}
                  aria-label={item.label}
                >
                  <item.icon className={`h-4 w-4 transition-all duration-300 ${
                    activeSection === item.id ? 'scale-110' : 'group-hover:scale-110'
                  }`} />
                  
                  {/* Tooltip */}
                  <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 ${theme.tooltip} text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border shadow-lg`}>
                    {item.label}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </a>
              </div>
            ))}
            
            {/* Elegant Separator */}
            <div className={`mx-2 w-px h-6 ${theme.separator} opacity-30`}></div>
            
            {/* CTA Button */}
            <div className="relative group">
              <a
                href="https://tagmango.com/creator/membership/free"
                className={`relative flex items-center justify-center w-11 h-11 ${theme.ctaButton} text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group`}
                aria-label="Join Free"
              >
                <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-gray-700 shadow-lg">
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl border-b border-gray-200/60 shadow-lg' 
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-200/40'
        }`}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/img/logo.webp" className="w-full h-full object-contain rounded-md" alt="The Open Book" />
              </div>
              <span className="text-lg font-semibold text-gray-900 transition-colors duration-300">
                The Open Book
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl ${theme.hover} transition-all duration-300`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? 
                <X className="h-6 w-6 text-gray-700 transition-transform duration-300 rotate-90" /> : 
                <Menu className="h-6 w-6 text-gray-700 transition-all duration-300" />
              }
            </button>
          </div>
        </header>

        {/* Enhanced Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'bg-black/20 backdrop-blur-sm opacity-100' 
            : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsMobileMenuOpen(false)}>
          <div className={`absolute top-20 left-4 right-4 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/60 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4'
          }`} onClick={e => e.stopPropagation()}>
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'bg-blue-50 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold text-base">{item.label}</span>
                    <div className="text-gray-500 text-sm">Navigate to {item.label.toLowerCase()}</div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 ml-auto -rotate-90" />
                </a>
              ))}
              
              {/* <div className="pt-4 border-t border-gray-100">
                <a
                  href="https://tagmango.com/creator/membership/free"
                  className={`flex items-center justify-center space-x-2 w-full p-4 ${theme.ctaButton} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
                  <span>Join Free Today</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Floating Navigation */}
        <nav className="fixed bottom-4 left-4 right-4 z-50">
          <div className="bg-white/98 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-xl p-2">
            <div className="flex items-center justify-around">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 active:scale-95 ${
                    activeSection === item.id 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="relative">
                    <item.icon className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 ${
                      activeSection === item.id 
                        ? 'text-blue-600' 
                        : 'text-gray-500 group-hover:text-blue-600'
                    }`} />
                    <div className="absolute -inset-1 bg-blue-600/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className={`text-xs transition-colors duration-300 mt-1 font-medium ${
                    activeSection === item.id 
                      ? 'text-blue-600' 
                      : 'text-gray-500 group-hover:text-blue-600'
                  }`}>
                    {item.label}
                  </span>
                </a>
              ))}

              {/* Enhanced Floating Action Button */}
              {/* <a
                href="https://tagmango.com/creator/membership/free"
                className={`group relative p-3 ${theme.ctaButton} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95`}
                aria-label="Join Free"
              >
                <Plus className="h-5 w-5 text-white group-hover:rotate-90 transition-transform duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </a> */}
            </div>
          </div>
        </nav>
      </div>

      {/* Spacer for mobile content */}
      <div className="md:hidden h-16"></div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}