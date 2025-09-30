"use client"

import { EmailSignupForm } from "@/components/ui/email-signup-form"
import { ArrowDown, Mail, Clock, Star } from "lucide-react"

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="relative pt-12 bg-gradient-to-br from-primary-light/20 via-primary-light/10 to-background overflow-hidden">
      {/* Medical background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/10 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-light/30 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Enhanced medical header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-light rounded-full mb-6 medical-transition hover:scale-110 shadow-medical">
            <ArrowDown className="w-10 h-10 text-primary animate-bounce" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Registrujte se <span className="text-primary medical-gradient bg-clip-text text-transparent">SADA</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unesite email adresu i budite među prvima kada pokrenemo platformu
          </p>
        </div>

        {/* Enhanced medical proof indicators */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center space-x-3 bg-card/90 backdrop-blur border border-primary/20 px-6 py-3 rounded-full trust-shadow medical-transition hover:border-primary/40 hover:shadow-trust-lg">
            <div className="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground">Besplatno pridruživanje</span>
          </div>
          <div className="flex items-center space-x-3 bg-card/90 backdrop-blur border border-primary/20 px-6 py-3 rounded-full trust-shadow medical-transition hover:border-primary/40 hover:shadow-trust-lg">
            <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-success" />
            </div>
            <span className="text-sm font-semibold text-foreground">Registracija za 30 sekundi</span>
          </div>
          <div className="flex items-center space-x-3 bg-card/90 backdrop-blur border border-primary/20 px-6 py-3 rounded-full trust-shadow medical-transition hover:border-primary/40 hover:shadow-trust-lg">
            <div className="w-8 h-8 bg-warning/20 rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-warning" />
            </div>
            <span className="text-sm font-semibold text-foreground">Ekskluzivan pristup</span>
          </div>
        </div>

        {/* Enhanced medical form */}
        <div className="max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <EmailSignupForm
            id="waitlist-form"
            title="📧 Samo unesite Vašu email adresu:"
            subtitle="Jedan email = pristup platformi koja će revolucionizovati zdravstvo u BiH"
            buttonText="✨ PRIDRUŽI SE LISTI"
            successTitle="🎉 Dobrodošli u budućnost zdravstva!"
            successMessage="Kontaktiraćemo vas uskoro da prikupimo osnovne podatke o vašoj ordinaciji (naziv, adresa, specijalizacija, telefon) i da vidimo kako možemo pomoći."
            className="bg-card/95 backdrop-blur-sm trust-shadow-lg border-2 border-primary/20 hover:border-primary/40 medical-transition medical-card rounded-2xl"
          />
          
          {/* Medical urgency indicator */}
          <div className="mt-8 text-center animate-pulse-soft">
            <div className="medical-badge inline-block">
              🚀 Ograničeno vrijeme - pridružite se dok još uvijek možete!
            </div>
          </div>
        </div>

        {/* Enhanced trust indicators */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-muted-foreground mb-6 font-medium">Više od 100+ doktora već čeka pokretanje</p>
          <div className="flex justify-center items-center space-x-2 bg-card/80 backdrop-blur rounded-full px-6 py-3 trust-shadow inline-flex">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-warning fill-current medical-transition hover:scale-110" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <span className="ml-3 text-sm text-foreground font-semibold">5.0 očekivana ocjena</span>
          </div>
        </div>
      </div>
    </section>
  )
}