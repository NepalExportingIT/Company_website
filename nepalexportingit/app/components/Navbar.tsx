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
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] border-b border-gray-100/80'
            : 'bg-white/60 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/60 shadow-sm group-hover:shadow-amber-100 group-hover:border-amber-300/60 transition-all duration-300">
                <Image
                  src="/images/logo.png"
                  alt="Nepal Exporting IT"
                  width={24}
                  height={24}
                  className="object-contain w-6 h-6"
                />
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-sm sm:text-[15px] font-semibold text-gray-800 tracking-tight">
                  Nepal
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-amber-500 tracking-widest uppercase">
                  Exporting IT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-gray-900 bg-amber-50'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50/80'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-amber-400 rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="px-4 py-1.5 text-sm font-semibold text-gray-800 bg-amber-400 hover:bg-amber-300 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-amber-200/60 active:scale-95"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100/80 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute left-0 top-1/2 w-5 h-[1.5px] bg-gray-600 transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-[5px]'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-5 h-[1.5px] bg-gray-600 transform transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-5 h-[1.5px] bg-gray-600 transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-[5px]'
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
            className="absolute inset-0 bg-black/15 backdrop-blur-[2px]"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-14 left-0 right-0 bg-white/97 backdrop-blur-xl border-b border-gray-100 shadow-xl shadow-gray-900/5">
            <div className="px-3 py-3 space-y-0.5">
              {navLinks.map((link: NavLink) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-gray-900 bg-amber-50 border border-amber-200/50'
                        : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      isActive ? 'bg-amber-400' : 'bg-gray-200'
                    }`} />
                    {link.name}
                    {isActive && (
                      <svg className="w-3.5 h-3.5 ml-auto text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                )
              })}

              <div className="pt-2 pb-1 px-1">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-gray-800 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
                >
                  Get in Touch
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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