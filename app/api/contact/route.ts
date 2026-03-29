import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('Contact API: RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = await request.json()
    const { name, company, email, phone, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Qlass Contact Form <noreply@qlass.co>',
      to: ['info@qlass.co'],
      replyTo: email,
      subject: `Demo Request from ${name}${company ? ` – ${company}` : ''}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>` : ''}
      `,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error))
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    console.log('Email sent successfully, id:', data?.id)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
