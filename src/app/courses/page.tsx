'use client'

import { useState } from 'react'
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight, Filter, Search, Play, Award, Target, Globe, MessageCircle, ChevronRight } from 'lucide-react'

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const courses = [
    {
      id: 1,
      title: "Spoken English & Soft Skills",
      category: "Communication",
      description: "Master fluent English communication and essential soft skills for personal and professional growth. Build confidence in speaking, listening, and professional interactions.",
      duration: "3-6 months",
      level: "Beginner to Advanced",
      students: "200+",
      rating: 4.8,
      price: "₹2,999",
      originalPrice: "₹4,999",
      features: [
        "Interactive speaking sessions",
        "Grammar and vocabulary building",
        "Presentation skills training",
        "Business communication",
        "Confidence building exercises",
        "Peer practice groups",
        "Progress tracking",
        "Certificate upon completion"
      ],
      modules: [
        "Foundation Speaking Skills",
        "Grammar Mastery",
        "Vocabulary Enhancement",
        "Pronunciation & Accent",
        "Business Communication",
        "Presentation Skills"
      ],
      instructor: "Sarah Johnson",
      tagmangoUrl: "https://tagmango.com/creator/course/spoken-english",
      popular: true,
      icon: MessageCircle
    },
    {
      id: 2,
      title: "Phonics Training",
      category: "Foundation",
      description: "Build strong reading foundation with systematic phonics instruction for kids and adults. Perfect for beginners starting their English learning journey.",
      duration: "2-4 months",
      level: "Foundation",
      students: "150+",
      rating: 4.9,
      price: "₹1,999",
      originalPrice: "₹2,999",
      features: [
        "Systematic phonics approach",
        "Letter-sound relationships",
        "Reading fluency development",
        "Interactive games and activities",
        "Progress assessments",
        "Parent guidance sessions",
        "Digital resources",
        "Individual attention"
      ],
      modules: [
        "Letter Recognition",
        "Sound Blending",
        "Word Formation",
        "Reading Comprehension",
        "Fluency Building",
        "Assessment & Practice"
      ],
      instructor: "Raj Kumar",
      tagmangoUrl: "https://tagmango.com/creator/course/phonics",
      popular: false,
      icon: BookOpen
    },
    {
      id: 3,
      title: "IELTS Coaching",
      category: "Test Preparation",
      description: "Comprehensive IELTS preparation with expert guidance for international opportunities. Achieve your target band score with proven strategies.",
      duration: "2-3 months",
      level: "Intermediate to Advanced",
      students: "100+",
      rating: 4.9,
      price: "₹4,999",
      originalPrice: "₹7,999",
      features: [
        "All 4 modules covered (LRWS)",
        "Mock tests and practice sessions",
        "Individual feedback and scoring",
        "Test-taking strategies",
        "Band score improvement techniques",
        "Speaking practice with experts",
        "Writing task feedback",
        "Exam booking guidance"
      ],
      modules: [
        "Listening Skills",
        "Reading Strategies",
        "Writing Tasks 1 & 2",
        "Speaking Practice",
        "Mock Tests",
        "Score Improvement"
      ],
      instructor: "Sarah Johnson",
      tagmangoUrl: "https://tagmango.com/creator/course/ielts",
      popular: true,
      icon: Globe
    },
    {
      id: 4,
      title: "Personality Development",
      category: "Personal Growth",
      description: "Transform your confidence, communication, and leadership skills for success. Develop a winning personality that opens doors to opportunities.",
      duration: "1-2 months",
      level: "All Levels",
      students: "80+",
      rating: 4.7,
      price: "₹1,499",
      originalPrice: "₹2,499",
      features: [
        "Confidence building techniques",
        "Leadership skills development",
        "Body language and posture",
        "Interview preparation",
        "Public speaking skills",
        "Stress management",
        "Goal setting strategies",
        "Personal branding"
      ],
      modules: [
        "Self-Assessment",
        "Confidence Building",
        "Communication Skills",
        "Leadership Qualities",
        "Interview Skills",
        "Personal Branding"
      ],
      instructor: "Priya Menon",
      tagmangoUrl: "https://tagmango.com/creator/course/personality",
      popular: false,
      icon: Target
    }
  ]

  const filters = ['All', 'Communication', 'Foundation', 'Test Preparation', 'Personal Growth']

  const filteredCourses = courses.filter(course => {
    const matchesFilter = activeFilter === 'All' || course.category === activeFilter
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const testimonials = [
    {
      name: "Anjali Sharma",
      course: "IELTS Coaching",
      content: "Achieved 8.5 band score! The mock tests and personal feedback were invaluable.",
      rating: 5,
      initials: "AS"
    },
    {
      name: "Rahul Nair",
      course: "Spoken English",
      content: "From stammering to confident presentations - The Open Book changed my career.",
      rating: 5,
      initials: "RN"
    },
    {
      name: "Meera Thomas",
      course: "Phonics Training",
      content: "My daughter now reads fluently at age 5. Excellent teaching methodology!",
      rating: 5,
      initials: "MT"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BookOpen className="w-4 h-4 mr-2" />
              Expert-Led Courses for Every Level
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-slate-900">Our</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light mb-12">
              Transform your communication skills with our expertly designed courses. From foundation to advanced levels, we have the perfect program for your journey.
            </p>

            {/* Search and Filter */}
            <div className="bg-white rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-900 placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <Filter className="text-slate-400 h-5 w-5" />
                  <div className="flex flex-wrap gap-2">
                    {filters.map(filter => (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
                          activeFilter === filter
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => {
              const IconComponent = course.icon
              return (
                <div key={course.id} className={`group bg-white rounded-3xl border hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 overflow-hidden ${
                  course.popular ? 'border-blue-300 ring-4 ring-blue-50' : 'border-slate-200 hover:border-slate-300'
                }`}>
                  {course.popular && (
                    <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center py-3 text-sm font-semibold">
                      ⭐ Most Popular Course
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Course Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                          <IconComponent className="h-7 w-7 text-slate-600 group-hover:text-blue-600" />
                        </div>
                        <div>
                          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                            {course.category}
                          </div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h2>
                          <div className="flex items-center space-x-4 text-sm text-slate-500">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span>{course.students}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span>{course.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-3xl font-bold text-slate-900">{course.price}</span>
                        <span className="text-lg text-slate-500 line-through">{course.originalPrice}</span>
                        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {Math.round((1 - parseInt(course.price.replace('₹', '').replace(',', '')) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm">Level: {course.level}</p>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 leading-relaxed mb-8 font-light">{course.description}</p>

                    {/* Course Modules */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Course Modules</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {course.modules.map((module, moduleIndex) => (
                          <div key={moduleIndex} className="flex items-center space-x-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{module}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">What You'll Get</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {course.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {course.features.length > 4 && (
                        <p className="text-sm text-blue-600 mt-3 font-medium">+{course.features.length - 4} more features</p>
                      )}
                    </div>

                    {/* Instructor */}
                    <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-semibold">
                          {course.instructor.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 font-medium">Instructor</p>
                          <p className="font-semibold text-slate-900">{course.instructor}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={course.tagmangoUrl} className="flex-1 inline-flex items-center justify-center bg-slate-900 text-white py-4 px-6 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200 group">
                        Enroll Now
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button className="sm:flex-1 inline-flex items-center justify-center border border-slate-300 text-slate-700 py-4 px-6 rounded-2xl font-semibold hover:bg-slate-50 transition-all duration-200">
                        <Play className="mr-2 h-5 w-5" />
                        Preview
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Recommended Learning Path</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Follow our structured approach for maximum learning effectiveness.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
              {[
                { step: 1, title: "Foundation", desc: "Start with Phonics Training to build strong basics", icon: BookOpen, color: "blue" },
                { step: 2, title: "Communication", desc: "Master Spoken English & Soft Skills", icon: MessageCircle, color: "green" },
                { step: 3, title: "Specialization", desc: "Choose IELTS or Personality Development", icon: Target, color: "violet" },
                { step: 4, title: "Mastery", desc: "Achieve your goals and unlock opportunities", icon: Award, color: "orange" }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="relative flex-1 max-w-sm">
                    <div className="bg-white rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 p-8 text-center group hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                      <div className={`w-16 h-16 bg-${item.color}-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl`}>
                        {item.step}
                      </div>
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                        <IconComponent className="h-6 w-6 text-slate-600 group-hover:text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                    {index < 3 && (
                      <ChevronRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Student Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Real results from real students who transformed their lives with our courses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl border border-slate-200 p-8 text-center hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 font-light leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Get answers to common questions about our courses and enrollment process.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Are the courses suitable for beginners?</h3>
                <p className="text-slate-600 font-light leading-relaxed">Yes! Our courses are designed for all levels. We start from the basics and gradually progress to advanced concepts.</p>
              </div>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Do you provide certificates?</h3>
                <p className="text-slate-600 font-light leading-relaxed">Yes, all students receive completion certificates that can be used for career advancement and educational purposes.</p>
              </div>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Can I switch between online and offline classes?</h3>
                <p className="text-slate-600 font-light leading-relaxed">Absolutely! We offer flexible learning options and you can choose the format that works best for your schedule.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">What is the refund policy?</h3>
                <p className="text-slate-600 font-light leading-relaxed">We offer a 7-day money-back guarantee if you're not satisfied with the course content or teaching quality.</p>
              </div>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">How long do I have access to course materials?</h3>
                <p className="text-slate-600 font-light leading-relaxed">You get lifetime access to all course materials, including updates and new content added to your enrolled courses.</p>
              </div>
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Are there any prerequisites?</h3>
                <p className="text-slate-600 font-light leading-relaxed">No specific prerequisites required. Just bring your enthusiasm to learn and improve your English communication skills!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
            Join thousands of students who have already transformed their communication skills with The Open Book.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 group">
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/contact" className="inline-flex items-center justify-center border border-slate-600 text-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}