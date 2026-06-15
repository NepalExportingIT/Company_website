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
    title: "1. Services",
    body: [
      "Nepal Exporting IT (\"we\", \"us\", \"our\") provides website development, mobile app development, website maintenance, video editing, graphic design, and digital marketing services to clients (\"you\", \"client\").",
      "The specific scope, deliverables, and timeline for each project will be agreed in writing — via a proposal, quote, or contract — before work begins. These Terms apply alongside, and do not replace, any project-specific agreement.",
    ],
  },
  {
    title: "2. Proposals & Quotes",
    body: [
      "Quotes are based on the information provided at the time of inquiry. If the scope changes once work has started, we will let you know and provide a revised quote before continuing.",
      "Quotes are valid for 30 days unless otherwise stated.",
    ],
  },
  {
    title: "3. Payment Terms",
    body: [
      "Unless otherwise agreed, projects require an upfront deposit before work begins, with the remaining balance due on or before delivery. For ongoing services (maintenance, retainers, monthly packages), payment is due in advance for each billing period.",
      "Work may be paused if payments are significantly overdue. Final files, source code, or completed work will be delivered once payment in full has been received.",
    ],
  },
  {
    title: "4. Revisions & Changes",
    body: [
      "Each project includes a reasonable number of revision rounds, as agreed in the proposal. Additional revisions, or changes requested after a milestone has been approved, may be billed separately.",
      "Requests that fall outside the original agreed scope (new features, additional pages, design changes beyond what was discussed) will be quoted and agreed separately before being carried out.",
    ],
  },
  {
    title: "5. Project Timelines",
    body: [
      "Timelines are estimates based on the agreed scope and assume timely feedback and content from the client. Delays in providing content, feedback, approvals, or access to required accounts (hosting, domains, third-party services) may extend the delivery date accordingly.",
    ],
  },
  {
    title: "6. Intellectual Property & Ownership",
    body: [
      "Once a project is delivered and paid for in full, ownership of the final deliverables — including source code, design files, and other project assets created specifically for you — transfers to you.",
      "We retain the right to showcase completed work in our portfolio, case studies, and marketing materials, unless you request otherwise in writing.",
      "Any third-party tools, libraries, plugins, fonts, or stock assets used in a project remain subject to their own respective licenses.",
    ],
  },
  {
    title: "7. Client Responsibilities",
    body: [
      "You agree to provide accurate information, timely feedback, and any content (text, images, logos, accounts, credentials) needed to complete the project. Delays in providing these may affect timelines as described above.",
      "You're responsible for ensuring that any content you provide (text, images, branding, etc.) doesn't infringe on third-party rights.",
    ],
  },
  {
    title: "8. Maintenance Services",
    body: [
      "Website maintenance packages are available exclusively for websites we have developed, as we maintain direct familiarity with the codebase. Maintenance plans cover the scope described at the time of purchase and do not include major new features unless specified.",
    ],
  },
  {
    title: "9. Confidentiality",
    body: [
      "Any business information, designs, credentials, or materials shared with us during a project are treated as confidential and used solely for the purpose of completing that project.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "We aim to deliver reliable, well-tested work, but we are not liable for indirect, incidental, or consequential damages arising from the use of delivered products, including but not limited to loss of revenue, data, or business opportunities.",
      "Our total liability for any project is limited to the amount paid for that specific project.",
    ],
  },
  {
    title: "11. Termination",
    body: [
      "Either party may terminate an ongoing engagement with written notice, as specified in the relevant proposal or agreement. In the event of termination, you will be billed for work completed up to that point, and any deposit paid is non-refundable once work has commenced.",
    ],
  },
  {
    title: "12. Changes to These Terms",
    body: [
      "We may update these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms. For active projects, the Terms in effect at the time the agreement was signed will continue to apply unless both parties agree otherwise.",
    ],
  },
  {
    title: "13. Governing Law",
    body: [
      "These Terms are governed by the laws of Nepal. Any disputes arising from these Terms or any project agreement will be subject to the jurisdiction of the courts of Nepal.",
    ],
  },
]

export default function Terms() {
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed max-w-2xl">
            These terms outline how we work with clients, including payments, ownership, and
            responsibilities on both sides. Project-specific details are always confirmed in
            writing before work begins.
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
    </main>
  )
}