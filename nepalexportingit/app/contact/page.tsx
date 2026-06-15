"use client"

import { useState } from "react"

const brand = {
  primary: "#F4CE14",
  primaryHover: "#d4ae0f",
  primaryDark: "#b89a0c",
  primaryTint: "#fefbe8",
  primaryBorder: "#faf0a0",
}

const services = [
  "Website Development",
  "Website Maintenance",
  "Mobile App Development",
  "Video Editing",
  "Graphic Design",
  "Digital Marketing",
  "Not sure / general inquiry",
]

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "nepalexportingit2082@gmail.com",
    href: "mailto:nepalexportingit2082@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone / WhatsApp",
    value: "+977-9823687080 ",
    href: "tel:+977-9823687080",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Kathmandu, Nepal",
    href: undefined,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response time",
    value: "Within 1 business day",
    href: undefined,
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire this up to your email service / API endpoint
    setSubmitted(true)
  }

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
              Get in touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 max-w-2xl">
            Let's talk about your project
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-2xl">
            Fill out the form below or reach out directly — either way, you'll hear back from
            us within one business day with honest thoughts and next steps.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">

          {/* Left: contact info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold tracking-tight mb-6">Contact details</h2>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ backgroundColor: brand.primaryTint, color: brand.primaryDark }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-900 hover:underline"
                        style={{ textDecorationColor: brand.primaryDark }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 rounded-2xl border p-6"
              style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
            >
              <h3 className="text-sm font-semibold mb-1.5" style={{ color: brand.primaryDark }}>
                Prefer a quick call?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: brand.primaryDark }}>
                <span className="opacity-90">
                  Mention it in the form and we'll set up a time that works across timezones
                  no pressure, just a conversation about what you need.
                </span>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div
                className="rounded-2xl border p-8 text-center"
                style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder }}
              >
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: brand.primary }}
                >
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Message sent</h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thanks for reaching out — we'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-shadow"
                      style={{ "--tw-ring-color": brand.primaryBorder } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-shadow"
                      style={{ "--tw-ring-color": brand.primaryBorder } as React.CSSProperties}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    What are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 transition-shadow"
                    style={{ "--tw-ring-color": brand.primaryBorder } as React.CSSProperties}
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What are you trying to build? Any timelines, budget range, or references you have in mind..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-shadow resize-none"
                    style={{ "--tw-ring-color": brand.primaryBorder } as React.CSSProperties}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-gray-900 text-sm font-bold rounded-xl transition-all duration-200 shadow-sm"
                  style={{ backgroundColor: brand.primary }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = brand.primaryHover)}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = brand.primary)}
                >
                  Send message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="text-xs text-gray-400 leading-relaxed">
                  By submitting this form, you agree to be contacted about your inquiry.
                  We don't share your information with third parties.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  )
}