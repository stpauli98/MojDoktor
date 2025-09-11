"use client"

import { Search } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export default function MarketplaceExplanationSection() {
  return (
    <SectionWrapper
      className="bg-gradient-to-br from-primary/5 via-background to-primary/5"
      badge="KAKO TO FUNKCIONIŠE"
      title="DoktorOnline povezuje pacijente sa doktorima"
      subtitle="Mjesto gdje pacijenti traže i zakazuju termine kod doktora - sve na jednom mjestu"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Pacijenti dolaze na DoktorOnline da:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-semibold">Pretražuju doktore</p>
                  <p className="text-sm text-muted-foreground">Po specijalizaciji, lokaciji, osiguranju</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-semibold">Čitaju recenzije</p>
                  <p className="text-sm text-muted-foreground">Iskustva drugih pacijenata</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-semibold">Zakazuju termine online</p>
                  <p className="text-sm text-muted-foreground">24/7, bez telefoniranja</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-lg border border-primary/20">
            <div className="text-center mb-6">
              <h4 className="text-lg font-bold mb-2">Tipična pretraga na DoktorOnline:</h4>
            </div>
            <div className="space-y-3">
              <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">&ldquo;Zubar Banja Luka&rdquo;</span>
              </div>
              <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">&ldquo;Ginekolog Sarajevo koji radi vikendom&rdquo;</span>
              </div>
              <div className="bg-muted rounded-lg p-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm">&ldquo;Pedijatar u blizini sa dobrim recenzijama&rdquo;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
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
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
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