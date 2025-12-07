'use client'

import Link from 'next/link'

export default function SecurityPage() {
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
            Security
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Your data security is our top priority
          </p>

          <div className="mt-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Compliance & Certifications
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">SOC 2 Type 2</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Certified for security, availability, and confidentiality
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">HIPAA</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Compliant with healthcare data protection standards
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">GDPR</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Fully compliant with European data protection regulations
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Data Encryption
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                All data transmitted to and from Pearl is encrypted using
                industry-standard TLS 1.3. Data at rest is encrypted using
                AES-256 encryption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Access Controls
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We implement strict access controls and authentication
                mechanisms to ensure only authorized personnel can access your
                data. Multi-factor authentication is required for all
                administrative access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">
                Regular Security Audits
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We conduct regular security audits and penetration testing to
                identify and address potential vulnerabilities. Our security team
                monitors systems 24/7 for any suspicious activity.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

