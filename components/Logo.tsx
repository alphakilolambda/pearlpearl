'use client'

import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  showText?: boolean
}

export default function Logo({ variant = 'light', showText = true }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-8 w-8 flex-shrink-0">
        {/* Try to load logo image */}
        <Image
          src="/logo.svg"
          alt="Pearl"
          width={32}
          height={32}
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
        <div
          className={`hidden h-full w-full items-center justify-center rounded-lg ${
            isLight ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <span className="text-sm font-bold">P</span>
        </div>
      </div>
      {showText && (
        <span
          className={`font-serif text-xl font-light ${
            isLight ? 'text-gray-900' : 'text-white'
          }`}
        >
          Pearl
        </span>
      )}
    </Link>
  )
}

