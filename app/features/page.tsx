'use client'

import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      title: '24/7 Availability',
      description:
        'Your AI agent never sleeps, ensuring customers can reach you anytime, anywhere.',
      icon: '🕐',
    },
    {
      title: 'Multi-Language Support',
      description:
        'Serve customers in over 50 languages with natural, human-like conversations.',
      icon: '🌍',
    },
    {
      title: 'Smart Call Routing',
      description:
        'Intelligently route calls to the right team member based on context and availability.',
      icon: '📞',
    },
    {
      title: 'Real-Time Analytics',
      description:
        'Track performance, analyze sentiment, and gain insights from every conversation.',
      icon: '📊',
    },
    {
      title: 'CRM Integration',
      description:
        'Seamlessly integrate with your existing CRM, help desk, and business tools.',
      icon: '🔗',
    },
    {
      title: 'Custom Workflows',
      description:
        'Design custom conversation flows with our no-code platform or advanced API.',
      icon: '⚙️',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
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

      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
              Features
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Everything you need to transform your customer interactions
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

