'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-sm'
            : 'bg-white/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/50 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Nepal Exporting IT"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm sm:text-base font-semibold text-gray-800 tracking-tight">
                  Nepal
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-amber-500 tracking-wide">
                  Exporting IT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-gray-900 bg-amber-50/80'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-amber-400/90 hover:bg-amber-400 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-amber-200/50 active:scale-95"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute left-0 top-1/2 w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-5 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-14 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-gray-900 bg-amber-50 border border-amber-200/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? 'bg-amber-400' : 'bg-gray-300'
                    }`} />
                    {link.name}
                    {isActive && (
                      <svg className="w-4 h-4 ml-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                )
              })}
              <div className="pt-3 px-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-medium text-gray-700 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-200 hover:shadow-md active:scale-[0.98]"
                >
                  Get in Touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-14 sm:h-16" />
    </>
  )
}