"use client"

import { EmailSignupForm } from "@/components/ui/email-signup-form"

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <EmailSignupForm 
          id="waitlist-form"
          title="🩺 Postanite dio prve medicinske platforme u BiH"
          subtitle="Prijavite se da saznate više i budete među prvima kada pokrenemo"
          buttonText="Prijavite ordinaciju"
          successTitle="Hvala za interes! 🎉"
          successMessage="Kontaktiraćemo vas uskoro da prikupimo osnovne podatke o vašoj ordinaciji (naziv, adresa, specijalizacija, telefon) i da vidimo kako možemo pomoći."
          className="mb-0"
        />
      </div>
    </section>
  )
}