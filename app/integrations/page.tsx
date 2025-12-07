'use client'

import Link from 'next/link'

export default function IntegrationsPage() {
  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Zendesk', category: 'Help Desk' },
    { name: 'Intercom', category: 'Help Desk' },
    { name: 'Google Calendar', category: 'Calendar' },
    { name: 'Microsoft Outlook', category: 'Calendar' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Microsoft Teams', category: 'Communication' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'WooCommerce', category: 'E-commerce' },
    { name: 'Stripe', category: 'Payment' },
    { name: 'Twilio', category: 'Telephony' },
  ]

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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-light text-gray-900 sm:text-5xl">
              Integrations
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Connect Pearl with the tools you already use
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {integration.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {integration.category}
                  </p>
                </div>
                <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50">
                  Connect
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Don't see your integration?{' '}
              <Link href="/contact" className="font-semibold text-gray-900">
                Contact us
              </Link>{' '}
              to request it.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

