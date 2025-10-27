'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      // Get the Google Apps Script Web App URL from environment variables
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ''
      
      if (!scriptURL) {
        throw new Error('Contact form is not configured. Please contact us directly at theopenbookbyhira@gmail.com or call +91 88934 67437')
      }

      // Submit to Google Apps Script
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      })

      // Show success message
      setIsSubmitted(true)
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      })

      // Auto-hide success message after 8 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 8000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : 'There was an error submitting your form. Please try again or contact us directly.'
      setError(errorMessage)
      
      // Auto-hide error after 10 seconds
      setTimeout(() => {
        setError(null)
      }, 10000)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 rounded-2xl p-8 text-center border-2 border-emerald-200 animate-fade-in">
        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You! 🎉</h3>
        <p className="text-slate-600 mb-4">
          We've received your message and will get back to you within 24 hours.
        </p>
        <p className="text-sm text-slate-500 mb-6">
          You should also receive a confirmation email shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-2xl p-4 animate-fade-in">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-red-800 font-semibold mb-1">Submission Error</h4>
              <p className="text-red-700 text-sm">{error}</p>
              <div className="mt-3 text-sm">
                <p className="text-red-600">You can also reach us directly:</p>
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <a href="tel:+918893467437" className="text-red-700 hover:text-red-900 font-medium">
                    📞 +91 88934 67437
                  </a>
                  <a href="mailto:theopenbookbyhira@gmail.com" className="text-red-700 hover:text-red-900 font-medium">
                    📧 theopenbookbyhira@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-600 ml-2"
              aria-label="Dismiss error"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
          placeholder="+91 98765 43210"
        />
      </div>

      <div>
        <label htmlFor="course" className="block text-sm font-semibold text-slate-900 mb-2">
          Interested In *
        </label>
        <select
          id="course"
          name="course"
          required
          value={formData.course}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
        >
          <option value="">Select a course</option>
          <option value="spoken-english">Spoken English</option>
          <option value="phonics">Phonics Training</option>
          <option value="ielts">IELTS Preparation</option>
          <option value="business-english">Business English</option>
          <option value="interview-prep">Interview Preparation</option>
          <option value="kids-english">English for Kids</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none"
          placeholder="Tell us about your goals and how we can help you..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>

      {/* Help Text */}
      <p className="text-center text-sm text-slate-500 mt-4">
        Your information is secure and will only be used to contact you about our courses.
      </p>
    </form>
    </div>
  )
}


