'use client'

import Link from 'next/link'

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                By accessing and using Pearl's services, you accept and agree to
                be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                2. Use License
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Permission is granted to temporarily use Pearl's services for
                personal or commercial purposes. This is the grant of a license,
                not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                3. Service Availability
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We strive to maintain high availability of our services but do
                not guarantee uninterrupted access. We reserve the right to
                modify or discontinue services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                4. User Responsibilities
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                You are responsible for maintaining the confidentiality of your
                account and password. You agree to use our services in
                compliance with all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                5. Limitation of Liability
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Pearl shall not be liable for any indirect, incidental, special,
                or consequential damages resulting from the use or inability to
                use our services.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

