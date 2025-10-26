// 'use client'

// import { useState, useEffect } from 'react'
// import { Video, Zap, Briefcase, Mic, GraduationCap, MessageSquare, ChevronRight, Star, Users, Award, BookOpen, MessageCircle, Play, CheckCircle, ArrowRight, Phone, Mail, MapPin, Target, Clock, Globe } from 'lucide-react'

// export default function HomePage() {
//   const [activeTestimonial, setActiveTestimonial] = useState(0)
//   const [stats, setStats] = useState({ students: 2000, courses: 7, experience: 13 })

//   // Animated stats counter
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setStats({ students: 2000, courses: 7, experience: 13 })
//     }, 1000)
//     return () => clearTimeout(timer)
//   }, [])

//   const recordedCourses = [
//     {
//       title: "Phonics Mastery",
//       description: "Build strong foundation in English sounds and pronunciation with our comprehensive phonics program.",
//       icon: Mic,
//       duration: "Self-paced",
//       level: "Beginner",
//       price: "Available in packages"
//     },
//     {
//       title: "Basic Grammar",
//       description: "Master fundamental English grammar rules and structures for confident communication.",
//       icon: BookOpen,
//       duration: "Self-paced",
//       level: "Beginner",
//       price: "Available in packages"
//     },
//     {
//       title: "Professional English",
//       description: "Develop workplace communication skills for professional success and career advancement.",
//       icon: Briefcase,
//       duration: "Self-paced",
//       level: "Intermediate",
//       price: "Available in packages"
//     },
//     {
//       title: "Interview Training",
//       description: "Ace your interviews with proven techniques and practice sessions.",
//       icon: Users,
//       duration: "Self-paced",
//       level: "All Levels",
//       price: "Available in packages"
//     },
//     {
//       title: "Resume Preparation",
//       description: "Create compelling resumes that stand out and land you interviews.",
//       icon: Award,
//       duration: "Self-paced",
//       level: "All Levels",
//       price: "Available in packages"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Priya Nair",
//       role: "Software Engineer",
//       content: "The Open Book transformed my communication skills completely. From being hesitant to speak English to confidently presenting in meetings! The personalized approach made all the difference.",
//       avatar: "PN"
//     },
//     {
//       name: "Arjun Kumar",
//       role: "Student",
//       content: "IELTS coaching here helped me achieve 8.5 band score. The personalized attention and practice sessions were exceptional. Highly recommend for anyone targeting high IELTS scores.",
//       avatar: "AK"
//     },
//     {
//       name: "Sneha Thomas",
//       role: "Parent",
//       content: "My daughter's phonics training at The Open Book laid such a strong foundation. She's now reading confidently at age 6! The systematic approach really works.",
//       avatar: "ST"
//     },
//     {
//       name: "Rahul Menon",
//       role: "Business Owner",
//       content: "Personality development course boosted my confidence tremendously. Now I can lead meetings and presentations with ease. Investment well worth it!",
//       avatar: "RM"
//     },
//     {
//       name: "Anita Krishnan",
//       role: "Teacher",
//       content: "As an educator myself, I appreciate the quality of instruction here. The phonics training program is comprehensive and well-structured.",
//       avatar: "AK"
//     },
//     {
//       name: "Vikram Nair",
//       role: "IT Professional",
//       content: "Spoken English course helped me communicate better with international clients. The practical approach with real-world scenarios was very effective.",
//       avatar: "VN"
//     },
//     {
//       name: "Maya Pillai",
//       role: "College Student",
//       content: "IELTS preparation was thorough and effective. Got the score I needed for my abroad studies. Thank you for the excellent guidance!",
//       avatar: "MP"
//     },
//     {
//       name: "Deepak Kumar",
//       role: "Sales Manager",
//       content: "The soft skills training transformed my professional interactions. I'm now more confident in client meetings and team presentations.",
//       avatar: "DK"
//     }
//   ]

//   // Live Classes Data
//   const liveClasses = [
//     {
//       title: "Spoken English for Adults",
//       description: "Interactive live sessions to improve your spoken English fluency and confidence.",
//       icon: MessageSquare,
//       onlinePrice: "₹1,999",
//       offlinePrice: "₹3,999",
//       duration: "Ongoing",
//       level: "All Levels"
//     },
//     {
//       title: "Spoken English for Kids",
//       description: "Fun and engaging English learning program specially designed for children.",
//       icon: Star,
//       onlinePrice: "₹1,999",
//       offlinePrice: "₹3,999",
//       duration: "Ongoing",
//       level: "Kids"
//     },
//     {
//       title: "Phonics Training",
//       description: "Live interactive phonics sessions for perfect pronunciation and reading skills.",
//       icon: Mic,
//       onlinePrice: "₹1,999",
//       offlinePrice: "₹3,999",
//       duration: "Ongoing",
//       level: "Beginner"
//     },
//     {
//       title: "IELTS Preparation",
//       description: "Comprehensive IELTS training with expert guidance and practice tests.",
//       icon: GraduationCap,
//       onlinePrice: "₹5,999",
//       offlinePrice: "₹7,999",
//       duration: "3 months",
//       level: "Intermediate+"
//     }
//   ]

