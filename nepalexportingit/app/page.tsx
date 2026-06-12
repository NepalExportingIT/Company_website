"use client"

import Link from "next/link"

const brand = {
  primary: "#F4CE14",
  primaryHover: "#d4ae0f",
  primaryDark: "#b89a0c",       
  primaryTint: "#fefbe8",      
  primaryBorder: "#faf0a0",     
  primaryGlow: "#F4CE14",
}

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients worldwide" },
  { value: "6+", label: "Years in business" },
  { value: "98%", label: "On-time delivery" },
]

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "Web and mobile applications designed, built, and deployed to meet your business goals.",
  },

  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 3a3.75 3.75 0 00-3.75 3.75v.5a5.5 5.5 0 104 0v-.5A1.75 1.75 0 0111.75 5h.5A1.75 1.75 0 0114 6.75v.5a5.5 5.5 0 104 0v-.5A3.75 3.75 0 0014.25 3h-4.5z"
        />
      </svg>
    ),
    title: "Technical Consulting",
    description:
      "Strategic guidance on architecture, technology selection, scalability, and product planning.",
  },

  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 12h16M4 18h10"
        />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "Modern, intuitive interfaces designed to improve user experience and engagement.",
  },

  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Quality Assurance",
    description:
      "Comprehensive testing and quality checks to ensure reliability, performance, and stability.",
  },
];

const reasons = [
  {
    title: "Nepal-based, globally delivered",
    body: "Competitive rates, strong English communication, and timezone overlap with Asia and Europe.",
  },
  {
    title: "Accountability at every step",
    body: "You always know who owns what, what's been done, and what's next — no hand-offs, no ambiguity.",
  },
  {
    title: "Works inside your existing stack",
    body: "We join your Slack, use your Jira, and adapt — you don't rebuild your workflow around us.",
  },
  {
    title: "Fixed-scope or ongoing retainer",
    body: "One-time build, a feature sprint, or long-term product support — structured around what you need.",
  },
]

const process = [
  { step: "01", title: "Tell us what you need", body: "A short call or message is enough to get started." },
  { step: "02", title: "Get a clear proposal", body: "Scope, timeline, and price in plain language, within short period of time." },
  { step: "03", title: "We build, you stay in the loop", body: "Regular updates, shared dashboards." },
  { step: "04", title: "Ship and support", body: "We don't disappear after launch. Ongoing support is always available." },
]

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f3f4f6 1px, transparent 1px), linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-[0.18]"
          style={{ background: `radial-gradient(circle, ${brand.primary} 0%, transparent 65%)` }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-40">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-7"
              style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: brand.primary }}
              />
              <span className="text-xs font-semibold tracking-wide" style={{ color: brand.primaryDark }}>
                IT Outsourcing · Kathmandu, Nepal
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
                Grow Your
              <br />
              <span style={{ color: brand.primaryDark }}>Business Digitally.</span>
            </h1>

            <p className="mt-7 text-xl text-gray-500 leading-relaxed max-w-xl">
              We provide full-project delivery to companies worldwide
              on time, on budget, and with clear communication throughout.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gray-900 text-sm font-bold rounded-xl transition-all duration-200 shadow-sm"
                style={{ backgroundColor: brand.primary }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = brand.primaryHover)}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = brand.primary)}
              >
                Get a free quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-xl transition-colors duration-200"
              >
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:px-8">
                <p className="text-3xl font-extrabold tracking-tight" style={{ color: brand.primaryDark }}>{s.value}</p>
                <p className="mt-1 text-xs text-gray-400 uppercase tracking-wider font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>Services</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">What we build</h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors self-start md:self-auto"
            style={{ color: brand.primaryDark }}
          >
            All services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              onMouseEnter={e => (e.currentTarget.style.borderColor = brand.primaryBorder)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl mb-4 transition-colors"
                style={{ backgroundColor: brand.primaryTint, color: brand.primaryDark }}
              >
                {s.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1.5">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-12 max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primary }}>
              Why Nepal Exporting IT
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
              The outsourcing agency that doesn't feel like one.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 transition-colors duration-200"
                onMouseEnter={e => (e.currentTarget.style.borderColor = brand.primaryDark)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
              >
                <h3 className="font-semibold text-white mb-2 text-sm">{r.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              style={{ color: brand.primary }}
            >
              More about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>Process</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">From conversation to code</h2>
          <p className="mt-3 text-gray-500 max-w-md">Getting started is simple. Here's what happens after you reach out.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-5 h-px bg-gray-100 z-0" style={{ width: "calc(100% - 2.5rem)", left: "2.5rem" }} />
              )}
              <div className="relative z-10">
                <span
                  className="inline-block text-xs font-bold rounded-full px-3 py-1 mb-4 tabular-nums border"
                  style={{ color: brand.primaryDark, backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
                >
                  {p.step}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24 md:pb-32">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 md:py-20"
          style={{ backgroundColor: brand.primary }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-30"
            style={{ backgroundColor: brand.primaryHover }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 rounded-full opacity-20"
            style={{ backgroundColor: brand.primaryDark }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                Ready to build something?
              </h2>
              <p className="mt-3 leading-relaxed" style={{ color: "#5a4800" }}>
                Tell us what you need. We'll come back with a clear proposal within one business day —
                no commitment required.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-xl transition-colors duration-200 shadow-sm"
              >
                Get a free quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gray-900/30 hover:border-gray-900/60 text-gray-900 text-sm font-medium rounded-xl transition-colors duration-200"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}