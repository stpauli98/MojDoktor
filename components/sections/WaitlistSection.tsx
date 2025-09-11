"use client"

import { EmailSignupForm } from "@/components/ui/email-signup-form"
import { ArrowDown, Mail, Clock, Star } from "lucide-react"

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Attention-grabbing header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Registrujte se <span className="text-primary">SADA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unesite email adresu i budite među prvima kada pokrenemo platformu
          </p>
        </div>

        {/* Social proof indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Besplatno pridruživanje</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium">Registracija za 30 sekundi</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">Ekskluzivan pristup</span>
          </div>
        </div>

        {/* Enhanced form */}
        <div className="max-w-2xl mx-auto">
          <EmailSignupForm 
            id="waitlist-form"
            title="📧 Samo unesite Vašu email adresu:"
            subtitle="Jedan email = pristup platformi koja će revolucionizovati zdravstvo u BiH"
            buttonText="✨ PRIDRUŽI SE LISTI"
            successTitle="🎉 Dobrodošli u budućnost zdravstva!"
            successMessage="Kontaktiraćemo vas uskoro da prikupimo osnovne podatke o vašoj ordinaciji (naziv, adresa, specijalizacija, telefon) i da vidimo kako možemo pomoći."
            className="bg-white/90 backdrop-blur-sm shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-[1.02]"
          />
          
          {/* Urgency indicator */}
          <div className="mt-6 text-center">
            <p className="text-sm text-primary font-semibold bg-primary/10 inline-block px-4 py-2 rounded-full">
              🚀 Ograničeno vrijeme - pridružite se dok još uvijek možete!
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground mb-4">Više od 100+ doktora već čeka pokretanje</p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">5.0 očekivana ocjena</span>
          </div>
        </div>
      </div>
    </section>
  )
}