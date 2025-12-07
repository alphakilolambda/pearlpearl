'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const sections = [
    {
      title: 'General',
      items: [
        { title: 'Introduction', slug: 'introduction' },
        { title: 'Overview', slug: 'overview' },
        { title: 'Getting Started', slug: 'getting-started' },
      ],
    },
    {
      title: 'Pearl',
      items: [
        { title: 'Simple Pearl', slug: 'simple-pearl' },
        { title: 'Advanced Pearl', slug: 'advanced-pearl' },
        { title: 'Variables', slug: 'variables' },
        { title: 'Voices and Languages', slug: 'voices-languages' },
        { title: 'Actions', slug: 'actions' },
        { title: 'Post-Call', slug: 'post-call' },
      ],
    },
    {
      title: 'Activities',
      items: [
        { title: 'Inbound', slug: 'inbound' },
        { title: 'Outbound', slug: 'outbound' },
        { title: 'Outbound/API', slug: 'outbound-api' },
        { title: 'Call Analytics', slug: 'call-analytics' },
        { title: 'Payouts', slug: 'payouts' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { title: 'Agents', slug: 'agents' },
        { title: 'Phone Numbers', slug: 'phone-numbers' },
        { title: 'Billing', slug: 'billing' },
        { title: 'Account Security Settings', slug: 'account-security' },
        { title: 'Phone Number Blacklist', slug: 'phone-blacklist' },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8 flex-shrink-0">
                {/* Logo image - SVG, PNG or JPG */}
                <img
                  src="/logo.svg"
                  alt="Pearl"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback to text logo if image not found
                    const target = e.currentTarget as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
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
            <Link
              href="/"
              className="text-sm font-normal text-gray-700 transition-colors hover:text-gray-900"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-12 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Documentation
                </h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <div key={section.title} className="mb-6">
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item.slug}>
                            <button
                              onClick={() => setActiveSection(item.slug)}
                              className={`w-full text-left text-sm transition-colors ${
                                activeSection === item.slug
                                  ? 'font-semibold text-gray-900'
                                  : 'text-gray-600 hover:text-gray-900'
                              }`}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              {(!activeSection || activeSection === 'introduction') && (
                <div className="space-y-8">
                  <div>
                    <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                      Introduction
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      Welcome to NLPearl.AI - Revolutionizing Telecommunications
                      with Conversational AI
                    </p>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Welcome to NLPearl.AI
                      </h2>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        NLPearl.AI is at the forefront of transforming
                        telecommunications with advanced conversational AI. Our
                        innovative AI phone agents seamlessly integrate into call
                        centers, providing exceptional customer service, driving
                        transactions, and enhancing productivity through smart
                        automation.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Explore Our Technologies
                      </h2>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                          <h3 className="font-semibold text-gray-900">
                            Overview
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Get an overview of how NLPearl.AI works and what it
                            can do for you.
                          </p>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                          <h3 className="font-semibold text-gray-900">
                            Create Your Pearl
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Learn how to create a Pearl, the core of your
                            AI-driven conversations.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Getting Started
                      </h2>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        Kickstart your journey with NLPearl.AI by exploring the
                        core features of our AI technology and how it can be
                        tailored to boost your business operations.
                      </p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                          <h3 className="font-semibold text-gray-900">
                            API Quick Start
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Start integrating our API with this quick start
                            guide.
                          </p>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                          <h3 className="font-semibold text-gray-900">
                            Advanced Pearl
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Dive into creating custom conversational flows with
                            our advanced options.
                          </p>
                        </div>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Dive Deeper
                      </h2>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        Expand your knowledge on optimizing AI interactions to
                        achieve superior customer satisfaction and operational
                        efficiency.
                      </p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                          <h3 className="font-semibold text-gray-900">
                            Actions
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Discover the powerful actions your AI can perform
                            during and after calls.
                          </p>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                          <h3 className="font-semibold text-gray-900">
                            Calls & Analytics
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            Analyze call data and measure the success of your
                            AI interactions.
                          </p>
                        </div>
                      </div>
                    </section>

                  </div>
                </div>
              )}

              {/* Overview */}
              {activeSection === 'overview' && (
                <div className="space-y-8">
                  <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                    Overview
                  </h1>
                  <div className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      NLPearl.AI provides a comprehensive platform for building
                      and deploying AI-powered phone agents. Our system enables
                      you to create intelligent conversational flows that handle
                      customer interactions automatically.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Key Features
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                      <li>Natural language understanding and processing</li>
                      <li>Multi-language support</li>
                      <li>Customizable conversation flows</li>
                      <li>Real-time call analytics</li>
                      <li>Seamless API integration</li>
                      <li>Post-call actions and automation</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Getting Started */}
              {activeSection === 'getting-started' && (
                <div className="space-y-8">
                  <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                    Getting Started
                  </h1>
                  <div className="space-y-6">
                    <section>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Quick Start Guide
                      </h2>
                      <ol className="mt-4 list-decimal space-y-4 pl-6 text-gray-700">
                        <li>Create your account on NLPearl.AI</li>
                        <li>Set up your first phone number</li>
                        <li>Create a Simple Pearl or use Advanced options</li>
                        <li>Configure your conversation flow</li>
                        <li>Test your Pearl with a test call</li>
                        <li>Deploy and monitor your calls</li>
                      </ol>
                    </section>
                    <section>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        API Integration
                      </h2>
                      <p className="mt-4 leading-relaxed text-gray-700">
                        Start integrating our API with your existing systems.
                        Our RESTful API provides comprehensive endpoints for
                        managing calls, Pearls, and analytics.
                      </p>
                      <div className="mt-4 rounded-lg bg-gray-900 p-4">
                        <pre className="text-sm text-gray-300">
                          <code>{`curl -X POST https://api.nlpearl.ai/v1/calls \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "phone_number": "+1234567890",
    "pearl_id": "your_pearl_id"
  }'`}</code>
                        </pre>
                      </div>
                    </section>
                  </div>
                </div>
              )}

              {/* Simple Pearl */}
              {activeSection === 'simple-pearl' && (
                <div className="space-y-8">
                  <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                    Simple Pearl
                  </h1>
                  <div className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      Simple Pearl is the easiest way to get started with
                      NLPearl.AI. Create a basic conversational flow without
                      complex configurations.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Creating a Simple Pearl
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                      Use our intuitive interface to create a Pearl with basic
                      conversation flows. Perfect for simple use cases like
                      appointment scheduling, basic Q&A, and information
                      collection.
                    </p>
                  </div>
                </div>
              )}

              {/* Advanced Pearl */}
              {activeSection === 'advanced-pearl' && (
                <div className="space-y-8">
                  <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                    Advanced Pearl
                  </h1>
                  <div className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      Advanced Pearl gives you full control over your
                      conversational AI. Create complex flows with conditional
                      logic, variables, and custom actions.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Advanced Features
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                      <li>Conditional branching based on user responses</li>
                      <li>Dynamic variable handling</li>
                      <li>Custom action triggers</li>
                      <li>Integration with external APIs</li>
                      <li>Multi-step workflows</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Actions */}
              {activeSection === 'actions' && (
                <div className="space-y-8">
                  <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                    Actions
                  </h1>
                  <div className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      Actions allow your Pearl to perform tasks during and after
                      calls. These can include sending emails, updating CRMs,
                      scheduling appointments, and more.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Available Actions
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <h3 className="font-semibold text-gray-900">
                          Send Email
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Automatically send emails during or after calls with
                          call summaries and next steps.
                        </p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <h3 className="font-semibold text-gray-900">
                          CRM Integration
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Update your CRM with call data, leads, and customer
                          information.
                        </p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <h3 className="font-semibold text-gray-900">
                          Calendar Booking
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Schedule appointments directly into your calendar
                          system.
                        </p>
                      </div>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                        <h3 className="font-semibold text-gray-900">
                          Webhook Triggers
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                          Trigger custom webhooks to integrate with any system.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Call Analytics */}
              {activeSection === 'call-analytics' && (
                <div className="space-y-8">
                  <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                    Call Analytics
                  </h1>
                  <div className="space-y-6">
                    <p className="leading-relaxed text-gray-700">
                      Track and analyze your call performance with comprehensive
                      analytics. Monitor call volumes, success rates, customer
                      satisfaction, and more.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Analytics Features
                    </h2>
                    <ul className="list-disc space-y-2 pl-6 text-gray-700">
                      <li>Real-time call monitoring</li>
                      <li>Call transcripts and recordings</li>
                      <li>Sentiment analysis</li>
                      <li>Performance metrics and KPIs</li>
                      <li>Custom reporting dashboards</li>
                      <li>Export data for further analysis</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Default message for other sections */}
              {activeSection &&
                !['introduction', 'overview', 'getting-started', 'simple-pearl', 'advanced-pearl', 'actions', 'call-analytics'].includes(
                  activeSection
                ) && (
                  <div className="space-y-8">
                    <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
                      {sections
                        .flatMap((s) => s.items)
                        .find((i) => i.slug === activeSection)?.title ||
                        'Documentation'}
                    </h1>
                    <p className="leading-relaxed text-gray-700">
                      This section is coming soon. Check back later for detailed
                      documentation.
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

