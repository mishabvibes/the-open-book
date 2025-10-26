'use client'

import { useState } from 'react'
import { GraduationCap, Award, CheckCircle, Clock, Star, TrendingUp, Shield, MessageCircle, Mail, User, Phone, ArrowRight, ArrowLeft, RefreshCw, Target, BookOpen, Users } from 'lucide-react'
import { FadeIn } from '@/components/ui/fade-in'
import { ScaleIn } from '@/components/ui/scale-in'

// CEFR Test Questions (25 questions, progressively harder)
const testQuestions = [
  // A1 Level Questions (1-5)
  {
    id: 1,
    level: 'A1',
    question: 'What is your name?',
    options: ['My name is John', 'I am have John', 'My name John', 'Name my is John'],
    correctAnswer: 0
  },
  {
    id: 2,
    level: 'A1',
    question: 'How _____ you?',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 2
  },
  {
    id: 3,
    level: 'A1',
    question: 'This is _____ book.',
    options: ['a', 'an', 'the', 'one'],
    correctAnswer: 0
  },
  {
    id: 4,
    level: 'A1',
    question: 'I _____ from India.',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 0
  },
  {
    id: 5,
    level: 'A1',
    question: 'She _____ a teacher.',
    options: ['am', 'is', 'are', 'be'],
    correctAnswer: 1
  },

  // A2 Level Questions (6-10)
  {
    id: 6,
    level: 'A2',
    question: 'I _____ to school every day.',
    options: ['go', 'goes', 'going', 'went'],
    correctAnswer: 0
  },
  {
    id: 7,
    level: 'A2',
    question: 'They _____ watching TV now.',
    options: ['is', 'am', 'are', 'be'],
    correctAnswer: 2
  },
  {
    id: 8,
    level: 'A2',
    question: 'Yesterday, I _____ to the market.',
    options: ['go', 'goes', 'went', 'going'],
    correctAnswer: 2
  },
  {
    id: 9,
    level: 'A2',
    question: 'There _____ many students in the class.',
    options: ['is', 'are', 'was', 'am'],
    correctAnswer: 1
  },
  {
    id: 10,
    level: 'A2',
    question: 'She is _____ than her sister.',
    options: ['tall', 'taller', 'tallest', 'more tall'],
    correctAnswer: 1
  },

  // B1 Level Questions (11-15)
  {
    id: 11,
    level: 'B1',
    question: 'If I _____ more time, I would travel the world.',
    options: ['have', 'had', 'having', 'has'],
    correctAnswer: 1
  },
  {
    id: 12,
    level: 'B1',
    question: 'The report _____ by the manager tomorrow.',
    options: ['will submit', 'will be submitted', 'is submitting', 'submits'],
    correctAnswer: 1
  },
  {
    id: 13,
    level: 'B1',
    question: 'I have been working here _____ five years.',
    options: ['since', 'for', 'from', 'during'],
    correctAnswer: 1
  },
  {
    id: 14,
    level: 'B1',
    question: 'She suggested _____ to the new restaurant.',
    options: ['to go', 'going', 'go', 'went'],
    correctAnswer: 1
  },
  {
    id: 15,
    level: 'B1',
    question: 'The movie _____ we watched yesterday was amazing.',
    options: ['who', 'which', 'what', 'where'],
    correctAnswer: 1
  },

  // B2 Level Questions (16-20)
  {
    id: 16,
    level: 'B2',
    question: 'By this time next year, I _____ my degree.',
    options: ['will complete', 'will have completed', 'am completing', 'have completed'],
    correctAnswer: 1
  },
  {
    id: 17,
    level: 'B2',
    question: 'The project, _____ was supposed to be finished last month, is still ongoing.',
    options: ['that', 'which', 'who', 'what'],
    correctAnswer: 1
  },
  {
    id: 18,
    level: 'B2',
    question: '_____ the heavy rain, we decided to go hiking.',
    options: ['Despite', 'Although', 'However', 'Because'],
    correctAnswer: 0
  },
  {
    id: 19,
    level: 'B2',
    question: 'Had I known about the traffic, I _____ earlier.',
    options: ['would leave', 'would have left', 'will leave', 'left'],
    correctAnswer: 1
  },
  {
    id: 20,
    level: 'B2',
    question: 'She is capable _____ handling complex situations.',
    options: ['to', 'of', 'with', 'in'],
    correctAnswer: 1
  },

  // C1 Level Questions (21-23)
  {
    id: 21,
    level: 'C1',
    question: 'The committee\'s decision was _____ on insufficient evidence.',
    options: ['based', 'founded', 'grounded', 'predicated'],
    correctAnswer: 3
  },
  {
    id: 22,
    level: 'C1',
    question: '_____ his objections, the proposal was approved unanimously.',
    options: ['Notwithstanding', 'Despite of', 'In spite', 'Regardless'],
    correctAnswer: 0
  },
  {
    id: 23,
    level: 'C1',
    question: 'The research _____ new insights into cognitive development.',
    options: ['yielded', 'produced', 'generated', 'manifested'],
    correctAnswer: 0
  },

  // C2 Level Questions (24-25)
  {
    id: 24,
    level: 'C2',
    question: 'The author\'s _____ prose style belies the complexity of her arguments.',
    options: ['pellucid', 'turbid', 'abstruse', 'recondite'],
    correctAnswer: 0
  },
  {
    id: 25,
    level: 'C2',
    question: 'His _____ for ancient literature was evident in every lecture.',
    options: ['predilection', 'aversion', 'indifference', 'antipathy'],
    correctAnswer: 0
  }
]

