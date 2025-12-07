'use client'

import Link from 'next/link'

export default function CareersPage() {
  const positions = [
    {
      title: 'Senior Frontend Engineer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
            Careers
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Join us and make an impact. We're building the future of
            conversational AI.
          </p>

          <div className="mt-12 space-y-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {position.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-600">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="rounded-lg border border-gray-900 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Don't see a role that fits?
            </h2>
            <p className="mt-4 text-gray-600">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <button className="mt-6 rounded-lg border border-gray-900 bg-white px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50">
              Send Resume
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

