'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    useCase: '',
    teamSize: '',
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const faqs = [
    {
      question: 'What is Pearl AI?',
      answer:
        'Pearl AI is an intelligent voice agent platform that automates customer phone interactions 24/7. It handles calls, routes conversations, and provides actionable insights through advanced AI technology.',
    },
    {
      question: 'How can I integrate Pearl into my existing systems?',
      answer:
        'Pearl offers robust APIs and pre-built integrations with popular CRM systems, help desk platforms, and communication tools. Our developer documentation provides step-by-step guides for seamless integration.',
    },
    {
      question: 'What languages does Pearl support?',
      answer:
        'Pearl AI supports over 50 languages and dialects, allowing you to serve customers globally with natural, human-like conversations in their preferred language.',
    },
    {
      question: 'Is Pearl secure and compliant?',
      answer:
        'Yes, Pearl is SOC 2 Type 2 compliant and follows GDPR guidelines. All conversations are encrypted, and we maintain enterprise-grade security standards to protect your data.',
    },
    {
      question: 'Can I customize the AI agent behavior?',
      answer:
        'Absolutely. Our no-code platform allows you to design custom conversation flows, set routing rules, and configure agent responses to match your business requirements.',
    },
    {
      question: 'What kind of analytics does Pearl provide?',
      answer:
        'Pearl provides comprehensive analytics including call transcripts, sentiment analysis, outcome tracking, team performance metrics, and custom reporting dashboards.',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 0 - Navigation Bar (White) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm' : ''
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between border-b border-gray-100">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-8 w-8 flex-shrink-0">
                  {/* Logo image - SVG, PNG or JPG */}
                  <img
                    src="/logo.svg"
                    alt="Pearl"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      // Fallback to text logo if image not found
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling?.classList.remove('hidden')
                    }}
                  />
                  {/* Fallback text logo */}
                  <div className="hidden h-full w-full items-center justify-center rounded-lg bg-black text-white">
                    <span className="text-sm font-bold">P</span>
                  </div>
                </div>
                <span className="font-serif text-xl font-light text-gray-900">
                  Pearl
                </span>
              </Link>
            </div>

            {/* Center Nav Links */}
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-10">
              <Link
                href="/features"
                className="text-sm font-normal text-gray-700 transition-colors hover:text-gray-900"
              >
                Product
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-normal text-gray-700 transition-colors hover:text-gray-900"
              >
                Pricing
              </Link>
              <Link
                href="/use-cases"
                className="text-sm font-normal text-gray-700 transition-colors hover:text-gray-900"
              >
                Use Cases
              </Link>
              <Link
                href="/docs"
                className="text-sm font-normal text-gray-700 transition-colors hover:text-gray-900"
              >
                Docs
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="/signup"
                className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-900"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* SECTION 1 - Large Hero (White) */}
      <section className="pt-32 pb-32 sm:pt-40 sm:pb-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <h1 className="font-serif text-5xl font-light leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                The AI voice agent to automate your customer's phone & voice
                interactions.
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
                Human-like AI voice agent, speaks any language, works 24/7, all
                on a no-code platform.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/signup"
                  className="rounded-lg bg-black px-8 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-gray-900"
                >
                  Get started
                </Link>
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="rounded-lg border border-gray-900 bg-transparent px-8 py-3.5 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50"
                >
                  Book a demo
                </button>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Trusted by teams in sales, support and operations.
              </p>
            </div>

            {/* Right Visual - Abstract Circular Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="relative h-96 w-96">
                {/* Animated Background Circles */}
                <div
                  className="absolute inset-0 transition-transform duration-100 ease-out"
                  style={{
                    transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
                  }}
                >
                  <svg
                    viewBox="0 0 400 400"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.6"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="140"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.6"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="100"
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      fill="none"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                {/* Animated Curved Lines */}
                <div
                  className="absolute inset-0 transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px) rotate(${mousePosition.x * 15}deg)`,
                  }}
                >
                  <svg
                    viewBox="0 0 400 400"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 200 20 Q 250 100 300 200 T 200 380"
                      stroke="#d1d5db"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M 20 200 Q 100 150 200 200 T 380 200"
                      stroke="#d1d5db"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Central Point with Glow */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
                  style={{
                    transform: `translate(calc(-50% + ${mousePosition.x * 25}px), calc(-50% + ${mousePosition.y * 25}px))`,
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 animate-ping rounded-full bg-indigo-400 opacity-20"></div>
                    <div className="relative h-4 w-4 rounded-full bg-indigo-600 shadow-lg"></div>
                  </div>
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out"
                    style={{
                      transform: `translate(calc(-50% + ${Math.cos((i * 60 * Math.PI) / 180) * 120 + mousePosition.x * 50}px), calc(-50% + ${Math.sin((i * 60 * Math.PI) / 180) * 120 + mousePosition.y * 50}px))`,
                      transitionDelay: `${i * 10}ms`,
                    }}
                  >
                    <div className="h-2 w-2 rounded-full bg-indigo-300 opacity-40"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Black Bridge Strip */}
      <section className="bg-black py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="h-px flex-1 bg-gray-800"></div>
            <p className="px-6 text-sm font-light lowercase text-gray-400">
              the ai voice agent
            </p>
            <div className="h-px flex-1 bg-gray-800"></div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - Black Logo Strip (Trust Logos) */}
      <section className="bg-black py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {[
              'Twilio',
              'AWS',
              'Google Cloud',
              'Salesforce',
              'Zendesk',
              'HubSpot',
              'Stripe',
              'Intercom',
              'Slack',
              'Microsoft Teams',
            ].map((name) => (
              <div
                key={name}
                className="text-sm font-medium text-gray-400 grayscale"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - Main Feature Intro (Black) */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
              Human-like AI voice agent, speaks any language, works 24/7, all
              on a no-code platform.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Transform your customer communication with intelligent automation
              that understands context, handles complex queries, and delivers
              exceptional experiences around the clock.
            </p>
            <button className="mt-10 rounded-lg border border-white bg-transparent px-8 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-white hover:text-black">
              Explore features
            </button>
          </div>

          {/* Subgrid - 3 Columns */}
          <div className="mx-auto mt-20 grid max-w-5xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-light text-white">
                Human-like speech
              </h3>
              <p className="mt-3 text-gray-400">
                Natural conversations powered by advanced voice synthesis and
                understanding.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-light text-white">
                No-code flows
              </h3>
              <p className="mt-3 text-gray-400">
                Design complex conversation workflows visually without writing a
                single line of code.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-light text-white">
                24/7 availability
              </h3>
              <p className="mt-3 text-gray-400">
                Never miss a call. Your AI agent handles every interaction,
                day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - Two-Column Feature Grid (Black) */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Left Column */}
            <div>
              <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
                From Calls to Insights. From Insights to Action.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Every conversation is automatically transcribed, analyzed, and
                transformed into actionable intelligence. Understand customer
                sentiment, track outcomes, and optimize performance with
                comprehensive analytics.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-400">
                Our platform provides real-time insights that help your team
                make data-driven decisions, identify trends, and continuously
                improve customer experiences.
              </p>

              {/* Flowchart Diagram Placeholder */}
              <div className="mt-10 rounded-lg border border-gray-800 bg-gray-900 p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-indigo-600"></div>
                    <div className="flex-1">
                      <div className="h-4 w-32 rounded bg-gray-700"></div>
                      <div className="mt-2 h-3 w-24 rounded bg-gray-800"></div>
                    </div>
                  </div>
                  <div className="ml-6 flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-purple-600"></div>
                    <div className="flex-1">
                      <div className="h-4 w-28 rounded bg-gray-700"></div>
                      <div className="mt-2 h-3 w-20 rounded bg-gray-800"></div>
                    </div>
                  </div>
                  <div className="ml-12 flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-blue-600"></div>
                    <div className="flex-1">
                      <div className="h-4 w-36 rounded bg-gray-700"></div>
                      <div className="mt-2 h-3 w-28 rounded bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Table */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Call Volume</span>
                  <span className="text-lg font-medium text-white">12.5K</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Avg. Response</span>
                  <span className="text-lg font-medium text-white">1.2s</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Satisfaction</span>
                  <span className="text-lg font-medium text-white">96%</span>
                </div>
                <div className="flex items-center justify-between pb-3">
                  <span className="text-sm text-gray-400">Uptime</span>
                  <span className="text-lg font-medium text-white">99.9%</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-center text-center">
              {/* Tag */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-orange-600 bg-orange-500 px-3 py-1.5">
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-xs font-semibold text-white">
                  Seamless Integration
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Connect Pearl effortlessly to your favorite tools.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Pearl integrates seamlessly with the platforms you already use,
                Google, Slack, Salesforce, Shopify, and more. No complex setup,
                just smooth automation that fits right into your workflow.
              </p>

              {/* Circular Radial Icon Cluster */}
              <div className="relative mt-12 mx-auto flex h-80 w-full max-w-md items-center justify-center">
                {/* Connecting Lines */}
                <svg
                  className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 320 320"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ overflow: 'visible' }}
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                    const angle = (i * 360) / 8 - 90
                    const radius = 140
                    const centerX = 160
                    const centerY = 160
                    const x = centerX + radius * Math.cos((angle * Math.PI) / 180)
                    const y = centerY + radius * Math.sin((angle * Math.PI) / 180)
                    return (
                      <line
                        key={i}
                        x1={centerX}
                        y1={centerY}
                        x2={x}
                        y2={y}
                        stroke="#4b5563"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    )
                  })}
                </svg>

                {/* Central Pearl Logo - Asterisk */}
                <div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <svg
                    className="h-8 w-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>

                {/* Surrounding Logos */}
                {[
                  {
                    name: 'Google',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-sm p-2">
                        <svg viewBox="0 0 24 24" className="h-full w-full">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    ),
                  },
                  {
                    name: 'Zapier',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-orange-500 shadow-sm p-2">
                        <svg viewBox="0 0 24 24" className="h-full w-full" fill="white">
                          <path d="M15.453 9.058l-1.406-1.406 6.37-6.37c.967-.968.967-2.54 0-3.508-.968-.967-2.54-.967-3.508 0l-6.37 6.37-1.406-1.406 6.37-6.37C8.95-1.64 10.53-1.64 11.5-.672l6.37 6.37-1.406 1.406-6.37 6.37 1.406 1.406 6.37-6.37c.968-.968 2.54-.968 3.508 0 .968.968.968 2.54 0 3.508l-6.37 6.37-1.406-1.406-6.37 6.37c-.968.968-2.54.968-3.508 0-.968-.968-.968-2.54 0-3.508l6.37-6.37-1.406-1.406-6.37 6.37c-.968.968-2.54.968-3.508 0-.968-.968-.968-2.54 0-3.508l6.37-6.37 1.406 1.406-6.37 6.37c-.968.968-.968 2.54 0 3.508.968.968 2.54.968 3.508 0l6.37-6.37 1.406 1.406-6.37 6.37c-.968.968-.968 2.54 0 3.508.968.968 2.54.968 3.508 0l6.37-6.37 1.406-1.406z"/>
                        </svg>
                      </div>
                    ),
                  },
                  {
                    name: 'Asterisk',
                    component: (
                      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-orange-500 shadow-sm">
                        <div className="absolute h-full w-full rounded-full bg-gray-700 opacity-30" style={{ transform: 'translateX(-2px)' }}></div>
                        <svg
                          className="relative h-5 w-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    name: 'Figma',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-sm">
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8 8a4 4 0 118 0 4 4 0 01-8 0z"
                            fill="#0ACF83"
                          />
                          <path
                            d="M8 16a4 4 0 118 0 4 4 0 01-8 0z"
                            fill="#A259FF"
                          />
                          <path
                            d="M16 12a4 4 0 118 0 4 4 0 01-8 0z"
                            fill="#F24E1E"
                          />
                          <path
                            d="M8 12a4 4 0 118 0 4 4 0 01-8 0z"
                            fill="#FF7262"
                          />
                          <path
                            d="M12 8a4 4 0 118 0 4 4 0 01-8 0z"
                            fill="#1ABCFE"
                          />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    name: 'Shopify',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-green-600 shadow-sm p-2">
                        <svg viewBox="0 0 24 24" className="h-full w-full" fill="white">
                          <path d="M17.5 7.5c-.2-.1-.4-.2-.6-.2-.3 0-.6.1-.8.2L12 9.5l-4.1-1.8c-.2-.1-.5-.2-.8-.2-.2 0-.4.1-.6.2l-2.5 1.4v6.8l2.5 1.4c.2.1.4.2.6.2.3 0 .6-.1.8-.2L12 14.5l4.1 1.8c.2.1.5.2.8.2.2 0 .4-.1.6-.2l2.5-1.4V8.9l-2.5-1.4zm-1.1 7.6c-.1 0-.2 0-.3-.1L12 13.5l-4.1 1.5c-.1 0-.2.1-.3.1l-1.5-.8V10l1.5-.8c.1 0 .2 0 .3.1L12 10.5l4.1-1.5c.1 0 .2-.1.3-.1l1.5.8v4.4l-1.5.8z"/>
                        </svg>
                      </div>
                    ),
                  },
                  {
                    name: 'Salesforce',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-500 shadow-sm p-2">
                        <svg viewBox="0 0 24 24" className="h-full w-full" fill="white">
                          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.28-1.88-.32-3.76.12-5.64-.82-.12-1.63-.2-2.43-.2C4.33 14.84 0 15.8 0 18.9c0 3.1 4.33 4.05 11.66 4.05 1.21 0 2.4-.05 3.57-.13-.88-.88-1.38-2.05-1.38-3.42 0-1.17.5-2.34 1.38-3.22.44-2.8 1.16-5.64 2.12-8.52C19.1.95 20.17 1.02 21.2 1.5c.28 1.88.32 3.76-.12 5.64.82.12 1.63.2 2.43.2 3.33 0 7.66-.96 7.66-4.05 0-3.1-4.33-4.05-11.66-4.05-1.21 0-2.4.05-3.57.13.88.88 1.38 2.05 1.38 3.42 0 1.17-.5 2.34-1.38 3.22-.44 2.8-1.16 5.64-2.12 8.52z"/>
                        </svg>
                      </div>
                    ),
                  },
                  {
                    name: 'Grid',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-red-500 shadow-sm">
                        <div className="grid grid-cols-2 gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="h-1.5 w-1.5 rounded-full bg-white"
                            ></div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    name: 'Monday',
                    component: (
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-700 shadow-sm p-2">
                        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF3838"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" fill="#FFC600"/>
                          <path d="M12 2v10M2 7v10M22 7v10" stroke="#00CA72" strokeWidth="2" fill="none"/>
                        </svg>
                      </div>
                    ),
                  },
                ].map((logo, i) => {
                  const angle = (i * 360) / 8 - 90
                  const radius = 140
                  const centerX = 160
                  const centerY = 160
                  const x = centerX + radius * Math.cos((angle * Math.PI) / 180)
                  const y = centerY + radius * Math.sin((angle * Math.PI) / 180)
                  return (
                    <div
                      key={i}
                      className="absolute z-10 h-14 w-14"
                      style={{
                        left: `calc(50% + ${x - centerX - 28}px)`,
                        top: `calc(50% + ${y - centerY - 28}px)`,
                      }}
                    >
                      {logo.component}
                    </div>
                  )
                })}
              </div>

              {/* Stats Block */}
              <div className="mt-8 w-full max-w-sm rounded-lg border border-gray-800 bg-gray-900 p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400">Active Integrations</p>
                    <p className="mt-1 text-2xl font-light text-white">50+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">API Requests/Day</p>
                    <p className="mt-1 text-2xl font-light text-white">2.4M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.5 - Calls to Insights & Action (Black) */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
              From Calls to Insights. From Insights to Action.
            </h2>
            <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-100">
              Get started - It's free
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Two Panels */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Panel - Call Transcripts & Recordings */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-green-600">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Call Transcripts & Recordings
                </h3>
              </div>
              <p className="mb-8 text-gray-400">
                Instantly access full call transcripts and recordings to review
                interactions, ensure compliance, and optimize your customer
                engagement strategy.
              </p>

              {/* Call Flow & Transcript UI */}
              <div className="space-y-6">
                {/* Central Flow */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="my-2 h-8 w-0.5 bg-gray-700"></div>
                  <div className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-2">
                    <span className="text-sm text-gray-400">calling</span>
                  </div>
                  <div className="my-2 h-8 w-0.5 bg-gray-700"></div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Two Chat Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Left Chat Card - Unsuccessful */}
                  <div className="rounded-lg border border-gray-800 bg-gray-900">
                    <div className="flex items-center justify-between border-b border-gray-800 bg-gray-950 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        <span className="text-xs">🇫🇷</span>
                        <span className="text-xs text-gray-400">
                          +33672131841
                        </span>
                      </div>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-600">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-3 p-4">
                      <div className="rounded-lg bg-gray-800 px-3 py-2">
                        <p className="text-sm text-gray-300">
                          Hi there! This is Joey from The Slicerie Pizza. How
                          can I help you today?
                        </p>
                      </div>
                      <div className="ml-auto rounded-lg bg-gray-700 px-3 py-2">
                        <p className="text-sm text-white">
                          Hey! I'd love to order a pizza, please.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Chat Card - Successful */}
                  <div className="rounded-lg border border-gray-800 bg-gray-900">
                    <div className="flex items-center justify-between border-b border-gray-800 bg-gray-950 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        <span className="text-xs">🇫🇷</span>
                        <span className="text-xs text-gray-400">
                          +33672131841
                        </span>
                      </div>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-600">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="space-y-3 p-4">
                      <div>
                        <p className="text-xs text-gray-500">Lead Name</p>
                        <p className="text-sm font-semibold text-white">
                          John Doe
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="text-sm font-semibold text-white">
                          136 sec
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Smart Call Tagging & Instant Alerts */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-green-600">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Smart Call Tagging & Instant Alerts
                </h3>
              </div>
              <p className="mb-8 text-gray-400">
                Pearl tags every call with key insights, lead interest,
                complaints, follow-ups, and more, so you always know the next
                step. Get real-time alerts via Slack, email, or CRM to stay on
                top of deals, support tickets, and priority requests.
              </p>

              {/* Tag List */}
              <div className="space-y-4">
                {[
                  {
                    color: 'bg-red-500',
                    text: 'The prospect clearly stated they are not interested in the product...',
                  },
                  {
                    color: 'bg-orange-500',
                    text: 'The number dialed does not belong to the prospect or was incorrect.',
                  },
                  {
                    color: 'bg-yellow-500',
                    text: 'The prospect or customer reported a complaint or issue.',
                  },
                  {
                    color: 'bg-green-400',
                    text: 'The prospect requested a callback at a specific date or time.',
                  },
                  {
                    color: 'bg-green-600',
                    text: 'The prospect expressed interest in the product but has not made...',
                  },
                  {
                    color: 'bg-cyan-500',
                    text: 'A sale was successfully closed during the call.',
                  },
                  {
                    color: 'bg-blue-700',
                    text: 'The call requires further action.',
                  },
                ].map((tag, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`mt-1 h-3 w-3 shrink-0 rounded-full ${tag.color}`}
                    ></div>
                    <p className="text-sm text-gray-300">{tag.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - Full-Width Chart Visual (Black) */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <button className="mb-8 text-left text-sm font-medium text-white transition-colors hover:text-gray-400">
              Learn More →
            </button>
            <h3 className="mb-12 font-serif text-2xl font-light text-white">
              Real-time analytics and performance insights
            </h3>
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-8">
              {/* Chart Placeholder */}
              <div className="h-64">
                <svg
                  viewBox="0 0 800 200"
                  className="h-full w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 50}
                      x2="800"
                      y2={i * 50}
                      stroke="#1f2937"
                      strokeWidth="1"
                    />
                  ))}
                  {/* Chart line 1 */}
                  <path
                    d="M 0 150 Q 200 100 400 80 T 800 60"
                    stroke="#6366f1"
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Chart line 2 */}
                  <path
                    d="M 0 180 Q 200 140 400 120 T 800 100"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                  {/* Data points */}
                  {[0, 100, 200, 300, 400, 500, 600, 700, 800].map((x) => (
                    <circle
                      key={x}
                      cx={x}
                      cy={150 - Math.random() * 50}
                      r="3"
                      fill="#6366f1"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - API Section (White) */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
            Unlock endless possibilities with Pearl's robust APIs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Build custom integrations, automate workflows, and extend Pearl's
            capabilities with our comprehensive API documentation and developer
            tools.
          </p>

          {/* Code Blocks */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* JavaScript Code Block */}
            <div className="rounded-lg border border-gray-200 bg-gray-50">
              <div className="flex border-b border-gray-200 bg-white">
                <button className="border-b-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900">
                  JS
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-500">
                  Python
                </button>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto text-sm">
                  <code className="text-gray-800">
                    {`const pearl = require('@pearl/sdk');

const agent = new pearl.Agent({
  apiKey: 'your-api-key',
  language: 'en'
});

agent.handleCall({
  phoneNumber: '+1234567890',
  flow: 'sales',
  onComplete: (result) => {
    console.log('Call completed:', result);
  }
});`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Python Code Block */}
            <div className="rounded-lg border border-gray-200 bg-gray-50">
              <div className="flex border-b border-gray-200 bg-white">
                <button className="px-4 py-2 text-sm font-medium text-gray-500">
                  JS
                </button>
                <button className="border-b-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900">
                  Python
                </button>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto text-sm">
                  <code className="text-gray-800">
                    {`from pearl import Agent

agent = Agent(
    api_key='your-api-key',
    language='en'
)

result = agent.handle_call(
    phone_number='+1234567890',
    flow='sales'
)

print(f'Call completed: {result}')`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FAQ Section (White) */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-4xl font-light text-gray-900 sm:text-5xl">
            Have a question?
          </h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Three Card Showcase (White) */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Card */}
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-light text-gray-900">
                Transform your sales process
              </h3>
              <p className="mt-4 text-gray-600">
                Automate lead qualification, schedule follow-ups, and close more
                deals with intelligent voice agents that never miss an
                opportunity.
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                Learn More →
              </a>
            </div>

            {/* Middle Card */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-[4/5] bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
                <div className="flex h-full flex-col">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700">
                      Analytics
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">Today</p>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-medium text-gray-600">
                          Call Volume
                        </p>
                        <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700">
                          +12%
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-indigo-200"></div>
                          <span className="text-xs font-semibold text-gray-700">
                            247
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-purple-200" style={{ width: '75%' }}></div>
                          <span className="text-xs font-semibold text-gray-700">
                            189
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 flex-1 rounded-full bg-pink-200" style={{ width: '50%' }}></div>
                          <span className="text-xs font-semibold text-gray-700">
                            124
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-500">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-xs font-semibold text-gray-700">
                          Success Rate
                        </p>
                      </div>
                      <p className="mt-2 text-lg font-bold text-gray-900">
                        94.2%
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium text-gray-600">
                          Avg. Duration
                        </p>
                        <span className="rounded bg-indigo-100 px-2 py-1 text-xs font-bold text-indigo-700">
                          3:24
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-gray-700">
                      Live Calls
                    </h4>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-300">
                      <span className="text-xs font-bold text-blue-700">3</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 text-white">
                          <span className="text-sm font-semibold">SM</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">
                            Sarah Martinez
                          </p>
                          <p className="text-xs text-gray-500">2 min ago</p>
                        </div>
                      </div>
                      <div className="ml-12 rounded-lg bg-cyan-50 p-3">
                        <p className="text-xs leading-relaxed text-gray-700">
                          Hi! I'm interested in learning more about your
                          enterprise plan. Can we schedule a demo?
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-500 text-white">
                          <span className="text-sm font-semibold">JD</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">
                            John Davis
                          </p>
                          <p className="text-xs text-gray-500">5 min ago</p>
                        </div>
                      </div>
                      <div className="ml-12 rounded-lg bg-blue-50 p-3">
                        <p className="text-xs leading-relaxed text-gray-700">
                          Perfect! I'll send you the calendar link right away.
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                          <p className="text-xs font-medium text-gray-700">
                            Active call
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">03:42</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - Final CTA Strip (Black) */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Try Pearl for free.
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Editorially Engineered for Security
          </p>
          <p className="mt-2 text-sm text-gray-500">SOC 2 Type 2 Compliant</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-lg bg-white px-8 py-3.5 text-base font-medium text-black transition-all duration-200 hover:bg-gray-100 sm:w-auto"
            >
              Get started
            </Link>
            <button
              onClick={() => setShowDemoModal(true)}
              className="w-full rounded-lg border border-white bg-transparent px-8 py-3.5 text-base font-medium text-white transition-all duration-200 hover:bg-white hover:text-black sm:w-auto"
            >
              Schedule a demo
            </button>
          </div>

          {/* Support Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-medium text-gray-400">Phone Support</p>
              <p className="mt-2 text-white">+1 (555) 123-3000</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Email Support</p>
              <p className="mt-2 text-white">support@nlpearlai.xyz</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400">Documentation</p>
              <Link
                href="/docs"
                className="mt-2 block text-white transition-colors hover:text-gray-400"
              >
                View Docs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 - Footer (Black) */}
      <footer className="border-t border-gray-900 bg-black">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 flex-shrink-0">
                {/* Logo image - SVG, PNG or JPG - Inverted for dark background */}
                <img
                  src="/logo.svg"
                  alt="Pearl"
                  className="h-full w-full object-contain brightness-0 invert"
                  onError={(e) => {
                    // Fallback to text logo if image not found
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                {/* Fallback text logo */}
                <div className="hidden h-full w-full items-center justify-center rounded-lg bg-white text-black">
                  <span className="text-sm font-bold">P</span>
                </div>
              </div>
              <span className="font-serif text-xl font-light text-white">
                Pearl
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integrations"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Developers</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    SDKs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-900 pt-8 sm:flex-row">
            <div className="flex items-center space-x-2">
              <div className="relative h-6 w-6 flex-shrink-0">
                {/* Logo image - SVG, PNG or JPG - Inverted for dark background */}
                <img
                  src="/logo.svg"
                  alt="Pearl"
                  className="h-full w-full object-contain brightness-0 invert"
                  onError={(e) => {
                    // Fallback to text logo if image not found
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                {/* Fallback text logo */}
                <div className="hidden h-full w-full items-center justify-center rounded bg-white text-black">
                  <span className="text-xs font-bold">P</span>
                </div>
              </div>
              <span className="font-serif text-sm font-light text-gray-400">
                Pearl
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-4 sm:mt-0">
              <a
                href="https://x.com/NL_pearl_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Pearl AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-black p-8 sm:p-12">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowDemoModal(false)
                setCurrentStep(0)
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  useCase: '',
                  teamSize: '',
                })
              }}
              className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-1 w-full rounded-full bg-gray-800">
                <div
                  className="h-1 rounded-full bg-white transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / 6) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Discover how Pearl can automate calls and win clients. Free
                  demo.
                </h2>
                <p className="text-lg text-gray-300">
                  We'll walk you through the platform and show exactly how Pearl
                  can help your business save time & money.
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="w-full rounded-lg bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100"
                >
                  Book a demo
                </button>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Takes 1 minute 30 seconds</span>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  What's your name?
                </h2>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.name.trim()}
                  className="w-full rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  What's your email?
                </h2>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none"
                  autoFocus
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!formData.email.trim()}
                    className="flex-1 rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  What's your company name?
                </h2>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Enter company name"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none"
                  autoFocus
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    disabled={!formData.company.trim()}
                    className="flex-1 rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  What's your phone number?
                </h2>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:border-white focus:outline-none"
                  autoFocus
                />
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(5)}
                    disabled={!formData.phone.trim()}
                    className="flex-1 rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  What's your primary use case?
                </h2>
                <div className="space-y-3">
                  {[
                    'Sales & Lead Qualification',
                    'Customer Support',
                    'Appointment Scheduling',
                    'Order Processing',
                    'Other',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        setFormData({ ...formData, useCase: option })
                      }
                      className={`w-full rounded-lg border px-4 py-3 text-left text-base transition-all duration-200 ${
                        formData.useCase === option
                          ? 'border-white bg-white text-black'
                          : 'border-gray-700 bg-gray-900 text-white hover:border-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(6)}
                    disabled={!formData.useCase}
                    className="flex-1 rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  How many people are on your team?
                </h2>
                <div className="space-y-3">
                  {['1-10', '11-50', '51-200', '201-500', '500+'].map(
                    (option) => (
                      <button
                        key={option}
                        onClick={() =>
                          setFormData({ ...formData, teamSize: option })
                        }
                        className={`w-full rounded-lg border px-4 py-3 text-left text-base transition-all duration-200 ${
                          formData.teamSize === option
                            ? 'border-white bg-white text-black'
                            : 'border-gray-700 bg-gray-900 text-white hover:border-gray-600'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="rounded-lg border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:border-gray-600"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      // Form submit - burada API çağrısı yapılabilir
                      console.log('Form submitted:', formData)
                      setCurrentStep(7)
                    }}
                    disabled={!formData.teamSize}
                    className="flex-1 rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            {currentStep === 7 && (
              <div className="space-y-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Thank you! We'll be in touch soon.
                </h2>
                <p className="text-lg text-gray-300">
                  Our team will reach out within 24 hours to schedule your demo.
                </p>
                <button
                  onClick={() => {
                    setShowDemoModal(false)
                    setCurrentStep(0)
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      phone: '',
                      useCase: '',
                      teamSize: '',
                    })
                  }}
                  className="w-full rounded-lg bg-white px-8 py-3 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
