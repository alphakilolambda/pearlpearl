'use client'

import Link from 'next/link'

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Meet the team shaping the future of conversational AI
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                At Pearl, we're revolutionizing telecommunications with advanced
                conversational AI. Our mission is to make intelligent voice
                agents accessible to businesses of all sizes, enabling them to
                provide exceptional customer service 24/7.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                We envision a world where every business can deliver
                human-like, intelligent customer interactions at scale. Through
                cutting-edge AI technology, we're making this vision a reality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Why Pearl?</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Pearl combines the power of natural language processing with
                seamless integration capabilities. Our platform is designed for
                businesses that want to automate customer interactions without
                compromising on quality or personalization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