//   // Learning Journey Steps
//   const learningPath = [
//     {
//       stage: "Foundation",
//       description: "Start with phonics and basic grammar to build a solid foundation in English.",
//       icon: BookOpen,
//       courses: ["Phonics", "Basic Grammar"]
//     },
//     {
//       stage: "Communication",
//       description: "Develop speaking skills through our live interactive classes and practice sessions.",
//       icon: MessageSquare,
//       courses: ["Spoken English", "Live Classes"]
//     },
//     {
//       stage: "Professional",
//       description: "Master workplace English and professional communication for career growth.",
//       icon: Briefcase,
//       courses: ["Professional English", "Business English"]
//     },
//     {
//       stage: "Mastery",
//       description: "Achieve fluency with advanced programs like IELTS preparation and specialized training.",
//       icon: Award,
//       courses: ["IELTS", "Interview Training"]
//     }
//   ];

//   // Intensive Programs
//   const intensivePrograms = [
//     {
//       title: "5-Day Crash Course",
//       description: "Intensive learning in Basic English, Grammar, Workplace English, or Business English.",
//       icon: Zap,
//       onlinePrice: "₹1,999",
//       offlinePrice: "₹1,999",
//       duration: "5 days",
//       level: "All Levels",
//       variants: ["Basic English & Grammar", "English for Workplace", "Business English"]
//     },
//     {
//       title: "Interview Training Workshop",
//       description: "Intensive 2-day workshop focused on interview skills and confidence building.",
//       icon: Target,
//       onlinePrice: "₹1,499",
//       offlinePrice: "₹1,499",
//       duration: "2 days",
//       level: "All Levels"
//     }
//   ]

//   // Membership Plans
//   const memberships = [
//     {
//       name: "Starter",
//       price: "₹1,999",
//       period: "/month",
//       description: "Perfect for beginners starting their English learning journey",
//       features: [
//         "Access to recorded courses",
//         "Basic grammar modules",
//         "Phonics training",
//         "Community support",
//         "Progress tracking"
//       ],
//       popular: false,
//       cta: "Start Learning"
//     },
//     {
//       name: "Professional",
//       price: "₹3,999",
//       period: "/month",
//       description: "Comprehensive package for serious learners",
//       features: [
//         "All Starter features",
//         "Live spoken English classes",
//         "Professional English modules",
//         "Interview training",
//         "Resume preparation",
//         "1-on-1 mentoring sessions",
//         "Priority support"
//       ],
//       popular: true,
//       cta: "Go Professional"
//     },
//     {
//       name: "Master",
//       price: "₹7,999",
//       period: "/month",
//       description: "Ultimate package for advanced learners and test preparation",
//       features: [
//         "All Professional features",
//         "IELTS preparation course",
//         "Unlimited practice sessions",
//         "Mock interviews",
//         "Personalized study plan",
//         "Expert feedback",
//         "Offline classes access",
//         "Certification support"
//       ],
//       popular: false,
//       cta: "Master English"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
//       {/* Hero Section */}
//       <section id="home" className="relative bg-white">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/50"></div>
//         <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
//                 <Award className="w-4 h-4 mr-2" />
//                 13+ Years of Excellence in Education
//               </div>
//               <div className="space-y-6">
//                 <h1 className="text-5xl lg:text-7xl font-bold leading-[1] tracking-tight">
//                   <span className="text-slate-900">Unlock Your</span>{' '}
//                   <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
//                     Confidence in English
//                   </span>
//                 </h1>
//                 <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
//                   Master English communication, boost confidence, and unlock global opportunities with expert-led courses in Kozhikode, Kerala.
//                 </p>
//               </div>
//               {/* <div className="space-y-8">
//                 <div className="relative">
//                   <div className="absolute -left-6 top-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-violet-500"></div>
//                   <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] tracking-tight">
//                     <span className="block text-slate-200 text-4xl lg:text-5xl font-light mb-2">Master</span>
//                     <span className="block text-slate-900">ENGLISH</span>
//                     <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent">FLUENTLY</span>
//                   </h1>
//                 </div>

//                 <div className="ml-8 max-w-lg">
//                   <p className="text-xl text-slate-600 leading-relaxed font-light">
//                     Transform your communication skills with our revolutionary approach to English mastery in
//                     <span className="font-semibold text-blue-600"> Kozhikode</span>.
//                   </p>
//                 </div>
//               </div> */}

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-8 py-8 border-t border-slate-200">
//                 <div>
//                   <div className="text-3xl font-bold text-slate-900">{stats.students}+</div>
//                   <div className="text-sm text-slate-600 font-medium">Students</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-slate-900">{stats.experience}+</div>
//                   <div className="text-sm text-slate-600 font-medium">Years</div>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-slate-900">{stats.courses}+</div>
//                   <div className="text-sm text-slate-600 font-medium">Courses</div>
//                 </div>
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a href="https://tagmango.com/creator/membership/free" className="group inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition-all duration-200">
//                   Start Learning Free
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a href="#courses" className="inline-flex items-center justify-center border border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 transition-all duration-200">
//                   View Courses
//                 </a>
//               </div>
//             </div>

//             {/* Hero Visual */}
//             {/* <div className="relative lg:pl-8">
//               <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-slate-200/50">
//                 <div className="space-y-6">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//                     </div>
//                     <div className="text-sm text-slate-500">Live Session</div>
//                   </div>

//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-semibold">
//                         M
//                       </div>
//                       <div>
//                         <div className="font-semibold text-slate-900">Mishahira</div>
//                         <div className="text-sm text-slate-500">English Instructor</div>
//                       </div>
//                     </div>

//                     <div className="bg-slate-50 rounded-2xl p-4 space-y-3">
//                       <div className="text-sm text-slate-600">"Let's practice pronunciation together..."</div>
//                       <div className="flex items-center space-x-2">
//                         <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                         <span className="text-xs text-slate-500">12 students online</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>


