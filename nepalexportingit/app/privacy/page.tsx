"use client"

import Link from "next/link"

const brand = {
  primary: "#F4CE14",
  primaryHover: "#d4ae0f",
  primaryDark: "#b89a0c",
  primaryTint: "#fefbe8",
  primaryBorder: "#faf0a0",
}

const sections = [
  {
    title: "1. Introduction",
    body: [
      "This Privacy Policy explains how Nepal Exporting IT (\"we\", \"us\", \"our\") collects, uses, and protects information when you visit our website, use our contact form, or work with us as a client.",
      "By using our website or services, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Contact form submissions: when you fill out our contact form, we collect your name, email address, phone number (if provided), the service you're interested in, and the details of your message.",
      "Project communications: if you become a client, we may collect additional information needed to complete your project, such as business details, account access, content, and files you share with us.",
      "We do not collect sensitive personal information (such as health, financial account details, or government ID numbers) unless it is directly necessary for a specific project and shared voluntarily by you.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use the information you provide to respond to inquiries, prepare proposals and quotes, deliver and manage projects, and communicate with you about ongoing or past work.",
      "We do not use your contact information for unsolicited marketing, and we do not sell, rent, or trade your information to third parties.",
    ],
  },
  {
    title: "4. Cookies & Analytics",
    body: [
      "Our website may use basic cookies or analytics tools (such as Google Analytics) to understand how visitors use the site for example, which pages are viewed most often. This information is aggregated and does not identify you personally.",
      "You can disable cookies through your browser settings. Doing so may affect some website functionality but will not prevent you from contacting us or browsing our services.",
    ],
  },
  {
    title: "5. Third-Party Services",
    body: [
      "We may use third-party tools to operate our business for example, email providers, project management tools, cloud storage, or payment processors. These providers only receive the information necessary to perform their function and are expected to handle it securely.",
      "For client projects involving e-commerce, payment gateways (e.g. Stripe, eSewa, Khalti) handle payment information directly we do not store your card or payment details on our own systems.",
    ],
  },
  {
    title: "6. Data Storage & Security",
    body: [
      "We take reasonable steps to protect information shared with us, including limiting access to project materials and credentials to the people working on your project.",
      "However, no method of electronic storage or transmission is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain contact form submissions and project-related information for as long as necessary to respond to your inquiry, complete a project, or fulfil our legal and accounting obligations. After this, information is deleted or archived securely.",
    ],
  },
  {
    title: "8. Your Rights",
    body: [
      "You can ask us at any time to tell you what personal information we hold about you, correct inaccurate information, or delete your information, where we are not required to retain it for legal or contractual reasons.",
      "To make any of these requests, contact us using the details below.",
    ],
  },
  {
    title: "9. Children's Privacy",
    body: [
      "Our website and services are intended for businesses and individuals over the age of 18. We do not knowingly collect information from children.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The \"last updated\" date at the top of this page will reflect the most recent revision.",
    ],
  },
]

export default function Privacy() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── PAGE HEADER ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
            style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
          >
            <span className="text-xs font-semibold tracking-wide" style={{ color: brand.primaryDark }}>
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-2xl">
            Your privacy matters to us. This page explains what information we collect, how
            it's used, and how it's protected — in plain language.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Last updated: June 2026
          </p>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold tracking-tight mb-3">{s.title}</h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT NOTE ── */}
      <section className="max-w-4xl mx-auto px-6 pb-24 md:pb-32">
        <div
          className="rounded-2xl border px-8 py-8"
          style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
        >
          <h2 className="text-lg font-bold text-gray-900 mb-1.5">Questions about your data?</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md mb-4">
            If you'd like to know what information we hold about you, or have any other
            privacy-related questions, reach out and we'll respond promptly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-900 text-sm font-bold rounded-xl transition-all duration-200 shadow-sm"
            style={{ backgroundColor: brand.primary }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = brand.primaryHover)}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = brand.primary)}
          >
            Contact us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  )
}