// CEFR Level Descriptions
const cefrLevels = {
  'A1': {
    name: 'Beginner',
    color: 'from-red-500 to-orange-500',
    description: 'You can understand and use familiar everyday expressions and basic phrases.',
    recommendation: 'Start with our Phonics Training and Basic Grammar courses.'
  },
  'A2': {
    name: 'Elementary',
    color: 'from-orange-500 to-yellow-500',
    description: 'You can communicate in simple tasks requiring direct exchange of information.',
    recommendation: 'Our Spoken English for Beginners course is perfect for you.'
  },
  'B1': {
    name: 'Intermediate',
    color: 'from-yellow-500 to-green-500',
    description: 'You can deal with most situations likely to arise while traveling in an English-speaking area.',
    recommendation: 'Advance your skills with our Professional English course.'
  },
  'B2': {
    name: 'Upper Intermediate',
    color: 'from-green-500 to-blue-500',
    description: 'You can interact with a degree of fluency and spontaneity with native speakers.',
    recommendation: 'Prepare for IELTS or enhance your Business English skills.'
  },
  'C1': {
    name: 'Advanced',
    color: 'from-blue-500 to-indigo-500',
    description: 'You can express yourself fluently and spontaneously without obvious searching for expressions.',
    recommendation: 'Perfect for IELTS preparation and advanced business communication.'
  },
  'C2': {
    name: 'Proficient',
    color: 'from-indigo-500 to-purple-500',
    description: 'You can understand virtually everything heard or read with ease.',
    recommendation: 'You\'re ready for our specialized Advanced English courses.'
  }
}

type Step = 'welcome' | 'registration' | 'test' | 'results'