//               <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-violet-400 rounded-3xl opacity-20 rotate-12 animate-pulse"></div>
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-violet-400 to-pink-400 rounded-3xl opacity-10 -rotate-12 animate-pulse delay-1000"></div>
//             </div> */}
//             {/* Hero Visual */}
//             <div className="relative lg:pl-8">
//               {/* Main Visual Container */}
//               <div className="relative">
//                 {/* Primary Card - Language Learning Dashboard */}
//                 <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 p-8 border border-slate-200/50 relative z-10">
//                   <div className="space-y-8">
//                     {/* Header with Progress Ring */}
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h3 className="text-2xl font-bold text-slate-900">English Mastery</h3>
//                         <p className="text-slate-600 text-sm mt-1">Your Learning Journey</p>
//                       </div>
//                       <div className="relative w-16 h-16">
//                         <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
//                           <path
//                             d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                             fill="none"
//                             stroke="#e5e7eb"
//                             strokeWidth="2"
//                           />
//                           <path
//                             d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
//                             fill="none"
//                             stroke="#3b82f6"
//                             strokeWidth="2"
//                             strokeDasharray="85, 100"
//                             strokeLinecap="round"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-sm font-bold text-slate-900">85%</span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Skills Grid */}
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-4 border border-blue-200/50">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
//                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1.586l-4 4z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <div className="font-semibold text-slate-900 text-sm">Speaking</div>
//                             <div className="text-xs text-slate-600">Advanced</div>
//                           </div>
//                         </div>
//                         <div className="w-full bg-blue-200/50 rounded-full h-2">
//                           <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
//                         </div>
//                       </div>

//                       <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-2xl p-4 border border-violet-200/50">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center">
//                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//                             </svg>
//                           </div>
//                           <div>
//                             <div className="font-semibold text-slate-900 text-sm">Grammar</div>
//                             <div className="text-xs text-slate-600">Expert</div>
//                           </div>
//                         </div>
//                         <div className="w-full bg-violet-200/50 rounded-full h-2">
//                           <div className="bg-violet-500 h-2 rounded-full" style={{ width: '95%' }}></div>
//                         </div>
//                       </div>

//                       <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-4 border border-green-200/50">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
//                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <div className="font-semibold text-slate-900 text-sm">Writing</div>
//                             <div className="text-xs text-slate-600">Intermediate</div>
//                           </div>
//                         </div>
//                         <div className="w-full bg-green-200/50 rounded-full h-2">
//                           <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
//                         </div>
//                       </div>

//                       <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-4 border border-orange-200/50">
//                         <div className="flex items-center space-x-3 mb-3">
//                           <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
//                             <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <div className="font-semibold text-slate-900 text-sm">Listening</div>
//                             <div className="text-xs text-slate-600">Advanced</div>
//                           </div>
//                         </div>
//                         <div className="w-full bg-orange-200/50 rounded-full h-2">
//                           <div className="bg-orange-500 h-2 rounded-full" style={{ width: '88%' }}></div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Achievement Badge */}
//                     <div className="bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl p-4 text-white relative overflow-hidden">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20"></div>
//                       <div className="relative flex items-center justify-between">
//                         <div>
//                           <div className="font-semibold text-sm">Next Milestone</div>
//                           <div className="text-xs opacity-90">Complete 5 more lessons</div>
//                         </div>
//                         <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Floating Secondary Card */}
//                 <div className="absolute -top-4 -right-4 w-48 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 border border-slate-200/50 z-20">
//                   <div className="flex items-center space-x-3 mb-3">
//                     <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
//                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="text-sm font-semibold text-slate-900">Lesson Complete!</div>
//                       <div className="text-xs text-slate-600">+50 XP earned</div>
//                     </div>
//                   </div>
//                   <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-2 text-center">
//                     <div className="text-xs text-slate-600">Pronunciation Practice</div>
//                     <div className="text-lg font-bold text-slate-900">Perfect Score!</div>
//                   </div>
//                 </div>

//                 {/* Floating Accent Elements */}
//                 <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/30 to-violet-400/30 rounded-2xl rotate-12 blur-sm"></div>
//                 <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-violet-400/20 to-pink-400/20 rounded-3xl -rotate-12 blur-sm"></div>
//                 <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500/40 to-violet-500/40 rounded-xl rotate-45 blur-sm"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
//         {/* Background decorations */}
//         <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-violet-600/8 to-blue-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//               <Video className="h-4 w-4" />
//               Self-Paced Learning
//             </div>
//             <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
//               Recorded Courses
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
//               Master English at your own pace with our comprehensive library of recorded courses designed by expert instructors.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {recordedCourses.map((course, index) => {
//               const IconComponent = course.icon;
//               return (
//                 <div key={index} className="group relative">
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                   <div className="relative bg-white rounded-3xl border border-slate-200/60 hover:border-slate-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
//                     <div className="p-8">
//                       <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                         <IconComponent className="h-8 w-8 text-blue-600" />
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
//                         {course.title}
//                       </h3>
//                       <p className="text-slate-600 mb-6 text-sm leading-relaxed">
//                         {course.description}
//                       </p>

//                       <div className="space-y-3 mb-8">
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-slate-500 flex items-center gap-2">
//                             <Clock className="h-4 w-4" />
//                             Duration
//                           </span>
//                           <span className="font-semibold text-slate-900">{course.duration}</span>
//                         </div>
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-slate-500 flex items-center gap-2">
//                             <Target className="h-4 w-4" />
//                             Level
//                           </span>
//                           <span className="font-semibold text-slate-900">{course.level}</span>
//                         </div>
//                       </div>

