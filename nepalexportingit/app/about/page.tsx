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

const values = [
  {
    title: "Clarity over complexity",
    body: "We write plain-language proposals, give weekly updates without being asked, and flag risks before they become problems. You'll never have to chase us for a status update.",
  },
  {
    title: "Ownership, not hand-offs",
    body: "One point of contact from kickoff to launch. No project manager layers, no lost-in-translation moments between sales and delivery.",
  },
  {
    title: "Long-term thinking",
    body: "We build code we'd be comfortable maintaining ourselves — because often, we are. Every decision is made with future maintainability in mind.",
  },
  {
    title: "Honest timelines",
    body: "We'd rather push back on an unrealistic deadline upfront than scramble and cut corners at the end. Realistic estimates, kept commitments.",
  },
]

const techAreas = [
  "React / Next.js", "Node.js", "Python / Django", "React Native",
  "PostgreSQL / MongoDB", "AWS / GCP", "Figma", "TypeScript",
]

const faqs = [
  {
    q: "Where are you based, and does that affect communication?",
    a: "We're based in Kathmandu, Nepal. We work in overlap-friendly hours with clients in Europe, Australia, and Asia. All communication is in English, and we use whatever tools you already use Slack, Teams, email.",
  },
  {
    q: "How do you handle project updates and transparency?",
    a: "You get a shared project board from day one. We send weekly written summaries and are available for calls as needed. If something changes timeline, scope, a technical blocker you hear about it immediately, not at the next check-in.",
  },
  {
    q: "What size of projects do you take on?",
    a: "We work on focused, well-defined projects from a single feature build to a full product launch. We're not the right fit for large enterprise programmes that need on-site teams, but for everything in between, we're well-suited.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Many of our clients stay on a monthly retainer for bug fixes, small features, and technical support after the initial project wraps. We don't disappear after go-live.",
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

export default function About() {
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
              About Nepal Exporting IT
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Who we are and how we work
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-2xl">
            A software development firm situated in Kathmandu, Nepal. In order to create digital products 
            with the accountability and transparency that outsourcing typically lacks, we collaborate with
            startups and companies all around the world.

          </p>
        </div>
      </section>

      {/* ── PURPOSE ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16">

          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>
              Why we exist
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">The problem we're solving</h2>
          </div>

          <div className="md:col-span-3 space-y-4 text-gray-600 leading-relaxed">
            <p>
              The reputation of outsourcing is a problem that must be acquired. After hiring foreign teams 
              and receiving a sophisticated sales pitch, companies have to spend months tracking down updates, 
              deciphering ambiguous status reports, and repairing unreadable code.
            </p>
            <p>
              Nepal Exporting IT exists to be the alternative. As a small, committed team, we approach every 
              project as though our name were on it, and we really do. Because we only work with a small number 
              of clients at once, each one receives genuine attention rather than a place in a rotation.
            </p>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── HOW WE OPERATE ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16">

          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>
              How we operate
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">What working with us looks like</h2>
          </div>

          <div className="md:col-span-3 space-y-4 text-gray-600 leading-relaxed">
            <p>
              We start every engagement with a scoping call free, no commitment. We want to
              understand the problem before we talk about solutions. From there, you get a written
              proposal: scope, timeline, and price in plain English.
            </p>
            <p>
              During the build, you have full visibility. We work inside your preferred tools
              Jira, Linear, Notion, Slack, whatever you already use. We don't ask you to learn a
              new system or adapt to our workflow.
            </p>
            <p>
              We communicate proactively. If something changes, you hear about it from us before
              it becomes a problem. Surprises on launch day aren't acceptable to us.
            </p>
          </div>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── WHERE WE'RE BASED ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16">

          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>
              Location
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Based in Nepal, working worldwide</h2>
          </div>

          <div className="md:col-span-3 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Being Nepal-based means competitive rates without the quality compromise.
              Nepal has a strong engineering culture, solid English proficiency, and a
              timezone that overlaps meaningfully with both Asia and Europe.
            </p>
          </div>

        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primary }}>
              Our principles
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">
              What we hold ourselves to
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 transition-colors duration-200"
                onMouseEnter={e => (e.currentTarget.style.borderColor = brand.primaryDark)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
              >
                <h3 className="font-semibold text-white mb-2 text-sm">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">

          <div className="md:col-span-2">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>Stack</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">Technologies we work with</h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              We use modern, well-supported tools. No exotic stacks that are hard to hand off or find help for.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-wrap gap-2 pt-1">
            {techAreas.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                style={{ backgroundColor: brand.primaryTint, borderColor: brand.primaryBorder, color: brand.primaryDark }}
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* ── FAQ ── */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: brand.primaryDark }}>FAQ</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">Common questions</h2>
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