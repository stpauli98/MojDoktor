import { NextResponse } from 'next/server'
import { appendToSheet, checkIfEmailExists } from '@/lib/google-sheets'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, type = 'ordinacija' } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Neispravan email' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const emailExists = await checkIfEmailExists(email)
    if (emailExists) {
      return NextResponse.json(
        { error: 'Email je već registrovan' },
        { status: 400 }
      )
    }

    // Add to Google Sheets
    const timestamp = new Date().toLocaleString('bs-BA', { 
      timeZone: 'Europe/Sarajevo',
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
    
    await appendToSheet([
      email,
      name || '',
      type,
      timestamp,
      'Pending'
    ])

    // Send welcome email
    await sendWelcomeEmail(email, name)

    return NextResponse.json({ 
      success: true,
      message: 'Uspješno ste se prijavili na listu čekanja!'
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Greška prilikom registracije. Pokušajte ponovo.' },
      { status: 500 }
    )
  }
}