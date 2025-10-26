'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const whatsappNumber = '+918893467437' // Without spaces for URL
  const displayNumber = '+91 88934 67437' // With spaces for display

  useEffect(() => {
    // Show button after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Show tooltip automatically after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
      // Hide tooltip after 5 seconds
      setTimeout(() => {
        setShowTooltip(false)
      }, 5000)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about your English courses.')
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div
        className={`fixed bottom-28 right-6 z-40 transition-all duration-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-full right-0 mb-4 transition-all duration-300 ${
            showTooltip ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-green-200 p-4 min-w-[280px] max-w-[320px]">
            {/* Close button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-slate-700 hover:bg-slate-900 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Content */}
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Need Help?</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-2">
                  Chat with us on WhatsApp for instant support!
                </p>
                <p className="text-xs font-semibold text-green-600">{displayNumber}</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-green-200 transform rotate-45"></div>
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setTimeout(() => setShowTooltip(false), 2000)}
          className="group relative w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 rounded-full shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></span>
          <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></span>

          {/* Icon */}
          <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />

          {/* Online Indicator */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
        </button>

        {/* Mobile Label */}
        <div className="md:hidden absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </div>
      </div>

      {/* Backdrop for tooltip (mobile) */}
      {showTooltip && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setShowTooltip(false)}
        ></div>
      )}
    </>
  )
}