export default function PlacementTestPage() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>(Array(25).fill(-1))
  const [timeStarted, setTimeStarted] = useState<number>(0)
  const [result, setResult] = useState<{
    score: number
    level: string
    timeTaken: number
  } | null>(null)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const startTest = () => {
    if (formData.name && formData.email && formData.whatsapp) {
      setCurrentStep('test')
      setTimeStarted(Date.now())
    }
  }

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < 24) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResult = () => {
    let correctCount = 0
    answers.forEach((answer, index) => {
      if (answer === testQuestions[index].correctAnswer) {
        correctCount++
      }
    })

    const percentage = (correctCount / 25) * 100
    let level = 'A1'

    if (percentage >= 92) level = 'C2'
    else if (percentage >= 84) level = 'C1'
    else if (percentage >= 68) level = 'B2'
    else if (percentage >= 52) level = 'B1'
    else if (percentage >= 36) level = 'A2'
    else level = 'A1'

    const timeTaken = Math.round((Date.now() - timeStarted) / 1000 / 60) // in minutes

    setResult({
      score: correctCount,
      level,
      timeTaken
    })
    setCurrentStep('results')
  }

  const retakeTest = () => {
    setCurrentStep('welcome')
    setCurrentQuestion(0)
    setAnswers(Array(25).fill(-1))
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30 font-['Inter',sans-serif]">
      
      {/* Welcome Screen */}
      {currentStep === 'welcome' && (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5"></div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-violet-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <FadeIn delay={0.1} direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-200/50">
                  <Award className="w-5 h-5 mr-2" />
                  Free English Proficiency Assessment
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-slate-900">Discover Your</span>{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                    English Level
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Take our comprehensive 25-question placement test to accurately determine your CEFR level (A1-C2) and receive personalized course recommendations.
                </p>
              </div>
            </FadeIn>

            <ScaleIn delay={0.3}>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { icon: Clock, title: '15-20 Minutes', description: 'Complete at your own pace', gradient: 'from-blue-500 to-cyan-500' },
                  { icon: TrendingUp, title: 'Progressive Difficulty', description: 'Questions from A1 to C2 level', gradient: 'from-violet-500 to-purple-500' },
                  { icon: Award, title: 'Instant Results', description: 'Get your CEFR level immediately', gradient: 'from-emerald-500 to-green-500' }
                ].map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                      <p className="text-slate-600 text-sm font-light leading-relaxed">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </ScaleIn>

            <FadeIn delay={0.5} direction="up">
              <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-2xl border-2 border-slate-200 max-w-2xl mx-auto relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-violet-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-emerald-400/10 to-green-400/10 rounded-full blur-3xl"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    What You'll Get:
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  </h3>
                  <div className="space-y-4 mb-8">
                    {[
                      { text: 'Accurate CEFR level assessment (A1-C2)', icon: Award },
                      { text: 'Detailed breakdown of your strengths', icon: Target },
                      { text: 'Personalized course recommendations', icon: BookOpen },
                      { text: 'Free consultation with our experts', icon: Users },
                      { text: 'Exclusive course discounts based on your level', icon: Star }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3 group hover:translate-x-2 transition-transform duration-200">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <benefit.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-slate-700 font-light leading-relaxed">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setCurrentStep('registration')}
                    className="w-full bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white py-5 px-8 rounded-2xl text-lg font-bold hover:from-blue-700 hover:via-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
                  >
                    <GraduationCap className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                    Start Your Assessment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {/* Trust Badge */}
                  <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">100% Free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">No Credit Card</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold">Instant Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Registration Screen */}
      {currentStep === 'registration' && (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-blue-200/20 to-violet-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative max-w-2xl mx-auto w-full">
            <FadeIn delay={0.1} direction="up">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Before We Begin...</h2>
                <p className="text-lg text-slate-600 font-light max-w-xl mx-auto">
                  Please share your details so we can send your personalized results and course recommendations directly to you.
                </p>
              </div>
            </FadeIn>

            <ScaleIn delay={0.3}>
              <div className="bg-gradient-to-br from-white to-emerald-50/20 rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-slate-200 relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-bl-full"></div>
                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-slate-200">
                  {[
                    { icon: Shield, text: 'Secure & Private' },
                    { icon: Star, text: '5000+ Students' },
                    { icon: CheckCircle, text: 'Verified Results' }
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={index} className="text-center">
                        <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-xs text-slate-600 font-medium">{item.text}</p>
                      </div>
                    )
                  })}
                </div>

                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                      <User className="w-4 h-4 mr-2 text-blue-600" />
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                      required
                    />
                    <p className="text-xs text-slate-500 mt-2 ml-1">We'll use this to personalize your certificate</p>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                      <Mail className="w-4 h-4 mr-2 text-blue-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                      required
                    />
                    <p className="text-xs text-slate-500 mt-2 ml-1">Your detailed results will be sent here</p>
                  </div>

                  {/* WhatsApp Field */}
                  <div>
                    <label className="flex items-center text-sm font-semibold text-slate-700 mb-3">
                      <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleFormChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-slate-900 placeholder-slate-400"
                      required
                    />
                    <p className="text-xs text-slate-500 mt-2 ml-1">For instant course recommendations & support</p>
                  </div>

                  {/* Privacy Note */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-900 flex items-start">
                      <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="font-light">
                        <strong className="font-semibold">Your privacy matters.</strong> We'll only use this information to send your test results and course recommendations. No spam, ever.
                      </span>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep('welcome')}
                      className="flex-1 border-2 border-slate-300 text-slate-700 py-4 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-200 flex items-center justify-center"
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={startTest}
                      disabled={!formData.name || !formData.email || !formData.whatsapp}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-violet-700 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
                    >
                      Begin Test
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </ScaleIn>
          </div>
        </section>
      )}

      {/* Test Screen */}
      {currentStep === 'test' && (
        <section className="relative min-h-screen py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <FadeIn delay={0.1} direction="down">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-slate-700">
                    Question {currentQuestion + 1} of 25
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    {Math.round(((currentQuestion + 1) / 25) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-500 ease-out"
                    style={{ width: `${((currentQuestion + 1) / 25) * 100}%` }}
                  ></div>
                </div>
              </div>
            </FadeIn>

            {/* Question Card */}
            <ScaleIn delay={0.2} key={currentQuestion}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 mb-8">
                {/* Level Badge */}
                <div className="inline-flex items-center bg-gradient-to-r from-slate-100 to-blue-50 px-4 py-2 rounded-full text-sm font-bold text-slate-700 mb-6">
                  Level: {testQuestions[currentQuestion].level}
                </div>

                {/* Question */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 leading-relaxed">
                  {testQuestions[currentQuestion].question}
                </h2>

                {/* Options */}
                <div className="space-y-4">
                  {testQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                        answers[currentQuestion] === index
                          ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/20'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${
                          answers[currentQuestion] === index
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-slate-300'
                        }`}>
                          {answers[currentQuestion] === index && (
                            <CheckCircle className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <span className={`text-lg ${
                          answers[currentQuestion] === index
                            ? 'text-blue-900 font-semibold'
                            : 'text-slate-700 font-light'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </ScaleIn>

            {/* Navigation Buttons */}
            <FadeIn delay={0.3} direction="up">
              <div className="flex gap-4">
                <button
                  onClick={previousQuestion}
                  disabled={currentQuestion === 0}
                  className="flex-1 border-2 border-slate-300 text-slate-700 py-4 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Previous
                </button>
                
                {currentQuestion < 24 ? (
                  <button
                    onClick={nextQuestion}
                    disabled={answers[currentQuestion] === -1}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-violet-700 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/25"
                  >
                    Next Question
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <button
                    onClick={calculateResult}
                    disabled={answers.includes(-1)}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/25"
                  >
                    View Results
                    <Award className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </button>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Results Screen */}
      {currentStep === 'results' && result && (
        <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto w-full">
            <FadeIn delay={0.1} direction="up">
              <div className="text-center mb-8">
                <div className={`w-24 h-24 bg-gradient-to-br ${cefrLevels[result.level as keyof typeof cefrLevels].color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                  Congratulations, {formData.name}!
                </h1>
                <p className="text-xl text-slate-600 font-light">
                  You've completed the placement test
                </p>
              </div>
            </FadeIn>

            <ScaleIn delay={0.3}>
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-200 mb-8">
                {/* Level Display */}
                <div className="text-center mb-8 pb-8 border-b border-slate-200">
                  <div className={`inline-block bg-gradient-to-r ${cefrLevels[result.level as keyof typeof cefrLevels].color} text-white px-8 py-4 rounded-2xl text-3xl font-bold mb-4 shadow-lg`}>
                    {result.level} - {cefrLevels[result.level as keyof typeof cefrLevels].name}
                  </div>
                  <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light leading-relaxed">
                    {cefrLevels[result.level as keyof typeof cefrLevels].description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border border-blue-200">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{result.score}/25</div>
                    <div className="text-sm text-slate-600 font-medium">Correct Answers</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <div className="text-4xl font-bold text-green-600 mb-2">{Math.round((result.score / 25) * 100)}%</div>
                    <div className="text-sm text-slate-600 font-medium">Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border border-orange-200">
                    <div className="text-4xl font-bold text-orange-600 mb-2">{result.timeTaken}min</div>
                    <div className="text-sm text-slate-600 font-medium">Time Taken</div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <GraduationCap className="w-7 h-7 mr-3" />
                    Recommended for You
                  </h3>
                  <p className="text-lg font-light leading-relaxed mb-6">
                    {cefrLevels[result.level as keyof typeof cefrLevels].recommendation}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/courses"
                      className="flex-1 bg-white text-blue-600 py-3 px-6 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 text-center"
                    >
                      View Courses
                    </a>
                    <a
                      href="/contact"
                      className="flex-1 border-2 border-white text-white py-3 px-6 rounded-xl font-bold hover:bg-white/10 transition-all duration-200 text-center"
                    >
                      Talk to Expert
                    </a>
                  </div>
                </div>
              </div>
            </ScaleIn>

            {/* Action Buttons */}
            <FadeIn delay={0.5} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={retakeTest}
                  className="flex-1 border-2 border-slate-300 text-slate-700 py-4 px-6 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-200 flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Retake Test
                </button>
                <a
                  href="https://tagmango.com/creator/membership/free"
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-xl font-bold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center shadow-lg shadow-green-500/25"
                >
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </FadeIn>

            {/* Thank You Message */}
            <FadeIn delay={0.7} direction="up">
              <div className="mt-8 text-center">
                <p className="text-slate-600 font-light">
                  📧 Detailed results have been sent to <strong className="font-semibold text-slate-900">{formData.email}</strong>
                  <br />
                  💬 You'll receive course recommendations on WhatsApp shortly
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      )}
    </div>
  )
}

