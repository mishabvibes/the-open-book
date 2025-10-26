import { BookOpen, Users, Award, Target, Heart, Star, CheckCircle, ArrowRight, Globe, Trophy, Clock, UserCheck, ChevronRight } from 'lucide-react'
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/client/AnimatedWrapper'

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
      name: "Mishahira Arakkal",
      role: "Lead English Instructor & Founder",
      experience: "13+ years",
      specialization: "All English Communication Skills",
      certification: "Certified Language Trainer",
      description: "Expert in Spoken English, IELTS, Phonics, Personality Development, and all aspects of English communication. With over 13 years of experience, Mishahira has transformed the lives of 5000+ students through personalized teaching methods and a passion for excellence.",
      initials: "MA"
    }
  ]

  const achievements = [
    { number: "5000+", label: "Students Transformed", icon: Users },
    { number: "13+", label: "Years of Excellence", icon: Award },
    { number: "10+", label: "Specialized Courses", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: Star },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Certified Trainers", icon: UserCheck }
  ]

  const milestones = [
    { year: "2012", title: "Foundation", description: "The Open Book was founded with a vision to transform English education in Kerala." },
    { year: "2015", title: "First 500 Students", description: "Reached our first major milestone of successfully training 500 students." },
    { year: "2018", title: "IELTS Excellence", description: "Launched specialized IELTS coaching with 95% success rate in first batch." },
    { year: "2020", title: "Digital Transformation", description: "Adapted to online learning during pandemic, maintaining quality education remotely." },
    { year: "2022", title: "7000+ Success Stories", description: "Celebrated training over 500 students with life-changing results." },
    { year: "2025", title: "Future Ready", description: "Partnered with TagMango for seamless digital learning experiences." }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto">
            <FadeIn delay={0.1} direction="down">
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Transforming Lives Since 2012
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8">
                <span className="text-slate-900">About</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  The Open Book
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} direction="up">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed font-light mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
                For over 13 years, we've been transforming lives through exceptional English communication training in Kozhikode, Kerala. Our mission is to unlock every student's potential and open doors to global opportunities.
              </p>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="/courses" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-slate-800 transition-all duration-200 group">
                Explore Our Courses
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-slate-50 transition-all duration-200">
                Contact Us
              </a>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <FadeIn delay={0.2} direction="left">
              <div className="space-y-8 sm:space-y-12 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">Our Mission & Vision</h2>
              </div>
              <div className="space-y-6 sm:space-y-10">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-900/5 border border-slate-200 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">Mission</h3>
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-light">
                    To provide world-class English communication training that empowers students with confidence, fluency, and the skills needed to succeed in a globalized world. We believe every voice deserves to be heard clearly and confidently.
                  </p>
                </div>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-900/5 border border-slate-200 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-violet-600 mb-3 sm:mb-4">Vision</h3>
                  <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-light">
                    To be Kerala's premier destination for English language education, creating a generation of confident communicators who can seamlessly navigate international opportunities and contribute to global conversations.
                  </p>
                </div>
              </div>
            </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="right">
              <div className="relative lg:pl-8 order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10 p-6 sm:p-8 border border-slate-200/50">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto">
                    <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Global Impact</h4>
                  <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
                    Preparing students for worldwide opportunities with internationally recognized communication standards and methodologies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">25+</div>
                      <div className="text-xs sm:text-sm text-slate-600">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">85%</div>
                      <div className="text-xs sm:text-sm text-slate-600">Global Jobs</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl opacity-20 rotate-12 animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl opacity-10 -rotate-12 animate-pulse delay-1000"></div>
            </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Our Achievements</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Numbers that reflect our commitment to excellence and student success.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.1}>
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <StaggerItem key={index}>
                  <div className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 overflow-hidden">
                  <div className="p-4 sm:p-6 lg:p-8 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-100 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-50 transition-colors">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">{achievement.number}</h3>
                    <p className="text-slate-600 font-medium text-sm sm:text-base">{achievement.label}</p>
                  </div>
                </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Our Core Values</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
                The principles that guide everything we do at The Open Book.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={0.1}>
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <StaggerItem key={index}>
                  <div className="text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-300">
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">{value.description}</p>
                </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section - Combined Founder & Trainer */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Meet Our Founder & Expert Trainer</h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4">
                The visionary leader behind The Open Book's transformative journey - dedicated to empowering students for over 13 years.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-7xl mx-auto">
            {trainers.map((trainer, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
                {/* Left Column - Photo & Quick Stats */}
                <FadeIn delay={0.2} direction="left" className="lg:col-span-4">
                  <div className="space-y-6">
                    <div className="relative max-w-sm mx-auto lg:max-w-none">
                      <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-4 ring-slate-100">
                        <img src="/img/mam1.png" className='w-full h-full object-cover' alt="Mishahira Arakkal - Founder & Lead Trainer" />
                      </div>
                      <div className="hidden md:block absolute -bottom-3 -right-3 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl opacity-20 rotate-12 -z-10"></div>
                      <div className="hidden md:block absolute -top-3 -left-3 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl opacity-30 -rotate-12 -z-10"></div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg shadow-slate-900/5">
                      <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{trainer.name}</h3>
                        <p className="text-blue-600 font-semibold mb-1 text-base sm:text-lg">{trainer.role}</p>
                        <p className="text-slate-500 text-sm sm:text-base mb-6">{trainer.certification}</p>
                        
                        <div className="space-y-3 pt-6 border-t border-slate-300">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600 font-medium text-sm sm:text-base">Experience</span>
                            <span className="font-bold text-slate-900 text-sm sm:text-base">{trainer.experience}</span>
                          </div>
                          <div className="h-px bg-slate-200"></div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <span className="text-slate-600 font-medium text-sm sm:text-base">Specialization</span>
                            <span className="font-bold text-slate-900 text-sm sm:text-base sm:text-right leading-tight">{trainer.specialization}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick Stats */}
                    <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4" staggerDelay={0.1}>
                      <StaggerItem>
                        <div className="text-center p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                          <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">13+</div>
                          <div className="text-xs sm:text-sm text-slate-600 font-medium">Years</div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="text-center p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                          <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">5000+</div>
                          <div className="text-xs sm:text-sm text-slate-600 font-medium">Students</div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="text-center p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                          <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">95%</div>
                          <div className="text-xs sm:text-sm text-slate-600 font-medium">Success</div>
                        </div>
                      </StaggerItem>
                    </StaggerContainer>
                  </div>
                </FadeIn>
                
                {/* Right Column - About & Message */}
                <FadeIn delay={0.3} direction="right" className="lg:col-span-8">
                  <div className="space-y-6 sm:space-y-8">
                    {/* About Section */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-slate-200 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-5 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>
                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">About</h4>
                      </div>
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-light">
                        {trainer.description}
                      </p>
                    </div>
                    
                    {/* Founder's Message */}
                    <div className="bg-gradient-to-br from-blue-50 via-violet-50/50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-200 shadow-lg shadow-blue-900/5">
                      <div className="flex items-center gap-3 mb-6 sm:mb-8">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">My Vision & Commitment</h4>
                      </div>
                      
                      <div className="space-y-5 sm:space-y-6">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="text-3xl sm:text-4xl lg:text-5xl text-blue-600 font-serif leading-none flex-shrink-0 mt-1">"</div>
                          <div className="space-y-4 sm:space-y-5">
                            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                              When I started The Open Book in 2012, I had a simple yet powerful vision: to transform how people in Kerala approach English communication. I witnessed countless talented individuals struggle with opportunities simply because they couldn't express themselves confidently in English.
                            </p>
                            
                            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                              Over the past 13 years, we've had the privilege of working with over 5000 students, each with their unique dreams and challenges. What fills me with immense pride is not just the language skills they've acquired, but the confidence they've gained to pursue their aspirations fearlessly.
                            </p>
                            
                            <div className="border-l-4 border-blue-600 pl-4 sm:pl-6 bg-white/60 backdrop-blur-sm rounded-r-xl p-4 sm:p-5 my-6">
                              <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-semibold italic leading-relaxed">
                                "Every student who walks through our doors carries unlimited potential. Our job is simply to unlock it and help them soar."
                              </p>
                            </div>
                            
                            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                              Our approach goes beyond traditional teaching. We believe in nurturing the whole person – building confidence, developing personality, and creating global citizens who can contribute meaningfully to any conversation, anywhere in the world.
                            </p>
                            
                            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed">
                              As we continue this journey, our commitment remains unchanged: to provide world-class English education that doesn't just teach language, but transforms lives. Thank you for being part of The Open Book family.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline - Fully Responsive */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Our Journey</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
                From humble beginnings to transforming hundreds of lives - our story of growth and impact.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            {/* Mobile Timeline (vertical, single column) */}
            <StaggerContainer className="block lg:hidden space-y-8" staggerDelay={0.15}>
              {milestones.map((milestone, index) => (
                <StaggerItem key={index}>
                  <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-violet-600 last:hidden"></div>
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 p-4 sm:p-6 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                    <div className="inline-block bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 font-light text-sm sm:text-base">{milestone.description}</p>
                  </div>
                </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            
            {/* Desktop Timeline (alternating sides) */}
            <div className="hidden lg:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-violet-600"></div>
              
              <StaggerContainer className="space-y-12" staggerDelay={0.15}>
                {milestones.map((milestone, index) => (
                  <StaggerItem key={index}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200 p-6 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300">
                        <div className={`inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
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
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section - Continuation */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-white">
          <FadeIn delay={0.1} direction="up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Why Students Choose The Open Book</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-12 sm:mb-16 max-w-3xl mx-auto font-light px-4">
              Discover what sets us apart in English language education.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16" staggerDelay={0.15}>
            <StaggerItem>
              <div className="space-y-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-green-400" />
                <h3 className="text-lg sm:text-xl font-semibold">Personalized Attention</h3>
                <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base">Small batch sizes ensure individual focus and customized learning</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-green-400" />
                <h3 className="text-lg sm:text-xl font-semibold">Proven Results</h3>
                <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base">95% success rate with students achieving their communication goals</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-green-400" />
                <h3 className="text-lg sm:text-xl font-semibold">Flexible Learning</h3>
                <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base">Online and offline options to suit your schedule and preferences</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          
          <FadeIn delay={0.5} direction="up">
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-2xl sm:text-3xl font-bold">Ready to Start Your Transformation?</h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                <a href="/courses" className="inline-flex items-center justify-center bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-slate-100 transition-all duration-200 group">
                  View Our Courses
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center border-2 border-slate-600 text-slate-300 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
                  Start Free Today
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      </div>
  )
}