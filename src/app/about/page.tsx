'use client'

import { BookOpen, Users, Award, Target, Heart, Star, CheckCircle, ArrowRight, Globe, Trophy, Clock, UserCheck, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We maintain the highest standards in language training with certified instructors and proven methodologies."
    },
    {
      icon: Heart,
      title: "Student-Centered Approach",
      description: "Every student's learning journey is unique. We provide personalized attention and adaptive teaching methods."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for international opportunities with worldwide communication standards."
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "13+ years of success stories with 500+ students achieving their communication goals."
    }
  ]

  const trainers = [
    {
      name: "Sarah Johnson",
      role: "Lead English Instructor",
      experience: "8 years",
      specialization: "Spoken English & IELTS",
      certification: "TESOL Certified",
      description: "Expert in conversational English with a passion for helping students overcome language barriers.",
      initials: "SJ"
    },
    {
      name: "Raj Kumar",
      role: "Phonics Specialist",
      experience: "6 years",
      specialization: "Phonics & Foundation Skills",
      certification: "Phonics Training Certified",
      description: "Specializes in building strong reading foundations for children and adult learners.",
      initials: "RK"
    },
    {
      name: "Priya Menon",
      role: "Personality Development Coach",
      experience: "5 years",
      specialization: "Soft Skills & Communication",
      certification: "Life Coach Certified",
      description: "Transforms confidence and leadership skills through comprehensive personality development programs.",
      initials: "PM"
    }
  ]

  const achievements = [
    { number: "500+", label: "Students Transformed", icon: Users },
    { number: "13+", label: "Years of Excellence", icon: Award },
    { number: "4", label: "Specialized Courses", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Certified Trainers", icon: UserCheck }
  ]

  const milestones = [
    { year: "2012", title: "Foundation", description: "The Open Book was founded with a vision to transform English education in Kerala." },
    { year: "2015", title: "First 100 Students", description: "Reached our first major milestone of successfully training 100 students." },
    { year: "2018", title: "IELTS Excellence", description: "Launched specialized IELTS coaching with 95% success rate in first batch." },
    { year: "2020", title: "Digital Transformation", description: "Adapted to online learning during pandemic, maintaining quality education remotely." },
    { year: "2022", title: "500+ Success Stories", description: "Celebrated training over 500 students with life-changing results." },
    { year: "2025", title: "Future Ready", description: "Partnered with TagMango for seamless digital learning experiences." }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Award className="w-4 h-4 mr-2" />
              Transforming Lives Since 2012
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-slate-900">About</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                The Open Book
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
              For over 13 years, we've been transforming lives through exceptional English communication training in Kozhikode, Kerala. Our mission is to unlock every student's potential and open doors to global opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/courses" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200 group">
                Explore Our Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Our Mission & Vision</h2>
              </div>
              <div className="space-y-10">
                <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-900/5 border border-slate-200 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission</h3>
                  <p className="text-slate-700 leading-relaxed text-lg font-light">
                    To provide world-class English communication training that empowers students with confidence, fluency, and the skills needed to succeed in a globalized world. We believe every voice deserves to be heard clearly and confidently.
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-900/5 border border-slate-200 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-violet-600 mb-4">Vision</h3>
                  <p className="text-slate-700 leading-relaxed text-lg font-light">
                    To be Kerala's premier destination for English language education, creating a generation of confident communicators who can seamlessly navigate international opportunities and contribute to global conversations.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-8">
              <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-slate-200/50">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Global Impact</h4>
                  <p className="text-slate-600 font-light leading-relaxed">
                    Preparing students for worldwide opportunities with internationally recognized communication standards and methodologies.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">25+</div>
                      <div className="text-sm text-slate-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">85%</div>
                      <div className="text-sm text-slate-600">Global Jobs</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-20 rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl opacity-10 -rotate-12 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Numbers that reflect our commitment to excellence and student success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="group bg-white rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden">
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 transition-colors">
                      <IconComponent className="h-8 w-8 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</h3>
                    <p className="text-slate-600 font-medium">{achievement.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              The principles that guide everything we do at The Open Book.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Meet Our Expert Trainers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Our certified trainers bring years of experience and passion for transforming lives through education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="group bg-white rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                      {trainer.initials}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{trainer.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{trainer.role}</p>
                    <p className="text-slate-500 text-sm">{trainer.certification}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Experience</span>
                      <span className="font-medium text-slate-900">{trainer.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Specialization</span>
                      <span className="font-medium text-slate-900">{trainer.specialization}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{trainer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              From humble beginnings to transforming hundreds of lives - our story of growth and impact.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-violet-600"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                        <div className={`inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${index % 2 === 0 ? '' : 'ml-0'}`}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                        <p className="text-slate-600 font-light">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why Students Choose The Open Book</h2>
          <p className="text-xl text-slate-300 mb-16 max-w-3xl mx-auto font-light">
            Discover what sets us apart in English language education.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="space-y-4 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300">
              <CheckCircle className="h-8 w-8 mx-auto text-green-400" />
              <h3 className="text-xl font-semibold">Certified Trainers</h3>
              <p className="text-slate-300 font-light leading-relaxed">All our instructors are certified professionals with proven expertise</p>
            </div>
            <div className="space-y-4 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300">
              <CheckCircle className="h-8 w-8 mx-auto text-green-400" />
              <h3 className="text-xl font-semibold">Personalized Attention</h3>
              <p className="text-slate-300 font-light leading-relaxed">Small batch sizes ensure individual focus and customized learning</p>
            </div>
            <div className="space-y-4 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300">
              <CheckCircle className="h-8 w-8 mx-auto text-green-400" />
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="text-slate-300 font-light leading-relaxed">95% success rate with students achieving their communication goals</p>
            </div>
            <div className="space-y-4 p-6 rounded-3xl border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all duration-300">
              <CheckCircle className="h-8 w-8 mx-auto text-green-400" />
              <h3 className="text-xl font-semibold">Flexible Learning</h3>
              <p className="text-slate-300 font-light leading-relaxed">Online and offline options to suit your schedule and preferences</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">Ready to Start Your Transformation?</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/courses" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 group">
                View Our Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center border border-slate-600 text-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
                Start Free Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}