//                       <button className="w-full bg-gradient-to-r from-slate-900 to-blue-900 text-white py-4 px-6 rounded-2xl font-semibold hover:from-slate-800 hover:to-blue-800 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
//                         Access Course
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Live Classes Section */}
//       <section className="relative py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-violet-900 overflow-hidden">
//         {/* Background elements */}
//         <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
//         <div className="absolute bottom-20 right-20 w-64 h-64 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
//               <Users className="h-4 w-4" />
//               Interactive Learning
//             </div>
//             <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//               Live Classes & Programs
//             </h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
//               Join our interactive live sessions and intensive programs for accelerated learning with expert instructors.
//             </p>
//           </div>

//           {/* Live Classes Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//             {liveClasses.map((course, index) => {
//               const IconComponent = course.icon;
//               return (
//                 <div key={index} className="group relative">
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//                   <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 p-6">
//                     <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                       <IconComponent className="h-6 w-6 text-blue-300" />
//                     </div>
//                     <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
//                     <p className="text-blue-100 text-sm mb-4 leading-relaxed">{course.description}</p>

//                     <div className="space-y-2 mb-4">
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-blue-200 flex items-center gap-1">
//                           <Video className="h-3 w-3" />
//                           Online
//                         </span>
//                         <span className="font-semibold text-white">{course.onlinePrice}</span>
//                       </div>
//                       <div className="flex justify-between items-center text-sm">
//                         <span className="text-blue-200 flex items-center gap-1">
//                           <MapPin className="h-3 w-3" />
//                           Offline
//                         </span>
//                         <span className="font-semibold text-white">{course.offlinePrice}</span>
//                       </div>
//                     </div>

//                     <button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-400 hover:to-violet-400 transition-all duration-200 transform hover:scale-105">
//                       Join Class
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Intensive Programs */}
//           <div className="text-center mb-12">
//             <h3 className="text-3xl font-bold text-white mb-4">Intensive Programs</h3>
//             <p className="text-blue-100 max-w-2xl mx-auto">Fast-track your learning with our specialized intensive courses and workshops.</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {intensivePrograms.map((program, index) => {
//               const IconComponent = program.icon;
//               return (
//                 <div key={index} className="group relative">
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
//                   <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 p-8">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//                         <IconComponent className="h-8 w-8 text-yellow-300" />
//                       </div>
//                       <div>
//                         <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
//                         <span className="text-yellow-300 font-semibold">{program.duration}</span>
//                       </div>
//                     </div>

//                     <p className="text-blue-100 mb-6 leading-relaxed">{program.description}</p>

//                     {program.variants && (
//                       <div className="mb-6">
//                         <h4 className="text-white font-semibold mb-3">Available Variants:</h4>
//                         <div className="space-y-2">
//                           {program.variants.map((variant, idx) => (
//                             <div key={idx} className="flex items-center gap-2 text-blue-200 text-sm">
//                               <CheckCircle className="h-4 w-4 text-green-400" />
//                               {variant}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}

//                     <div className="flex gap-4 mb-6">
//                       <div className="flex-1 text-center">
//                         <div className="text-yellow-300 font-semibold">Online</div>
//                         <div className="text-white font-bold text-xl">{program.onlinePrice}</div>
//                       </div>
//                       <div className="flex-1 text-center">
//                         <div className="text-yellow-300 font-semibold">Offline</div>
//                         <div className="text-white font-bold text-xl">{program.offlinePrice}</div>
//                       </div>
//                     </div>

//                     <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-6 rounded-2xl font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-200 transform hover:scale-105">
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Learning Journey Section */}
//       <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-violet-50/30 overflow-hidden">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-600/8 to-blue-600/8 rounded-full blur-3xl animate-pulse delay-500"></div>
//         <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-blue-600/8 to-violet-600/8 rounded-full blur-3xl animate-pulse delay-1500"></div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//               <Target className="h-4 w-4" />
//               Structured Learning
//             </div>
//             <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-6">
//               Your Learning Journey
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
//               Follow our carefully designed learning path from foundation to mastery, with clear milestones and achievements.
//             </p>
//           </div>

//           <div className="relative">
//             <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-8">
//               {learningPath.map((step, index) => {
//                 const IconComponent = step.icon;
//                 return (
//                   <div key={index} className="relative flex-1 max-w-sm group">
//                     <div className="relative">
//                       <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                       <div className="relative bg-white rounded-3xl shadow-lg shadow-slate-900/10 border border-slate-200/60 p-8 text-center hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
//                         {/* Step number */}
//                         <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
//                           {index + 1}
//                         </div>

//                         <div className="w-20 h-20 bg-gradient-to-br from-violet-50 to-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                           <IconComponent className="h-10 w-10 text-violet-600" />
//                         </div>

//                         <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-900 transition-colors">
//                           {step.stage}
//                         </h3>
//                         <p className="text-slate-600 font-light mb-6 leading-relaxed">
//                           {step.description}
//                         </p>

