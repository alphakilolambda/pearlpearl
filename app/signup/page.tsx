'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignUpPage() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [walletName, setWalletName] = useState('')
  const [showWalletModal, setShowWalletModal] = useState(false)

  const detectWallet = () => {
    if (typeof window === 'undefined') return null

    const ethereum = (window as any).ethereum
    if (!ethereum) return null

    // Detect wallet name
    if (ethereum.isRabby) return 'Rabby'
    if (ethereum.isMetaMask) return 'MetaMask'
    if (ethereum.isCoinbaseWallet) return 'Coinbase Wallet'
    if (ethereum.isTrust) return 'Trust Wallet'
    if (ethereum.isBraveWallet) return 'Brave Wallet'
    
    // Check for other common wallets
    if (ethereum.providers && ethereum.providers.length > 0) {
      const provider = ethereum.providers.find((p: any) => p.isMetaMask || p.isRabby)
      if (provider) {
        if (provider.isRabby) return 'Rabby'
        if (provider.isMetaMask) return 'MetaMask'
      }
    }

    return 'Wallet'
  }

  const connectWallet = async (walletType?: string) => {
    try {
      if (typeof window === 'undefined') {
        alert('Please install a Web3 wallet to continue')
        return
      }

      const ethereum = (window as any).ethereum

      if (!ethereum) {
        alert('Please install a Web3 wallet (MetaMask, Rabby, Coinbase Wallet, etc.) to continue')
        return
      }

      // Request account access
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (accounts && accounts.length > 0) {
        const detectedName = detectWallet() || walletType || 'Wallet'
        setWalletAddress(accounts[0])
        setWalletName(detectedName)
        setWalletConnected(true)
        setShowWalletModal(false)
      }
    } catch (error: any) {
      console.error('Wallet connection error:', error)
      if (error.code === 4001) {
        alert('Please approve the connection request in your wallet')
      } else {
        alert('Failed to connect wallet. Please try again.')
      }
    }
  }

  const handleSignUp = () => {
    if (!walletConnected) {
      setShowWalletModal(true)
      return
    }
    // Handle sign up with wallet
    console.log('Sign up with wallet:', { walletAddress, walletName })
    // Redirect to dashboard or show success
    alert('Account created successfully!')
  }

  return (
    <main className="flex min-h-screen">
      {/* Left Column - Form */}
      <div className="flex w-full flex-col justify-center bg-white p-8 sm:w-1/2 sm:p-12 lg:p-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to NLPearl.
            </h1>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">
              Create an account.
            </h2>
          </div>

          <p className="mb-8 text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="font-semibold text-gray-900">
              Sign in
            </Link>
          </p>

          <div className="space-y-6">
            {/* Wallet Connection */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Connect Wallet
                </span>
                {walletConnected && (
                  <span className="text-xs text-green-600">Connected</span>
                )}
              </div>
              {walletConnected ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">Wallet</p>
                    <p className="text-sm font-medium text-gray-900">
                      {walletName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Address</p>
                    <p className="text-sm font-mono text-gray-900">
                      {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setWalletConnected(false)
                      setWalletAddress('')
                      setWalletName('')
                    }}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowWalletModal(true)}
                  className="w-full rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
                >
                  Connect Wallet
                </button>
              )}
            </div>

            {/* Terms */}
            <p className="text-xs text-gray-600">
              By clicking Sign up, I have read and agree to the{' '}
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>
              ,{' '}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              , and{' '}
              <Link href="/acceptable-use" className="underline">
                Acceptable Use & Community Policy
              </Link>
              .
            </p>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full rounded-lg bg-gray-200 px-6 py-4 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-300"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Marketing */}
      <div className="hidden bg-black sm:block sm:w-1/2">
        <div className="relative flex h-full flex-col items-center justify-center p-12">
          {/* Grid Pattern Background */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          ></div>

          {/* Logo */}
          <div className="relative z-10 mb-12">
            <div className="relative h-16 w-16 flex-shrink-0">
              {/* Logo image - SVG, PNG or JPG - Inverted for dark background */}
              <img
                src="/logo.svg"
                alt="Pearl"
                className="h-full w-full object-contain brightness-0 invert"
                onError={(e) => {
                  // Fallback to text logo if image not found
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.classList.remove('hidden')
                }}
              />
              {/* Fallback text logo */}
              <div className="hidden h-full w-full items-center justify-center rounded-lg bg-white text-black">
                <span className="text-2xl font-bold">P</span>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="relative z-10 text-center">
            <h2 className="font-serif text-5xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
              You're about to hire Pearl.
            </h2>
            <div className="mt-8 flex items-center justify-center gap-2">
              <p className="text-lg text-white">
                *She's never late, never tired, and doesn't
              </p>
            </div>
            <div className="mt-2 inline-block rounded-lg bg-orange-600 px-4 py-2">
              <p className="text-lg font-semibold text-white">
                cry in the office bathroom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Connect Wallet
              </h3>
              <button
                onClick={() => setShowWalletModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => connectWallet()}
                className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {detectWallet() || 'Browser Wallet'}
                    </p>
                    <p className="text-xs text-gray-500">
                      Connect using your browser wallet
                    </p>
                  </div>
                </div>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {typeof window !== 'undefined' && !(window as any).ethereum && (
                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                  <p className="text-sm text-yellow-800">
                    No wallet detected. Please install a Web3 wallet like
                    MetaMask, Rabby, or Coinbase Wallet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

