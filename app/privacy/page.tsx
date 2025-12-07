'use client'

import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                <span className="text-sm font-bold">P</span>
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                1. Information We Collect
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We collect information that you provide directly to us, such as
                when you create an account, use our services, or contact us for
                support. This may include your name, email address, phone number,
                and payment information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                2. How We Use Your Information
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We use the information we collect to provide, maintain, and
                improve our services, process transactions, send you technical
                notices and support messages, and respond to your inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                3. Data Security
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                4. Your Rights
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                You have the right to access, update, or delete your personal
                information at any time. You may also opt out of certain
                communications from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                5. Contact Us
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                If you have any questions about this Privacy Policy, please
                contact us at{' '}
                <Link href="/contact" className="text-gray-900 underline">
                  support@pearl.ai
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