//                         <div className="space-y-2">
//                           <div className="text-sm font-semibold text-violet-700 mb-2">Key Courses:</div>
//                           {step.courses.map((course, courseIndex) => (
//                             <div key={courseIndex} className="inline-block bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2">
//                               {course}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Connection line */}
//                     {index < learningPath.length - 1 && (
//                       <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-slate-300">
//                         <div className="w-8 h-0.5 bg-gradient-to-r from-violet-300 to-blue-300"></div>
//                         <div className="w-0 h-0 border-l-4 border-l-blue-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-1"></div>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="relative py-32 bg-white overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 2px 2px, #64748b 1px, transparent 0)`,
//             backgroundSize: '40px 40px'
//           }}></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">We have worked with</h2>
//             <p className="text-2xl lg:text-3xl text-slate-600 font-light">hundreds of amazing students</p>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="space-y-4">
//                   <p className="text-slate-600 font-light leading-relaxed text-sm">
//                     "{testimonial.content}"
//                   </p>

//                   <div className="flex items-center space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center font-semibold text-white text-sm">
//                       {testimonial.avatar}
//                     </div>
//                     <div>
//                       <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
//                       <p className="text-slate-600 text-xs">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Floating background elements */}
//         <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </section>

//       {/* Membership Plans Section */}
//       <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900 overflow-hidden">
//         <div className="absolute top-40 right-16 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
//         <div className="absolute bottom-40 left-16 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
//               <Award className="h-4 w-4" />
//               Flexible Plans
//             </div>
//             <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//               Choose Your Plan
//             </h2>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
//               Select the perfect membership plan that fits your learning goals and budget. All plans include our quality guarantee.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {memberships.map((plan, index) => (
//               <div key={index} className={`relative group ${plan.popular ? 'scale-105' : ''}`}>
//                 <div className={`absolute -inset-0.5 bg-gradient-to-r rounded-3xl transition-opacity duration-300 ${
//                   plan.popular 
//                     ? 'from-yellow-400 to-orange-400 opacity-30' 
//                     : 'from-blue-400 to-violet-400 opacity-0 group-hover:opacity-20'
//                 }`}></div>

//                 <div className={`relative bg-white/10 backdrop-blur-lg rounded-3xl border p-8 transition-all duration-500 ${
//                   plan.popular
//                     ? 'border-yellow-400/50 bg-white/15'
//                     : 'border-white/20 hover:border-white/40 hover:bg-white/15'
//                 }`}>
//                   {plan.popular && (
//                     <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                       <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
//                         ⭐ Most Popular
//                       </span>
//                     </div>
//                   )}

//                   <div className="text-center mb-8">
//                     <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//                     <p className="text-blue-100 text-sm mb-6 leading-relaxed">{plan.description}</p>
//                     <div className="mb-2">
//                       <span className="text-5xl font-bold text-white">{plan.price}</span>
//                       {plan.period && <span className="text-blue-200 font-light text-lg">{plan.period}</span>}
//                     </div>
//                   </div>

//                   <ul className="space-y-4 mb-8">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start space-x-3">
//                         <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
//                         <span className="text-blue-100 font-light text-sm leading-relaxed">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <button className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 hover:from-yellow-300 hover:to-orange-300 shadow-xl'
//                       : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40'
//                   }`}>
//                     {plan.cta}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-blue-200 text-sm">
//               All plans include 7-day free trial • Cancel anytime • 30-day money-back guarantee
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Banner */}
//       <section className="py-24 bg-slate-900">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
//           <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
//             Join hundreds of students who have already unlocked their potential with The Open Book.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-100 transition-all duration-200 group">
//               Start Free Today
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a href="#contact" className="inline-flex items-center justify-center border border-slate-600 text-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

'use client'

