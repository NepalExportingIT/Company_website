"use client"

import Link from "next/link"
import { useState } from "react"

const brand = {
  primary: "#F4CE14",
  primaryHover: "#d4ae0f",
  primaryDark: "#b89a0c",
  primaryTint: "#fefbe8",
  primaryBorder: "#faf0a0",
}

type Tier = {
  title: string
  description: string
  features: string[]
}

type Category = {
  id: string
  label: string
  heading: string
  blurb: string
  result: string
  tiers: Tier[]
}

const categories: Category[] = [
  {
    id: "web-development",
    label: "Website Development",
    heading: "Websites for every stage of business",
    blurb: "From a single landing page to a fully custom platform we build websites that match where your business is right now, and can grow with you.",
    result: "A live, responsive website that represents your brand professionally and works on every device.",
    tiers: [
      {
        title: "Landing Page",
        description: "A focused single-page site to introduce your business and capture leads.",
        features: ["1-page website", "Mobile responsive", "Contact form", "Basic SEO"],
      },
      {
        title: "Business Website",
        description: "A multi-page site covering everything a growing business needs to be found online.",
        features: ["5–10 pages", "Responsive design", "Contact forms", "Gallery / portfolio", "Basic SEO"],
      },
      {
        title: "Corporate Website",
        description: "A larger, custom-designed site built for established companies with more to communicate.",
        features: ["10–20+ pages", "Custom design", "Blog integration", "Advanced SEO", "Analytics setup"],
      },
      {
        title: "E-Commerce Website",
        description: "A complete online store, ready to take orders and payments from day one.",
        features: ["Product management", "Shopping cart", "Payment gateway", "Order management"],
      },
      {
        title: "Custom Web Application",
        description: "Tailor-built software for workflows that off-the-shelf tools can't handle.",
        features: ["User authentication", "Admin dashboard", "Custom workflows", "API integrations"],
      },
      {
        title: "Odoo Development",
        description: "End-to-end Odoo setup and customisation to run your business operations in one place.",
        features: ["Odoo setup & configuration", "Module customisation", "Custom module development", "Odoo website development", "Odoo ERP implementation", "Data migration"],
      },
    ],
  },
  {
    id: "maintenance",
    label: "Website Maintenance",
    heading: "Keep your website secure and up to date",
    blurb: "A website is never really 'done' it needs updates, monitoring, and the occasional fix. These plans are available exclusively for websites we've built, since we already know the codebase inside out. Pick a plan that matches how much support you need.",
    result: "A website that stays online, secure, and current without you having to think about it.",
    tiers: [
      {
        title: "Basic Maintenance",
        description: "Essential upkeep on a monthly basis good for sites that just need to stay healthy.",
        features: ["Security updates", "Backup monitoring", "Bug fixes", "Email support"],
      },
      {
        title: "Standard Maintenance",
        description: "A 6-month plan that adds content updates and proactive monitoring.",
        features: ["Everything in Basic", "Content updates", "Performance monitoring", "Priority support"],
      },
      {
        title: "Premium Maintenance",
        description: "A full year of comprehensive care, including small feature improvements.",
        features: ["Security updates", "Monthly backups", "Content updates", "Performance optimisation", "Technical support", "Minor feature enhancements"],
      },
    ],
  },
  {
    id: "mobile-apps",
    label: "Mobile App Development",
    heading: "Apps for Android and iOS",
    blurb: "Whether you need a simple app to launch an idea or a full platform connected to your existing systems, we build mobile apps that match the scope of your business.",
    result: "A working mobile app, ready for app store submission, built around the features your business actually needs.",
    tiers: [
      {
        title: "Starter App",
        description: "A simple app to get your idea live ideal for early-stage products.",
        features: ["Login / register", "Basic screens", "Database integration"],
      },
      {
        title: "Business App",
        description: "An app with the tools to manage content and reach users directly.",
        features: ["Admin dashboard", "Push notifications", "API integration"],
      },
      {
        title: "E-Commerce App",
        description: "A mobile storefront with everything needed to sell and fulfil orders.",
        features: ["Product catalog", "Payment gateway", "Order tracking"],
      },
      {
        title: "Custom Enterprise App",
        description: "A fully bespoke app integrated with your existing business systems.",
        features: ["Custom features", "ERP / CRM integration", "Advanced reports"],
      },
    ],
  },
  {
    id: "video-editing",
    label: "Video Editing",
    heading: "Video content for every platform",
    blurb: "From short-form social clips to long-form YouTube videos and corporate productions, we edit video that's clear, engaging, and on-brand.",
    result: "Polished, ready-to-publish video content tailored to the platform it's made for.",
    tiers: [
      {
        title: "Social Media Package",
        description: "Short, attention-grabbing edits for Reels, Shorts, and TikTok.",
        features: ["Reels", "Shorts", "TikTok videos", "Priced per video or as a monthly package"],
      },
      {
        title: "YouTube Package",
        description: "Long-form editing with the polish that keeps viewers watching.",
        features: ["Long-form editing", "Motion graphics", "Audio cleanup", "Thumbnail design"],
      },
      {
        title: "Corporate Package",
        description: "Professional video content for internal and external company use.",
        features: ["Promotional videos", "Company profile videos", "Training videos"],
      },
    ],
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    heading: "Visual design that builds your brand",
    blurb: "From a brand's first logo to ongoing social and print materials, we create visuals that look consistent and professional everywhere they appear.",
    result: "Brand-consistent visual assets, ready to use across digital and print.",
    tiers: [
      {
        title: "Branding Package",
        description: "The foundation of your visual identity.",
        features: ["Logo design", "Business card", "Brand guidelines"],
      },
      {
        title: "Social Media Package",
        description: "A steady stream of on-brand content for your social channels.",
        features: ["Monthly post designs", "Story designs", "Ad creatives"],
      },
      {
        title: "Marketing Materials",
        description: "Print and digital materials for promotions and events.",
        features: ["Flyers", "Brochures", "Posters", "Banners"],
      },
    ],
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    heading: "Get found, get traffic, get customers",
    blurb: "We help businesses grow their online presence through search, social, and paid channels managed end-to-end or as standalone services.",
    result: "Increased visibility, traffic, and engagement, tracked and reported clearly.",
    tiers: [
      {
        title: "Social Media Management",
        description: "Consistent, managed presence across your social channels.",
        features: ["Content creation", "Scheduling", "Engagement"],
      },
      {
        title: "SEO Services",
        description: "Improve how your site ranks and performs in search results.",
        features: ["On-page SEO", "Technical SEO", "Keyword research"],
      },
      {
        title: "Paid Advertising",
        description: "Targeted ad campaigns that put your business in front of the right people.",
        features: ["Facebook Ads", "Instagram Ads", "Google Ads"],
      },
      {
        title: "Content Marketing",
        description: "Written content that informs, ranks, and converts.",
        features: ["Blog writing", "Email marketing", "Website content"],
      },
    ],
  },
]

