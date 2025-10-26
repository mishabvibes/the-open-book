'use client'

import { useState } from 'react'
import { BookOpen, Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Users, Calendar, ArrowRight, Globe, Facebook, Instagram, Youtube, Twitter, Star } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { ScaleIn } from '@/components/ui/scale-in'
import { StaggerContainer, StaggerItem } from '@/components/ui/stagger-container'
import { SlideIn } from '@/components/ui/slide-in'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+91 88934 67437", "Available 24/7"],
      description: "Call us anytime for immediate assistance",
      action: "Call Now",
      link: "tel:+918893467437"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["theopenbookbyhira@gmail.com", "Response within 24h"],
      description: "Send us a detailed message",
      action: "Send Email",
      link: "mailto:theopenbookbyhira@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Our Center",
      details: ["Kozhikode, Kerala", "India"],
      description: "Meet us in person for a consultation",
      action: "Get Directions",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat: 9AM-6PM"],
      description: "Extended hours during special programs",
      action: "View Schedule",
      link: "#"
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://m.facebook.com/61566480613117/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/the_open_book_22?igsh=MTkwbmF6OXY4c3JvMw==" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@theopenbookbyhira?si=OyIVh8Qcq3LPnutL" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" }
  ]

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer Spoken English & Soft Skills, Phonics Training, IELTS Coaching, and Personality Development courses."
    },
    {
      question: "How long are the courses?",
      answer: "Course duration varies from 3 months to 1 year depending on the program and your learning pace."
    },
    {
      question: "Do you provide online classes?",
      answer: "Yes, we offer both in-person and online classes to accommodate different learning preferences."
    },
    {
      question: "What is your success rate?",
      answer: "We maintain a 95% success rate with our students achieving their learning goals and improving their skills."
    },
    {
      question: "Do you offer free trial classes?",
      answer: "Yes, we offer free trial classes so you can experience our teaching methodology before enrolling."
    },
    {
      question: "What are your operating hours?",
      answer: "We're open Monday-Friday 9AM-7PM, Saturday 9AM-6PM, and Sunday 10AM-4PM with extended hours during special programs."
    }
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Happy Students" },
    { icon: CheckCircle, number: "95%", label: "Success Rate" },
    { icon: Calendar, number: "13+", label: "Years Experience" },
    { icon: MessageCircle, number: "24/7", label: "Support Available" }
  ]

      return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.1} direction="down">
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <MessageCircle className="w-4 h-4 mr-2" />
                We're Here to Help
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-slate-900">Get in</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light mb-12">
                Ready to transform your communication skills? We're here to guide you every step of the way.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tagmango.com/creator/membership/free" className="group inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200">
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <StaggerItem key={index}>
                  <div className="group bg-white rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                      <IconComponent className="h-7 w-7 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{info.title}</h3>
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-700 font-medium">{detail}</p>
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm mb-6 font-light">{info.description}</p>
                    <a href={info.link} className="block w-full bg-slate-900 text-white py-3 px-6 rounded-2xl text-center font-semibold hover:bg-slate-800 transition-all duration-200 group-hover:scale-105 transform">
                      {info.action}
                    </a>
                  </div>
                </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <SlideIn direction="left" delay={0.2}>
              <div>
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 lg:p-12 border border-slate-200/50">
                <div className="text-center mb-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Send us a Message</h2>
                  <p className="text-slate-600 font-light">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Thank You!</h3>
                    <p className="text-slate-600 mb-6 font-light">Your message has been sent successfully. We'll respond within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-slate-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-slate-700 font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="course" className="block text-slate-700 font-medium mb-2">Interested Course</label>
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all font-light"
                        >
                          <option value="">Select a course</option>
                          <option value="spoken-english">Spoken English & Soft Skills</option>
                          <option value="phonics">Phonics Training</option>
                          <option value="ielts">IELTS Coaching</option>
                          <option value="personality">Personality Development</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none font-light"
                        placeholder="Tell us about your learning goals, questions, or how we can help you..."
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="w-full bg-slate-900 text-white py-4 px-8 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
            </SlideIn>

            {/* Contact Info Sidebar */}
            <SlideIn direction="right" delay={0.3}>
              <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-slate-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Call or WhatsApp</p>
                      <p className="text-slate-300 font-light">+91 88934 67437</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-slate-300 font-light">theopenbookbyhira@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Visit Our Center</p>
                      <p className="text-slate-300 font-light">Kozhikode, Kerala, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-700 transition-all duration-200 hover:scale-110"
                        aria-label={social.name}
                      >
                        <social.icon className="h-5 w-5 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 overflow-hidden border border-slate-200/50">
                <div className="bg-slate-50 p-8 text-center border-b border-slate-200">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Location</h3>
                  <p className="text-slate-600 mb-4 font-light">The Open Book Training Center<br />Kozhikode, Kerala, India</p>
                  <a href="https://maps.google.com" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200">
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              {/* <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 p-8 border border-slate-200/50">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  Operating Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-light">Monday - Friday</span>
                    <span className="font-semibold text-slate-900">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-light">Saturday</span>
                    <span className="font-semibold text-slate-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-light">Sunday</span>
                    <span className="font-semibold text-slate-900">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                  <p className="text-blue-700 text-sm font-medium">
                    Extended hours during IELTS exam seasons and special programs
                  </p>
                </div>
              </div> */}
            </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Find quick answers to common questions. Can't find what you're looking for? Contact us directly!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6 font-light">Still have questions?</p>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section> */}

      {/* Statistics Section */}
      {/* <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Students Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Join hundreds of successful students who have transformed their lives with The Open Book.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-slate-600" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                  <p className="text-slate-600 font-light">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
              Don't wait another day to unlock your potential. Contact us now and take the first step towards transforming your communication skills.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} direction="up">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 group">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center justify-center border border-slate-600 text-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}