import { useState, useEffect } from 'react'
import { Video, Zap, Briefcase, Mic, GraduationCap, MessageSquare, ChevronRight, Star, Users, Award, BookOpen, MessageCircle, Play, CheckCircle, ArrowRight, Phone, Mail, MapPin, Target, Clock, Globe } from 'lucide-react'
import { LogoCloud } from '@/components/ui/logo-cloud'
import { cn } from '@/lib/utils'

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [stats, setStats] = useState({ students: 5000, courses: 10, experience: 13 })

  // Animated stats counter
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ students: 5000, courses: 10, experience: 13 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const recordedCourses = [
    {
      title: "Phonics Mastery",
      description: "Build strong foundation in English sounds and pronunciation with our comprehensive phonics program.",
      icon: Mic,
      duration: "Self-paced",
      level: "Beginner",
      price: "Available in packages"
    },
    {
      title: "Basic Grammar",
      description: "Master fundamental English grammar rules and structures for confident communication.",
      icon: BookOpen,
      duration: "Self-paced",
      level: "Beginner",
      price: "Available in packages"
    },
    {
      title: "Professional English",
      description: "Develop workplace communication skills for professional success and career advancement.",
      icon: Briefcase,
      duration: "Self-paced",
      level: "Intermediate",
      price: "Available in packages"
    },
    {
      title: "Interview Training",
      description: "Ace your interviews with proven techniques and practice sessions.",
      icon: Users,
      duration: "Self-paced",
      level: "All Levels",
      price: "Available in packages"
    },
    {
      title: "Resume Preparation",
      description: "Create compelling resumes that stand out and land you interviews.",
      icon: Award,
      duration: "Self-paced",
      level: "All Levels",
      price: "Available in packages"
    }
  ];

  const testimonials = [
    {
      name: "Noufal Nambrath",
      role: "Sous Chef",
      location: "Five Palm Jumeirah, Dubai",
      content: "I had the privilege of being taught by an outstanding English teacher whose classes were always engaging and enlightening. Ms. Mishahira's dedication to each student's progress and her ability to explain complex concepts with clarity helped strengthen my language skills. She focuses on pronunciation, grammar, and real-life conversation skills, making every class practical and interactive. Her lessons and personalized feedback made learning an enjoyable and rewarding experience.",
      avatar: "NN",
      featured: true
    },
    {
      name: "Najiya Parveen T",
      role: "Student",
      location: "KMCT CEW",
      content: "The class of Mishahira ma'am at KMCT CEW provided valuable insights and a deeper understanding of the subject. The curriculum was well-structured, and the teaching approach was engaging, fostering a love for literature. A truly enriching experience. Personally ma'am helped me to improve my vocabulary which is very essential for my future.",
      avatar: "NP"
    },
    {
      name: "Rafa",
      role: "Student",
      location: "Hospital and Business Administration, Mastered",
      content: "Your classes are very engaging and easy to understand. The way you explain grammar and vocabulary makes learning simple and enjoyable. Thank you for making English interesting and motivating us to improve.",
      avatar: "RF"
    },
    {
      name: "Shaima Roshin",
      role: "Student",
      location: "Global Education Campus",
      content: "Mishra ma'am, your engaging lessons, supportive nature and genuine passion for teaching English truly ignites our love for learning and helps us grow both academically and personally.",
      avatar: "SR"
    },
    {
      name: "Priya Nair",
      role: "Software Engineer",
      location: "Tech Professional",
      content: "The Open Book transformed my communication skills completely. From being hesitant to speak English to confidently presenting in meetings! The personalized approach made all the difference.",
      avatar: "PN"
    },
    {
      name: "Arjun Kumar",
      role: "IELTS Achiever",
      location: "Band Score 8.5",
      content: "IELTS coaching here helped me achieve 8.5 band score. The personalized attention and practice sessions were exceptional. Highly recommend for anyone targeting high IELTS scores.",
      avatar: "AK"
    }
  ]

  // Live Classes Data
  const liveClasses = [
    {
      title: "Spoken English for Adults",
      description: "Interactive live sessions to improve your spoken English fluency and confidence.",
      icon: MessageSquare,
      onlinePrice: "₹1,999",
      offlinePrice: "₹3,999",
      duration: "Ongoing",
      level: "All Levels"
    },
    {
      title: "Spoken English for Kids",
      description: "Fun and engaging English learning program specially designed for children.",
      icon: Star,
      onlinePrice: "₹1,999",
      offlinePrice: "₹3,999",
      duration: "Ongoing",
      level: "Kids"
    },
    {
      title: "Phonics Training",
      description: "Live interactive phonics sessions for perfect pronunciation and reading skills.",
      icon: Mic,
      onlinePrice: "₹1,999",
      offlinePrice: "₹3,999",
      duration: "Ongoing",
      level: "Beginner"
    },
    {
      title: "IELTS Preparation",
      description: "Comprehensive IELTS training with expert guidance and practice tests.",
      icon: GraduationCap,
      onlinePrice: "₹5,999",
      offlinePrice: "₹7,999",
      duration: "3 months",
      level: "Intermediate+"
    }
  ]

  // Learning Journey Steps
  const learningPath = [
    {
      stage: "Foundation",
      description: "Start with phonics and basic grammar to build a solid foundation in English.",
      icon: BookOpen,
      courses: ["Phonics", "Basic Grammar"]
    },
    {
      stage: "Communication",
      description: "Develop speaking skills through our live interactive classes and practice sessions.",
      icon: MessageSquare,
      courses: ["Spoken English", "Live Classes"]
    },
    {
      stage: "Professional",
      description: "Master workplace English and professional communication for career growth.",
      icon: Briefcase,
      courses: ["Professional English", "Business English"]
    },
    {
      stage: "Mastery",
      description: "Achieve fluency with advanced programs like IELTS preparation and specialized training.",
      icon: Award,
      courses: ["IELTS", "Interview Training"]
    }
  ];

  // Associated Institutions Logos
  const associatedLogos = [
    {
      src: "/img/associated/AEC.webp",
      alt: "AWH Engineering College, Kuttikatoor, Calicut",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/kmct.webp",
      alt: "KMCT CEW, Calicut",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/GEC.webp",
      alt: "Global Education Campus, Calicut",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/Horizone.webp",
      alt: "Horizon Institute of Accounting",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/Academiz.webp",
      alt: "Academix, Calicut",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/DLINE.webp",
      alt: "DLINE Institute of Logistics",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/FACE.webp",
      alt: "FACE Institute of Hotel Management",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/Weber.webp",
      alt: "Weber Institute",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/VIMS.webp",
      alt: "VIMS Aviation",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/MASTERED.webp",
      alt: "Mastered Skill Academy",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/pure-english.webp",
      alt: "Pure English",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/speak-easy.webp",
      alt: "SpeakEazy",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/Ajinorah.webp",
      alt: "Ajinorah",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/EDFIL.webp",
      alt: "Edfil English",
      width: 180,
      height: 80,
    },
    {
      src: "/img/associated/ANGLE.webp",
      alt: "Angle Individual Tuition",
      width: 180,
      height: 80,
    },
  ];

  // Intensive Programs
  const intensivePrograms = [
    {
      title: "5-Day Crash Course",
      description: "Intensive learning in Basic English, Grammar, Workplace English, or Business English.",
      icon: Zap,
      onlinePrice: "₹1,999",
      offlinePrice: "₹1,999",
      duration: "5 days",
      level: "All Levels",
      variants: ["Basic English & Grammar", "English for Workplace", "Business English"]
    },
    {
      title: "Interview Training Workshop",
      description: "Intensive 2-day workshop focused on interview skills and confidence building.",
      icon: Target,
      onlinePrice: "₹1,499",
      offlinePrice: "₹1,499",
      duration: "2 days",
      level: "All Levels"
    }
  ]

  // Membership Plans
  const memberships = [
    {
      name: "Starter",
      price: "₹9999",
      period: "/month",
      description: "Perfect for beginners starting their English learning journey",
      features: [
        "Access to recorded courses",
        "Basic grammar modules",
        "Phonics training",
        "Community support",
        "Progress tracking"
      ],
      popular: false,
      cta: "Start Learning"
    },
    {
      name: "Professional",
      price: "₹19,999",
      period: "/month",
      description: "Comprehensive package for serious learners",
      features: [
        "All Starter features",
        "Live spoken English classes",
        "Professional English modules",
        "Interview training",
        "Resume preparation",
        "1-on-1 mentoring sessions",
        "Priority support"
      ],
      popular: true,
      cta: "Go Professional"
    },
    {
      name: "Premium",
      price: "₹24,999",
      period: "/month",
      description: "Ultimate package for advanced learners and test preparation",
      features: [
        "All Professional features",
        "IELTS preparation course",
        "Unlimited practice sessions",
        "Mock interviews",
        "Personalized study plan",
        "Expert feedback",
        "Offline classes access",
        "Certification support",
        "Lifetime access to recorded sessions"
      ],
      popular: false,
      cta: "Master English"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter',sans-serif] text-slate-800">
      {/* Hero Section */}
      <section id="home" className="relative bg-white overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-violet-50"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-violet-100/40 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 py-3 rounded-full text-sm font-semibold border border-blue-100 shadow-sm">
                <Award className="w-4 h-4 mr-2" />
                13+ Years of Excellence in Education
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                  <span className="text-slate-900">Unlock Your</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    Confidence in English
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl">
                  Master English communication, boost confidence, and unlock global opportunities with expert-led courses in Kozhikode, Kerala.
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-slate-200">
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stats.students}+</div>
                  <div className="text-sm text-slate-600 font-medium">Happy Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stats.experience}+</div>
                  <div className="text-sm text-slate-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{stats.courses}+</div>
                  <div className="text-sm text-slate-600 font-medium">Expert Courses</div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://tagmango.com/creator/membership/free" className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#courses" className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300">
                  View Courses
                </a>
              </div>
            </div>

            {/* Enhanced Hero Visual */}
            <div className="relative lg:pl-8">
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8 border border-white/50 relative z-10">
                  <div className="space-y-8">
                    {/* Header with Progress Ring */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">English Mastery</h3>
                        <p className="text-slate-600 text-sm mt-1">Your Learning Journey</p>
                      </div>
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                            fill="none"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                          />
                          <path
                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                            fill="none"
                            stroke="url(#progress-gradient)"
                            strokeWidth="2"
                            strokeDasharray="85, 100"
                            strokeLinecap="round"
                          />
                          <defs>
                            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#6366f1" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-slate-900">85%</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Skills Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-sm">
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Speaking</div>
                            <div className="text-xs text-slate-600">Advanced</div>
                          </div>
                        </div>
                        <div className="w-full bg-blue-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-4 border border-violet-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Grammar</div>
                            <div className="text-xs text-slate-600">Expert</div>
                          </div>
                        </div>
                        <div className="w-full bg-violet-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-violet-500 to-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-4 border border-emerald-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Writing</div>
                            <div className="text-xs text-slate-600">Intermediate</div>
                          </div>
                        </div>
                        <div className="w-full bg-emerald-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-sm">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 text-sm">Listening</div>
                            <div className="text-xs text-slate-600">Advanced</div>
                          </div>
                        </div>
                        <div className="w-full bg-orange-200/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-indigo-700/20"></div>
                      <div className="relative flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">Next Milestone</div>
                          <div className="text-xs opacity-90">Complete 5 more lessons</div>
                        </div>
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Star className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Floating Card */}
                <div className="absolute -top-4 -right-4 w-48 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-emerald-500/20 p-4 border border-white/60 z-20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg flex items-center justify-center shadow-sm">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Lesson Complete!</div>
                      <div className="text-xs text-slate-600">+50 XP earned</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2 text-center border border-emerald-100">
                    <div className="text-xs text-slate-600">Pronunciation Practice</div>
                    <div className="text-lg font-bold text-slate-900">Perfect Score!</div>
                  </div>
                </div>

                {/* Refined Floating Elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl rotate-12 blur-sm animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-violet-400/15 to-purple-400/15 rounded-3xl -rotate-12 blur-sm animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500/25 to-indigo-500/25 rounded-xl rotate-45 blur-sm animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 overflow-hidden">
        {/* Refined Background */}
        <div className="absolute top-32 right-32 w-72 h-72 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-indigo-500/6 to-violet-500/6 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 py-3 rounded-full text-sm font-semibold border border-blue-100 shadow-sm mb-6">
              <Video className="h-4 w-4" />
              Self-Paced Learning
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
              Recorded Courses
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Master English at your own pace with our comprehensive library of recorded courses designed by expert instructors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recordedCourses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-100">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        {course.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Duration
                          </span>
                          <span className="font-semibold text-slate-900">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 flex items-center gap-2">
                            <Target className="h-4 w-4" />
                            Level
                          </span>
                          <span className="font-semibold text-slate-900">{course.level}</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl">
                        Access Course
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Live Classes Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 px-5 py-3 rounded-full text-sm font-semibold border border-white/20 mb-6">
              <Users className="h-4 w-4" />
              Interactive Learning
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Live Classes & Programs
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Join our interactive live sessions and intensive programs for accelerated learning with expert instructors.
            </p>
          </div>

          {/* Live Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {liveClasses.map((course, index) => {
              const IconComponent = course.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10">
                      <IconComponent className="h-6 w-6 text-blue-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-blue-100 text-sm mb-4 leading-relaxed">{course.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-blue-200 flex items-center gap-1">
                          <Video className="h-3 w-3" />
                          Online
                        </span>
                        <span className="font-semibold text-white">{course.onlinePrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-blue-200 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Offline
                        </span>
                        <span className="font-semibold text-white">{course.offlinePrice}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-400 hover:to-indigo-400 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      Join Class
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Intensive Programs */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Intensive Programs</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">Fast-track your learning with our specialized intensive courses and workshops.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {intensivePrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-400/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
                        <IconComponent className="h-8 w-8 text-amber-300" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                        <span className="text-amber-300 font-semibold">{program.duration}</span>
                      </div>
                    </div>

                    <p className="text-blue-100 mb-6 leading-relaxed">{program.description}</p>

                    {program.variants && (
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Available Variants:</h4>
                        <div className="space-y-2">
                          {program.variants.map((variant, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-blue-200 text-sm">
                              <CheckCircle className="h-4 w-4 text-emerald-400" />
                              {variant}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 mb-6">
                      <div className="flex-1 text-center">
                        <div className="text-amber-300 font-semibold">Online</div>
                        <div className="text-white font-bold text-xl">{program.onlinePrice}</div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="text-amber-300 font-semibold">Offline</div>
                        <div className="text-white font-bold text-xl">{program.offlinePrice}</div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 px-6 rounded-2xl font-semibold hover:from-amber-400 hover:to-orange-400 transition-all duration-200 transform hover:scale-105 shadow-lg">
                      Enroll Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Learning Journey Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-violet-50/40 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-blue-500/8 to-indigo-500/8 rounded-full blur-3xl animate-pulse delay-1500"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 px-5 py-3 rounded-full text-sm font-semibold border border-violet-100 shadow-sm mb-6">
              <Target className="h-4 w-4" />
              Structured Learning
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-violet-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Your Learning Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Follow our carefully designed learning path from foundation to mastery, with clear milestones and achievements.
            </p>
          </div>

          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-8">
              {learningPath.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative flex-1 max-w-sm group">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg shadow-slate-900/10 border border-slate-200/80 p-8 text-center hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500">
                        {/* Step number */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                          {index + 1}
                        </div>

                        <div className="w-20 h-20 bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-violet-100">
                          <IconComponent className="h-10 w-10 text-violet-600" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-violet-900 transition-colors">
                          {step.stage}
                        </h3>
                        <p className="text-slate-600 font-light mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-violet-700 mb-2">Key Courses:</div>
                          {step.courses.map((course, courseIndex) => (
                            <div key={courseIndex} className="inline-block bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 border border-violet-200">
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Connection line */}
                    {index < learningPath.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-slate-300 z-10">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-violet-300 to-purple-300"></div>
                        <div className="w-0 h-0 border-l-4 border-l-purple-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-1"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Associated Institutions Section */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className={cn(
            "-z-10 -top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full",
            "bg-[radial-gradient(ellipse_at_center,#64748b15,transparent_50%)]",
            "blur-[30px]"
          )}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900">
              <span className="font-bold">Associated with</span>
            </h2>
          </div>

          <div className="mx-auto my-6 md:my-8 h-px max-w-xs md:max-w-md bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

          <LogoCloud logos={associatedLogos} />

          <div className="mt-6 md:mt-8 h-px bg-slate-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </div>

        {/* Floating background elements */}
        <div className="hidden md:block absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden md:block absolute bottom-20 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Enhanced Membership Plans Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute top-40 right-16 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-16 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 px-5 py-3 rounded-full text-sm font-semibold border border-white/20 mb-6">
              <Award className="h-4 w-4" />
              Flexible Plans
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
              Select the perfect membership plan that fits your learning goals and budget. All plans include our quality guarantee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
            {memberships.map((plan, index) => (
              <div key={index} className={`relative group ${plan.popular ? 'scale-105' : ''}`}>
                <div className={`absolute -inset-0.5 bg-gradient-to-r rounded-3xl transition-opacity duration-300 ${plan.popular
                    ? 'from-amber-400 to-orange-400 opacity-30'
                    : 'from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20'
                  }`}></div>

                <div className={`relative bg-white/10 backdrop-blur-lg rounded-3xl border p-8 transition-all duration-500 ${plan.popular
                    ? 'border-amber-400/50 bg-white/15 h-full'
                    : 'border-white/20 hover:border-white/40 hover:bg-white/15 h-full'
                  }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-blue-100 text-sm mb-6 leading-relaxed">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      {plan.period && <span className="text-blue-200 font-light text-lg">{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-blue-100 font-light text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${plan.popular
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-slate-900 hover:from-amber-300 hover:to-orange-300 shadow-xl'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-sm'
                    }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-200 text-sm">
              All plans include 7-day free trial • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Banner */}
      {/* <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light">
            Join hundreds of students who have already unlocked their potential with The Open Book.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://tagmango.com/creator/membership/free" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-400 hover:to-indigo-400 transition-all duration-200 group shadow-xl">
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-slate-800 hover:border-slate-500 transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </section> */}

    </div>
  )
}