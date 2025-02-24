import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, phoneNumber, message } = data

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'website@akilinova.com',
      to: 'info@akilinova.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    })

    // Send auto-reply to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'info@akilinova.com',
      to: email,
      subject: 'Thank you for contacting Akilinova',
      text: `
Dear ${firstName},

Thank you for contacting Akilinova. We have received your message and will get back to you shortly.

Best regards,
The Akilinova Team
      `,
      html: `
<h2>Thank you for contacting Akilinova</h2>
<p>Dear ${firstName},</p>
<p>Thank you for contacting Akilinova. We have received your message and will get back to you shortly.</p>
<p>Best regards,<br>The Akilinova Team</p>
      `,
    })

    return NextResponse.json(
      { message: 'Thank you for your message. We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { message: 'There was an error processing your request. Please try again later.' },
      { status: 500 }
    )
  }
} 