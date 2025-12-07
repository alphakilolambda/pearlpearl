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
  other: {
    'virtual-protocol-site-verification': '32363a076dea113adeb52d30377fc634',
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

