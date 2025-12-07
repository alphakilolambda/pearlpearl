import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pearl AI - 24/7 AI Phone Agent for Sales & Support',
  description: 'Transform your customer conversations with AI-powered phone agents that answer, route, and analyze calls automatically.',
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

