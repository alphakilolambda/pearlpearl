'use client'

import Link from 'next/link'

export default function UseCasesPage() {
  const industries = [
    {
      name: 'Hospitality',
      description: 'Seamless bookings, happier guests.',
      icon: '🏨',
      features: [
        '24/7 reservation management',
        'Multi-language support',
        'Instant booking confirmations',
        'Guest inquiry handling',
      ],
    },
    {
      name: 'Healthcare',
      description: 'Smarter patient care, less wait time.',
      icon: '🏥',
      features: [
        'Appointment scheduling',
        'Patient intake automation',
        'HIPAA compliant calls',
        'Prescription reminders',
      ],
    },
    {
      name: 'Ecommerce & Retail',
      description: 'Sell more, support faster.',
      icon: '🛒',
      features: [
        'Order status inquiries',
        'Product recommendations',
        'Return processing',
        'Customer support automation',
      ],
    },
    {
      name: 'Legal Services',
      description: 'Focus on cases, not calls.',
      icon: '⚖️',
      features: [
        'Client intake automation',
        'Appointment scheduling',
        'Case status updates',
        'Document request handling',
      ],
    },
    {
      name: 'Real Estate',
      description: 'Close deals faster.',
      icon: '🏠',
      features: [
        'Property inquiry handling',
        'Viewing scheduling',
        'Lead qualification',
        'Follow-up automation',
      ],
    },
    {
      name: 'Utilities',
      description: 'Effortless service management.',
      icon: '⚡',
      features: [
        'Account inquiries',
        'Service requests',
        'Billing support',
        'Outage reporting',
      ],
    },
    {
      name: 'Education',
      description: 'Smarter support for students.',
      icon: '🎓',
      features: [
        'Admissions inquiries',
        'Course information',
        'Student support',
        'Registration assistance',
      ],
    },
    {
      name: 'Telecommunications',
      description: 'Elevate customer experience.',
      icon: '📱',
      features: [
        'Technical support',
        'Plan inquiries',
        'Billing questions',
        'Service activation',
      ],
    },
    {
      name: 'Call Center',
      description: 'Faster responses, better service.',
      icon: '📞',
      features: [
        'First call resolution',
        'Queue management',
        'Call routing',
        'Performance analytics',
      ],
    },
    {
      name: 'Insurance',
      description: 'Quick claims, happy clients.',
      icon: '🛡️',
      features: [
        'Claims processing',
        'Policy inquiries',
        'Quote generation',
        'Customer support',
      ],
    },
    {
      name: 'Debt Management',
      description: 'Recover more, stress less.',
      icon: '💳',
      features: [
        'Payment arrangements',
        'Account inquiries',
        'Compliance automation',
        'Collection calls',
      ],
    },
    {
      name: 'Government Services',
      description: 'Simplify public services.',
      icon: '🏛️',
      features: [
        'Citizen inquiries',
        'Service requests',
        'Information hotlines',
        'Appointment scheduling',
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

      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl lg:text-6xl">
            Our Industries
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Discover how Pearl transforms customer interactions across different
            industries
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group rounded-xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{industry.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {industry.name}
                </h3>
                <p className="mt-2 text-gray-600">{industry.description}</p>
                <ul className="mt-6 space-y-2">
                  {industry.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-green-500"
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
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="mt-6 inline-block text-sm font-semibold text-gray-900 transition-colors hover:text-gray-600"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Try Pearl for free
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Get started - It's free
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-black transition-all duration-200 hover:bg-gray-100 sm:w-auto"
            >
              Get started - It's free
            </Link>
            <Link
              href="/pricing"
              className="w-full rounded-lg border border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-white hover:text-black sm:w-auto"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Built for Trust, Engineered for Security
          </p>
          <p className="mt-2 text-lg text-gray-600">
            We are{' '}
            <span className="font-semibold text-gray-900">SOC II</span>,{' '}
            <span className="font-semibold text-gray-900">HIPAA</span>, and{' '}
            <span className="font-semibold text-gray-900">GDPR</span>{' '}
            compliant.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Phone Pearl
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Browser Pearl
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Industries
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/use-cases"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Travel & Hospitality
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Debt Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/use-cases"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Browse All
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Pearl AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

