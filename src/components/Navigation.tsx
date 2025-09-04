'use client'

import { BookOpen, Home, User, BookOpenCheck, MessageCircle, Plus, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      {/* Desktop Navigation - Top */}
      <nav className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <BookOpen className="h-10 w-10 text-blue-600 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute -inset-1 bg-blue-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-light text-gray-900 tracking-wide">The Open Book</span>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="group relative px-6 py-3 text-gray-600 hover:text-blue-600 transition-all duration-300"
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                </a>
              ))}
              
              {/* CTA Button */}
              <a
                href="https://tagmango.com/creator/membership/free"
                className="ml-4 group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <span className="relative z-10 font-medium flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Join Free</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
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
          <div className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl transition-all duration-300 ${
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

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="flex items-center justify-around px-2 py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="group flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 hover:bg-blue-50 active:scale-95"
              >
                <div className="relative">
                  <item.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110" />
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
              className="group relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <Plus className="h-6 w-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </nav>
      </div>

      {/* Spacer for mobile content */}
      <div className="md:h-20 h-16 md:hidden"></div>
      {/* <div className="h-20 pb-safe md:hidden"></div> */}
    </>
  )
}