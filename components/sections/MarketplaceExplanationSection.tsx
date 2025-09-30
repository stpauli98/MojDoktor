"use client"

import { Search } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export default function MarketplaceExplanationSection() {
  return (
    <SectionWrapper
      className="py-16 lg:py-20 bg-gradient-to-br from-primary-light/20 via-background to-primary-light/20 relative"
      badge="KAKO TO FUNKCIONIŠE"
      title="DoktorOnline povezuje pacijente sa doktorima"
      subtitle="Mjesto gdje pacijenti traže i zakazuju termine kod doktora - sve na jednom mjestu"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Pacijenti dolaze na DoktorOnline da:</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group animate-slide-in-left" data-scroll data-scroll-delay="0.1">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 medical-transition group-hover:scale-110 group-hover:bg-primary">
                  <span className="text-lg font-bold text-primary group-hover:text-white medical-transition">1</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Pretražuju doktore</p>
                  <p className="text-sm text-muted-foreground">Po specijalizaciji, lokaciji, osiguranju</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group animate-slide-in-left" data-scroll data-scroll-delay="0.2">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 medical-transition group-hover:scale-110 group-hover:bg-primary">
                  <span className="text-lg font-bold text-primary group-hover:text-white medical-transition">2</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Čitaju recenzije</p>
                  <p className="text-sm text-muted-foreground">Iskustva drugih pacijenata</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group animate-slide-in-left" data-scroll data-scroll-delay="0.3">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 medical-transition group-hover:scale-110 group-hover:bg-primary">
                  <span className="text-lg font-bold text-primary group-hover:text-white medical-transition">3</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Zakazuju termine online</p>
                  <p className="text-sm text-muted-foreground">24/7, bez telefoniranja</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 trust-shadow-lg border border-primary/20 medical-card animate-slide-in-right" data-scroll data-scroll-delay="0.2">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-foreground">Tipična pretraga na DoktorOnline:</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4 flex items-center gap-3 medical-transition hover:bg-primary-light/50 cursor-pointer group">
                <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary medical-transition" />
                <span className="text-sm text-foreground">&ldquo;Zubar Banja Luka&rdquo;</span>
              </div>
              <div className="bg-muted rounded-lg p-4 flex items-center gap-3 medical-transition hover:bg-primary-light/50 cursor-pointer group">
                <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary medical-transition" />
                <span className="text-sm text-foreground">&ldquo;Ginekolog Sarajevo koji radi vikendom&rdquo;</span>
              </div>
              <div className="bg-muted rounded-lg p-4 flex items-center gap-3 medical-transition hover:bg-primary-light/50 cursor-pointer group">
                <Search className="w-5 h-5 text-muted-foreground group-hover:text-primary medical-transition" />
                <span className="text-sm text-foreground">&ldquo;Pedijatar u blizini sa dobrim recenzijama&rdquo;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-light/30 to-primary-light/10 rounded-2xl p-8 text-center trust-shadow medical-card animate-scale-in" data-scroll data-scroll-delay="0.4">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Budite među prvima na platformi = budite prvi u rezultatima
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Doktori koji se registruju sada imaju prednost. Kada platforma postane popularna,
            vi ćete već imati recenzije, optimizovan profil i bolju poziciju u pretrazi.
          </p>
          <button 
            onClick={() => {
              const target = document.querySelector('#waitlist-form') as HTMLElement
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              if (target && (window as any).locomotiveScroll) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (window as any).locomotiveScroll.scrollTo(target)
              } else if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}
            className="medical-button inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground rounded-xl font-semibold medical-transition shadow-medical hover:shadow-trust-lg hover:scale-105 medical-focus group"
          >
            Registruj ordinaciju sada
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}