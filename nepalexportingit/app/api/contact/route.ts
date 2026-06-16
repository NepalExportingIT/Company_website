import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, service, message } = await req.json()

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "nepalexportingit2082@gmail.com",
      subject: `New inquiry from ${name} — ${service || "General"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111; border-bottom: 2px solid #F4CE14; padding-bottom: 8px;">
            New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Service:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #fefbe8; border-left: 4px solid #F4CE14; padding: 12px 16px; border-radius: 4px;">
            ${message.replace(/\n/g, "<br/>")}
          </p>
          <hr style="margin-top: 24px; border-color: #eee;" />
          <p style="font-size: 12px; color: #999;">
            Sent from the contact form on nepalexportingit.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Resend error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}