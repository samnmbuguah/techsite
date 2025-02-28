import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import 'dotenv/config'

// Validate environment variables
const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true
  },
  debug: false
} as SMTPTransport.Options)

// Verify connection configuration
transporter.verify(function(error) {
  if (error) {
    console.error('SMTP Connection Error:', error);
  }
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, phoneNumber, message } = data

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send notification email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber || 'Not provided'}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${firstName} ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber || 'Not provided'}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send auto-reply to the user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
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