const faqs = [
  {
    q: "I'm not sure which package fits my project what should I do?",
    a: "That's normal, and most projects don't fit a category perfectly. Tell us roughly what you're trying to build and who it's for, and we'll recommend the closest package or put together a custom scope whichever makes more sense.",
  },
  {
    q: "Can features from different packages be combined?",
    a: "Yes. The packages are starting points, not fixed boxes. If you need an e-commerce site with a blog, or a business website with custom dashboard features, we'll scope it as a one-off based on what you actually need.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope a landing page can be ready in about a week, while a custom web application or e-commerce platform typically takes several weeks. We'll give you a realistic timeline as part of the proposal before any work begins.",
  },
  {
    q: "Do I own the final website, app, or files?",
    a: "Yes, fully. Once a project is delivered and paid for, the code, designs, and assets are yours including source files. We don't lock clients into using us for hosting or future changes, though we're happy to help if you'd like us to.",
  },
  {
    q: "Is hosting and domain registration included?",
    a: "Not by default, but we can set these up for you and walk you through the options. Many clients prefer to own their domain and hosting account directly, and we're happy to support that either way.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a clear idea of what you want to achieve even a rough one is fine. For design-heavy projects, any existing branding, content, or reference sites you like helps speed things up, but we can also help create these from scratch.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left group"
      >
        <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: open ? brand.primary : brand.primaryTint }}
        >
          <svg
            className="w-3.5 h-3.5 transition-transform duration-200"
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              color: brand.primaryDark,
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-gray-500 leading-relaxed pr-12">{a}</p>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── PAGE HEADER ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
            style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
          >
            <span className="text-xs font-semibold tracking-wide" style={{ color: brand.primaryDark }}>
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 max-w-2xl">
            Everything you need to build, run, and grow online
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-2xl">
            Web and mobile development, ongoing maintenance, video, design, and marketing
            all under one roof. Browse by category below, or get in touch and we'll help you
            figure out what fits.
          </p>

          {/* Quick nav */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 transition-colors duration-200"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      {categories.map((cat, idx) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`max-w-6xl mx-auto px-6 py-16 md:py-20 ${idx < categories.length - 1 ? "border-b border-gray-100" : ""}`}
        >
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>
              {cat.label}
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{cat.heading}</h2>
            <p className="mt-3 text-gray-500 leading-relaxed">{cat.blurb}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {cat.tiers.map((tier) => (
              <div
                key={tier.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                onMouseEnter={e => (e.currentTarget.style.borderColor = brand.primaryBorder)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
              >
                <h3 className="font-semibold text-gray-900 mb-1.5">{tier.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{tier.description}</p>
                <ul className="space-y-2 mt-auto">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: brand.primaryDark }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Result strip */}
          <div
            className="rounded-xl border px-5 py-4 flex items-start gap-3"
            style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
          >
            <svg
              className="w-5 h-5 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: brand.primaryDark }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm" style={{ color: brand.primaryDark }}>
              <span className="font-semibold">What you get: </span>
              <span className="opacity-90">{cat.result}</span>
            </p>
          </div>
        </section>
      ))}

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 border-t border-gray-100">
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>FAQ</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">Questions about our services</h2>
          <p className="mt-3 text-gray-500 leading-relaxed">
            Things clients often want to know before reaching out.
          </p>
        </div>
        <div className="divide-y divide-gray-100 border-t border-gray-100">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </main>
  )
}