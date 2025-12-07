'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    'monthly'
  )

  // Token fiyatları (örnek: 1 $PEARL = $0.10 gibi bir varsayım)
  const PEARL_TOKEN_PRICE = 0.1 // Bu değer gerçek token fiyatına göre güncellenebilir

  const plans = [
    {
      name: 'Starter',
      description: 'Best for individual enterprise',
      monthlyPrice: 25,
      annualPrice: 250, // 10 ay ödeme
      popular: false,
      features: [
        { text: '2000 credits included', icon: '✓' },
        { text: 'From 18 credits/minute ($0.18)', icon: '✓' },
        { text: '1 US Phone number included', icon: '✓' },
        { text: '1 Agent(s) Included*', icon: '✓' },
        { text: 'Simple Support', icon: '✓' },
        { text: 'Free API Integrations', icon: '✓' },
        { text: 'Free VOIP Integrations', icon: '✓' },
      ],
    },
    {
      name: 'Companion',
      description: 'Ideal for small teams',
      monthlyPrice: 195,
      annualPrice: 1950,
      popular: true,
      features: [
        { text: '15 000 credits included', icon: '✓' },
        { text: 'From 16 credits/minute ($0.16)', icon: '✓' },
        { text: '1 US Phone number included', icon: '✓' },
        { text: '5 Agent(s) Included*', icon: '✓' },
        { text: 'Simple Support', icon: '✓' },
        { text: 'Free API Integrations', icon: '✓' },
        { text: 'Free VOIP Integrations', icon: '✓' },
      ],
    },
    {
      name: 'Manager',
      description: 'Perfect for growing businesses',
      monthlyPrice: 779,
      annualPrice: 7790,
      popular: false,
      features: [
        { text: '65 000 credits included', icon: '✓' },
        { text: 'From 13 credits/minute ($0.13)', icon: '✓' },
        { text: '3 US Phone number included', icon: '✓' },
        { text: '10 Agent(s) Included*', icon: '✓' },
        { text: 'Priority Support', icon: '✓' },
        { text: 'Free API Integrations', icon: '✓' },
        { text: 'Free VOIP Integrations', icon: '✓' },
      ],
    },
    {
      name: 'Enterprise',
      description: 'Best for large enterprises',
      custom: true,
      popular: false,
      features: [
        { text: 'Priority model requests (low latency)', icon: '✓' },
        { text: 'Additional minutes as low as $0.08', icon: '✓' },
        { text: 'Custom concurrent agents (high volume)', icon: '✓' },
        { text: 'Unlimited access to Pearl Vibe', icon: '✓' },
        { text: 'GDPR & SOC 2 compliance', icon: '✓' },
        { text: 'Dedicated support', icon: '✓' },
        { text: 'Full access & early features', icon: '✓' },
      ],
    },
  ]

  const convertToTokens = (price: number | undefined) => {
    if (!price) return 0
    return Math.round(price / PEARL_TOKEN_PRICE)
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation */}
      <header className="border-b border-gray-800 bg-black">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                <span className="text-sm font-bold">P</span>
              </div>
              <span className="font-serif text-xl font-light text-white">
                Pearl
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm font-normal text-gray-400 transition-colors hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-light text-white sm:text-5xl lg:text-6xl">
            Transform your customer experience like never before.
          </h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-800">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <p className="text-xl text-white">Phone Pearl</p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-800 bg-gray-900 p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Annual
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-blue-500 bg-gray-900'
                    : 'border-gray-800 bg-black'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                      Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  {plan.custom ? (
                    <div>
                      <div className="text-3xl font-bold text-white">Custom</div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white">
                          {convertToTokens(
                            billingCycle === 'monthly'
                              ? plan.monthlyPrice
                              : plan.annualPrice
                          )}
                        </span>
                        <span className="text-lg text-gray-400">
                          $PEARL
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {billingCycle === 'monthly'
                          ? 'per month'
                          : 'per year'}{' '}
                        {billingCycle === 'monthly' && 'billed monthly'}
                        {billingCycle === 'annual' && 'billed annually'}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 ${
                    plan.custom
                      ? 'border border-white bg-transparent text-white hover:bg-white hover:text-black'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {plan.custom ? 'Talk with sales' : 'Subscribe now'}
                  <svg
                    className="ml-2 inline h-4 w-4"
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

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 text-green-400">{feature.icon}</span>
                      <span className="text-sm text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full text-sm text-gray-400 transition-colors hover:text-white">
                  See more
                </button>

                {plan.name !== 'Enterprise' && (
                  <p className="mt-6 text-xs text-gray-500">
                    *The number of agents is the number of simultaneous calls
                    Pearl can handle.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

