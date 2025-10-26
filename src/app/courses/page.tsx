'use client'

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight, Filter, Search, Play, Award, Target, Globe, MessageCircle, ChevronRight, Video, MapPin, Calendar, Zap, User, GraduationCap, FileText, Briefcase } from 'lucide-react'
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '@/components/client/AnimatedWrapper'

export default function CoursesPage() {
  // Courses page keeps 'use client' due to complex filtering/search state
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMode, setSelectedMode] = useState('live')

  const liveOnlineCourses = [
    {
      id: 1,
      title: "Spoken English for Adults",
      category: "Communication",
      description: "Master fluent English communication with live interactive sessions designed specifically for adult learners. Build confidence and speak naturally.",
      duration: "8-12 weeks",
      level: "Beginner to Advanced",
      students: "500+",
      rating: 4.9,
      price: "₹1,999",
      mode: "Live Online",
      features: [
        "Interactive live sessions with expert instructors",
        "Real-time feedback and corrections",
        "Group discussions and speaking practice",
        "Personalized learning approach",
        "Grammar and vocabulary building",
        "Confidence building exercises",
        "Progress tracking and assessments",
        "Certificate upon completion"
      ],
      modules: [
        "Foundation Speaking Skills",
        "Grammar Essentials",
        "Vocabulary Enhancement",
        "Pronunciation Training",
        "Conversation Practice",
        "Public Speaking Confidence"
      ],
      instructor: "Expert Faculty",
      popular: true,
      icon: MessageCircle,
      sessionType: "Live Interactive",
      batchSize: "15-20 students"
    },
    {
      id: 2,
      title: "Spoken English for Kids",
      category: "Kids Learning",
      description: "Fun and engaging English learning program specially designed for children. Interactive activities and games make learning enjoyable and effective.",
      duration: "6-10 weeks",
      level: "Foundation to Intermediate",
      students: "300+",
      rating: 4.8,
      price: "₹1,999",
      mode: "Live Online",
      features: [
        "Age-appropriate learning activities",
        "Interactive games and storytelling",
        "Visual learning aids and props",
        "Small batch sizes for individual attention",
        "Parent progress updates",
        "Fun assessments and rewards",
        "Confidence building in friendly environment",
        "Digital learning resources"
      ],
      modules: [
        "Basic Vocabulary",
        "Simple Conversations",
        "Phonics Integration",
        "Story Reading",
        "Creative Expression",
        "Confidence Building"
      ],
      instructor: "Child Specialist Faculty",
      popular: true,
      icon: User,
      sessionType: "Interactive & Fun",
      batchSize: "8-12 children"
    },
    {
      id: 3,
      title: "Phonics Training",
      category: "Foundation",
      description: "Comprehensive phonics program for building strong reading and pronunciation foundation. Perfect for beginners of all ages.",
      duration: "4-6 weeks",
      level: "Foundation",
      students: "400+",
      rating: 4.9,
      price: "₹1,999",
      mode: "Live Online",
      features: [
        "Systematic phonics instruction",
        "Letter-sound relationship mastery",
        "Reading fluency development",
        "Pronunciation improvement",
        "Interactive phonics games",
        "Progress tracking",
        "Individual attention",
        "Age-appropriate materials"
      ],
      modules: [
        "Letter Recognition",
        "Sound Patterns",
        "Word Formation",
        "Reading Practice",
        "Pronunciation Rules",
        "Fluency Building"
      ],
      instructor: "Phonics Specialist",
      popular: false,
      icon: BookOpen,
      sessionType: "Structured Learning",
      batchSize: "12-15 students"
    },
    {
      id: 4,
      title: "IELTS Preparation",
      category: "Test Preparation",
      description: "Comprehensive IELTS coaching with expert guidance to achieve your target band score. Complete preparation for all four modules.",
      duration: "10-12 weeks",
      level: "Intermediate to Advanced",
      students: "200+",
      rating: 4.9,
      price: "₹5,999",
      mode: "Live Online",
      features: [
        "All 4 modules covered (LRWS)",
        "Expert faculty with proven track record",
        "Regular mock tests and practice",
        "Individual feedback and scoring",
        "Test-taking strategies and tips",
        "Speaking practice sessions",
        "Writing task evaluation",
        "Exam registration guidance"
      ],
      modules: [
        "Listening Strategies",
        "Reading Techniques",
        "Writing Tasks 1 & 2",
        "Speaking Practice",
        "Mock Tests",
        "Score Analysis"
      ],
      instructor: "IELTS Expert",
      popular: true,
      icon: Globe,
      sessionType: "Intensive Training",
      batchSize: "10-15 students"
    },
    {
      id: 5,
      title: "5-Day Crash Courses",
      category: "Intensive",
      description: "Quick and effective crash courses covering Basic English & Grammar, English for Workplace, and Business English in just 5 days.",
      duration: "5 days",
      level: "All Levels",
      students: "150+",
      rating: 4.7,
      price: "₹1,999",
      mode: "Live Online",
      features: [
        "Intensive 5-day program",
        "Multiple course options",
        "Fast-track learning approach",
        "Practical workplace scenarios",
        "Business communication focus",
        "Grammar fundamentals",
        "Interactive sessions",
        "Quick skill enhancement"
      ],
      modules: [
        "Basic English Essentials",
        "Grammar Fundamentals",
        "Workplace Communication",
        "Business English Skills",
        "Email Writing",
        "Presentation Skills"
      ],
      instructor: "Business English Expert",
      popular: false,
      icon: Zap,
      sessionType: "Intensive & Fast",
      batchSize: "20-25 students"
    },
    {
      id: 6,
      title: "Interview Training Workshop",
      category: "Career Skills",
      description: "Intensive 2-day workshop focused on interview preparation, communication skills, and confidence building for career success.",
      duration: "2 days",
      level: "All Levels",
      students: "100+",
      rating: 4.8,
      price: "₹1,499",
      mode: "Live Online",
      features: [
        "Mock interview sessions",
        "Personal interview coaching",
        "Communication skills enhancement",
        "Confidence building techniques",
        "Industry-specific preparation",
        "Body language training",
        "Common questions practice",
        "Feedback and improvement tips"
      ],
      modules: [
        "Interview Preparation",
        "Communication Skills",
        "Mock Interviews",
        "Confidence Building",
        "Industry Insights",
        "Success Strategies"
      ],
      instructor: "Career Coach",
      popular: false,
      icon: Briefcase,
      sessionType: "Intensive Workshop",
      batchSize: "15-20 participants"
    }
  ]

  const offlineCourses = liveOnlineCourses.map(course => ({
    ...course,
    id: course.id + 100,
    mode: "Offline Classroom",
    price: course.title.includes("Interview Training") ? "₹1,499" :
      course.title.includes("Crash Course") ? "₹1,999" :
        course.title.includes("IELTS") ? "₹7,999" : "₹3,999",
    features: [
      ...course.features.slice(0, -1),
      "Face-to-face interaction with instructors",
      "Hands-on learning experience",
      "Immediate doubt resolution",
      "Classroom environment and peer learning"
    ]
  }))

  const recordedCourses = [
    {
      id: 201,
      title: "Phonics Training (Recorded)",
      category: "Foundation",
      description: "Self-paced phonics learning with comprehensive recorded lessons. Learn at your own convenience with lifetime access.",
      duration: "Self-paced",
      level: "Foundation",
      students: "1000+",
      rating: 4.7,
      price: "₹999",
      mode: "Recorded",
      features: [
        "Complete recorded lesson series",
        "Lifetime access to content",
        "Learn at your own pace",
        "Downloadable resources",
        "Practice exercises included",
        "Progress tracking",
        "Mobile-friendly platform",
        "Certificate upon completion"
      ],
      modules: [
        "Introduction to Phonics",
        "Letter Sounds & Recognition",
        "Blending Techniques",
        "Reading Practice",
        "Assessment & Review"
      ],
      instructor: "Expert Faculty",
      popular: false,
      icon: Video,
      sessionType: "Self-Paced Learning"
    },
    {
      id: 202,
      title: "Basic Grammar (Recorded)",
      category: "Grammar",
      description: "Complete grammar foundation course with recorded lessons covering all essential grammar concepts for beginners.",
      duration: "Self-paced",
      level: "Beginner",
      students: "800+",
      rating: 4.6,
      price: "₹799",
      mode: "Recorded",
      features: [
        "Comprehensive grammar coverage",
        "Step-by-step explanations",
        "Practice exercises and quizzes",
        "Real-world examples",
        "Lifetime access",
        "Progress tracking",
        "Downloadable worksheets",
        "Certificate of completion"
      ],
      modules: [
        "Parts of Speech",
        "Tenses & Time",
        "Sentence Structure",
        "Common Mistakes",
        "Practice & Application"
      ],
      instructor: "Grammar Specialist",
      popular: false,
      icon: BookOpen,
      sessionType: "Structured Learning"
    },
    {
      id: 203,
      title: "Professional English (Recorded)",
      category: "Professional",
      description: "Advanced professional English course for workplace communication, presentations, and business interactions.",
      duration: "Self-paced",
      level: "Intermediate to Advanced",
      students: "600+",
      rating: 4.8,
      price: "₹1,499",
      mode: "Recorded",
      features: [
        "Professional communication focus",
        "Business vocabulary building",
        "Email and report writing",
        "Presentation skills",
        "Meeting participation",
        "Networking conversations",
        "Industry-specific content",
        "Career advancement support"
      ],
      modules: [
        "Professional Vocabulary",
        "Business Communication",
        "Email & Report Writing",
        "Presentation Skills",
        "Meeting Etiquette",
        "Networking Skills"
      ],
      instructor: "Business Communication Expert",
      popular: true,
      icon: Briefcase,
      sessionType: "Professional Focus"
    },
    {
      id: 204,
      title: "Interview Training (Recorded)",
      category: "Career Skills",
      description: "Complete interview preparation course with recorded sessions covering all aspects of successful job interviews.",
      duration: "Self-paced",
      level: "All Levels",
      students: "500+",
      rating: 4.7,
      price: "₹899",
      mode: "Recorded",
      features: [
        "Complete interview preparation",
        "Mock interview recordings",
        "Common questions and answers",
        "Industry-specific guidance",
        "Confidence building techniques",
        "Body language tips",
        "Follow-up strategies",
        "Success stories and examples"
      ],
      modules: [
        "Interview Fundamentals",
        "Question Preparation",
        "Communication Techniques",
        "Confidence Building",
        "Industry Insights",
        "Success Strategies"
      ],
      instructor: "Career Development Expert",
      popular: false,
      icon: User,
      sessionType: "Interview Focus"
    },
    {
      id: 205,
      title: "Resume Preparation (Recorded)",
      category: "Career Skills",
      description: "Professional resume writing course with templates, examples, and step-by-step guidance for creating winning resumes.",
      duration: "Self-paced",
      level: "All Levels",
      students: "400+",
      rating: 4.6,
      price: "₹699",
      mode: "Recorded",
      features: [
        "Resume writing fundamentals",
        "Professional templates included",
        "Industry-specific examples",
        "ATS-friendly formats",
        "Cover letter writing",
        "LinkedIn profile optimization",
        "Personal branding tips",
        "Review and feedback guidelines"
      ],
      modules: [
        "Resume Basics",
        "Content Development",
        "Formatting & Design",
        "Cover Letters",
        "LinkedIn Optimization",
        "Final Review Process"
      ],
      instructor: "HR & Career Expert",
      popular: false,
      icon: FileText,
      sessionType: "Practical Application"
    }
  ]

  const allCourses = [...liveOnlineCourses, ...offlineCourses, ...recordedCourses]

  const getFilteredCourses = () => {
    let courses: any[] = []

    if (activeTab === 'all') {
      courses = allCourses
    } else if (activeTab === 'live') {
      courses = selectedMode === 'live' ? liveOnlineCourses : offlineCourses
    } else if (activeTab === 'recorded') {
      courses = recordedCourses
    }

    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesSearch
    })
  }

  const filteredCourses = getFilteredCourses()

  const testimonials = [
    {
      name: "Priya Nair",
      course: "IELTS Preparation",
      content: "Achieved 8.0 overall! The live classes and mock tests were incredibly helpful for my preparation.",
      rating: 5,
      initials: "PN",
      achievement: "Band 8.0"
    },
    {
      name: "Rohit Kumar",
      course: "Spoken English for Adults",
      content: "From hesitant speaking to confident presentations. The Open Book transformed my communication skills completely.",
      rating: 5,
      initials: "RK",
      achievement: "Career Growth"
    },
    {
      name: "Sneha Sharma",
      course: "Interview Training",
      content: "Got my dream job! The mock interviews and feedback helped me face real interviews with confidence.",
      rating: 5,
      initials: "SS",
      achievement: "Dream Job"
    },
    {
      name: "Arjun Menon",
      course: "Professional English",
      content: "The recorded course was perfect for my busy schedule. Excellent content and practical applications.",
      rating: 5,
      initials: "AM",
      achievement: "Promotion"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-violet-600/5 to-emerald-600/5"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <FadeIn delay={0.1} direction="down">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-sm">
                <GraduationCap className="w-4 h-4 mr-2" />
                Transform Your Communication Skills
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">
                <span className="text-slate-900">Master</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                  English
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Discover what makes our English learning programs stand out from the rest.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              {
                icon: Video,
                title: "Live Interactive Classes",
                description: "Real-time learning with expert instructors and immediate feedback",
                color: "blue"
              },
              {
                icon: MapPin,
                title: "Flexible Learning Modes",
                description: "Choose from online, offline, or recorded classes based on your schedule",
                color: "green"
              },
              {
                icon: Award,
                title: "Certified Instructors",
                description: "Learn from experienced and qualified English language experts",
                color: "violet"
              },
              {
                icon: Target,
                title: "Proven Results",
                description: "Thousands of successful students achieving their language goals",
                color: "orange"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <StaggerItem key={index}>
                  <div className="group text-center">
                  <div className={`w-20 h-20 bg-${feature.color}-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                    <IconComponent className={`h-10 w-10 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{feature.description}</p>
                </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Choose The Open Book?</h2>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
                Choose from our comprehensive range of English courses - Live Online, Offline Classroom, or Self-Paced Recorded lessons. Start your journey to fluent communication today.
              </p>

            {/* Course Type Tabs */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200/50 p-2 mb-12 max-w-2xl mx-auto">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Courses', icon: BookOpen },
                  { id: 'live', label: 'Live Classes', icon: Video },
                  { id: 'recorded', label: 'Recorded', icon: Play }
                ].map(tab => {
                  const IconComponent = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${activeTab === tab.id
                          ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Live Class Mode Toggle */}
            {activeTab === 'live' && (
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/50 p-4 mb-8 max-w-md mx-auto">
                <div className="flex bg-slate-100 rounded-xl p-1">
                  <button
                    onClick={() => setSelectedMode('live')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${selectedMode === 'live'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Online
                  </button>
                  <button
                    onClick={() => setSelectedMode('offline')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${selectedMode === 'offline'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Offline
                  </button>
                </div>
              </div>
            )}

            {/* Search */}
            <div className="bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/50 p-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-12 pr-4 py-3 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 placeholder-slate-400 bg-slate-50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {filteredCourses.length === 0 ? (
            <FadeIn delay={0.2} direction="up">
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No courses found</h3>
                <p className="text-slate-600">Try adjusting your search or filters to find what you're looking for.</p>
              </div>
            </FadeIn>
          ) : (
            <StaggerContainer className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8" staggerDelay={0.1}>
              {filteredCourses.map((course) => {
                const IconComponent = course.icon
                const isRecorded = course.mode === 'Recorded'
                const isOffline = course.mode === 'Offline Classroom'

                return (
                  <StaggerItem key={course.id}>
                    <div className={`group relative bg-white rounded-3xl border-2 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-1 ${course.popular
                      ? 'border-gradient-to-r from-blue-500 to-violet-500 ring-4 ring-blue-50/50'
                      : 'border-slate-200/50 hover:border-slate-300/50'
                    }`}>

                    {/* Popular Badge */}
                    {course.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 text-white text-center py-3 text-sm font-bold tracking-wide">
                        ⭐ MOST POPULAR
                      </div>
                    )}

                    {/* Mode Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${isRecorded
                        ? 'bg-emerald-100 text-emerald-700'
                        : isOffline
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                      {isRecorded ? 'RECORDED' : isOffline ? 'OFFLINE' : 'LIVE ONLINE'}
                    </div>

                    <div className={`p-8 ${course.popular ? 'pt-20' : 'pt-8'}`}>
                      {/* Course Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:from-blue-50 group-hover:to-violet-50 transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-slate-600 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold mb-3 tracking-wide">
                            {course.category.toUpperCase()}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                            {course.title}
                          </h3>
                        </div>
                      </div>

                      {/* Course Stats */}
                      <div className="flex items-center space-x-6 mb-6 text-sm text-slate-500">
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
                          <span className="font-semibold">{course.rating}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-6">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl font-bold text-slate-900">{course.price}</span>
                          {!isRecorded && (
                            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                              LIVE CLASSES
                            </div>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm font-medium">{course.level}</p>
                        {course.sessionType && (
                          <p className="text-blue-600 text-sm font-semibold">{course.sessionType}</p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 leading-relaxed mb-6 font-light">
                        {course.description}
                      </p>

                      {/* Key Features - Show first 3 */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Key Features</h4>
                        <div className="space-y-2">
                          {course.features.slice(0, 3).map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
                            <div key={idx} className="flex items-center space-x-3 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {course.features.length > 3 && (
                          <p className="text-xs text-blue-600 mt-3 font-semibold">
                            +{course.features.length - 3} more features included
                          </p>
                        )}
                      </div>

                      {/* Batch Info for Live Classes */}
                      {course.batchSize && (
                        <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                          <div className="flex items-center space-x-3">
                            <Users className="h-5 w-5 text-slate-600" />
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Batch Size</p>
                              <p className="text-xs text-slate-600">{course.batchSize}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CTA Buttons */}
                      <div className="flex flex-col space-y-3">
                        <button className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-4 px-6 rounded-2xl font-bold hover:from-slate-800 hover:to-slate-700 transition-all duration-300 flex items-center justify-center group">
                          Enroll Now
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex space-x-3">
                          <button className="flex-1 border-2 border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center text-sm">
                            <Play className="mr-2 h-4 w-4" />
                            Preview
                          </button>
                          <button className="flex-1 border-2 border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center text-sm">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Ask Query
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Recommended Learning Paths</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Follow our structured approach for maximum learning effectiveness based on your goals.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                title: "Complete Beginner Path",
                description: "Perfect for absolute beginners starting their English journey",
                steps: ["Phonics Training", "Basic Grammar", "Spoken English", "Interview Preparation"],
                duration: "4-6 months",
                icon: BookOpen,
                color: "blue"
              },
              {
                title: "Professional Growth Path",
                description: "Designed for career advancement and workplace success",
                steps: ["Professional English", "Business Communication", "Interview Training", "Resume Preparation"],
                duration: "3-4 months",
                icon: Briefcase,
                color: "green"
              },
              {
                title: "IELTS Success Path",
                description: "Comprehensive preparation for IELTS examination",
                steps: ["Spoken English", "Grammar Foundation", "IELTS Preparation", "Mock Tests"],
                duration: "3-4 months",
                icon: Globe,
                color: "violet"
              }
            ].map((path, index) => {
              const IconComponent = path.icon
              return (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 group">
                    <div className={`w-16 h-16 bg-${path.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${path.color}-200 transition-colors`}>
                      <IconComponent className={`h-8 w-8 text-${path.color}-600`} />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{path.title}</h3>
                    <p className="text-slate-600 mb-6 font-light">{path.description}</p>

                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="h-5 w-5 text-slate-500" />
                        <span className="text-sm text-slate-600 font-medium">{path.duration}</span>
                      </div>

                      <div className="space-y-3">
                        {path.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-${path.color}-100 text-${path.color}-600 rounded-full flex items-center justify-center text-sm font-bold`}>
                              {stepIndex + 1}
                            </div>
                            <span className="text-slate-700 font-medium">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className={`w-full bg-${path.color}-600 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-${path.color}-700 transition-colors duration-200`}>
                      Start This Path
                    </button>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>


      {/* Student Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn delay={0.1} direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Student Success Stories</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Real achievements from real students who transformed their communication skills with us.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 p-8 text-center hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-violet-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                  {testimonial.initials}
                </div>

                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-violet-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  {testimonial.achievement}
                </div>

                <p className="text-slate-700 italic mb-6 font-light leading-relaxed">"{testimonial.content}"</p>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.course}</p>
                </div>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Get answers to common questions about our courses and enrollment process.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <StaggerContainer className="space-y-8" staggerDelay={0.1}>
              {[
                {
                  question: "What's the difference between live and recorded courses?",
                  answer: "Live courses offer real-time interaction with instructors and classmates, while recorded courses provide flexibility to learn at your own pace with lifetime access."
                },
                {
                  question: "Do you provide certificates upon completion?",
                  answer: "Yes, all students receive completion certificates that are valuable for career advancement and educational purposes."
                },
                {
                  question: "Can I switch from online to offline classes?",
                  answer: "Yes, we offer flexible learning options. You can discuss switching modes with our support team based on availability."
                },
                {
                  question: "What is the batch size for live classes?",
                  answer: "We maintain small batch sizes (8-25 students) depending on the course to ensure personalized attention and effective learning."
                }
              ].map((faq, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">{faq.question}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{faq.answer}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="space-y-8" staggerDelay={0.15}>
              {[
                {
                  question: "What is your refund policy?",
                  answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course content or teaching quality."
                },
                {
                  question: "How long do I have access to recorded courses?",
                  answer: "Recorded courses come with lifetime access, including any future updates and additional materials added to the course."
                },
                {
                  question: "Are there any prerequisites for enrollment?",
                  answer: "Most courses have no prerequisites. We welcome beginners and provide foundation-level content to help everyone succeed."
                },
                {
                  question: "Do you offer payment plans or installments?",
                  answer: "Yes, we offer flexible payment options and installment plans. Contact our support team to discuss payment arrangements."
                }
              ].map((faq, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 group">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">{faq.question}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{faq.answer}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1} direction="up">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent"> Communication?</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <p className="text-xl lg:text-2xl text-slate-300 mb-12 font-light leading-relaxed">
                Join thousands of students who have already achieved their English language goals with The Open Book. Start your journey today!
              </p>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
                <button className="group bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:from-blue-600 hover:via-violet-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center shadow-xl shadow-blue-500/25">
                  Explore All Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="group border-2 border-slate-500 text-slate-300 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 hover:border-slate-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </button>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-700" staggerDelay={0.15}>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
                  <div className="text-slate-400 font-medium">Students Trained</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-400 mb-2">10+</div>
                  <div className="text-slate-400 font-medium">Course Options</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">4.8★</div>
                  <div className="text-slate-400 font-medium">Average Rating</div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  )
}