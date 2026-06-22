'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Website Development', href: '/services#web-development' },
      { name: 'Website Maintenance', href: '/services#maintenance' },
      { name: 'Mobile App Development', href: '/services#mobile-apps' },
      { name: 'Video Editing', href: '/services#video-editing' },
      { name: 'Graphic Design', href: '/services#graphic-design' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

const contactDetails = [
  {
    label: 'Email',
    value: 'nepalexportingit2082@gmail.com',
    href: 'mailto:nepalexportingit2082@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone / WhatsApp',
    value: (
      <div className="flex flex-col gap-0.5">
        <a 
          href="tel:+52-729-916-5906" 
          className="hover:underline"
          style={{ textDecorationColor: '#b89a0c' }}
        >
          +52-729-916-5906 (Mexico)
        </a>
        <a 
          href="tel:+977-9741-812578" 
          className="hover:underline"
          style={{ textDecorationColor: '#b89a0c' }}
        >
          +977-9741-812578 (Nepal)
        </a>
      </div>
    ),
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/nepalexportingit/',
    icon: (
    <svg
      className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a1.15 1.15 0 100 2.3 1.15 1.15 0 000-2.3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
    </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/orgs/NepalExportingIT',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="sm:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200/50 shadow-sm">
                  <Image
                    src="/images/logo.png"
                    alt="Nepal Exporting IT"
                    width={24}
                    height={24}
                    className="object-contain w-6 h-6" 
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-semibold text-gray-800 tracking-tight">
                    Nepal
                  </span>
                  <span className="text-[10px] font-medium text-amber-500 tracking-wide">
                    Exporting IT
                  </span>
                </div>
              </Link>
              
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
                Crafting digital experiences that bridge Nepal's tech talent with global opportunities. 
                We build, innovate, and export excellence.
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-2 mb-5">
                {contactDetails.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-start gap-2.5 text-sm text-gray-500 hover:text-amber-500 transition-colors duration-200 group"
                  >
                    <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-amber-50 border border-amber-200/50 text-amber-500 group-hover:bg-amber-100 transition-colors duration-200 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <span className="flex-1">{item.value}</span>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-amber-500 hover:bg-amber-50 border border-transparent hover:border-amber-200/50 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => {
                    const isActive = !link.href.includes('#') && pathname === link.href
                    return (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className={`text-sm transition-colors duration-200 ${
                            isActive
                              ? 'text-amber-500 font-medium'
                              : 'text-gray-500 hover:text-gray-800'
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              &copy; {currentYear} Nepal Exporting IT. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Link href="/privacy" className="hover:text-gray-600 transition-colors">
                Privacy
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/terms" className="hover:text-gray-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}