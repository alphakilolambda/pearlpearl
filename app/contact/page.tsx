'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

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
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Have a question? We would love to hear from you.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Get in Touch
              </h2>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1 text-gray-900">support@nlpearlai.xyz</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="mt-1 text-gray-900">+1 (555) 123-3000</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="mt-1 text-gray-900">
                    123 Innovation Street
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
