"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

const faqs = [
  {
    question: "Šta je DoktorOnline?",
    answer: "DoktorOnline je prva platforma u BiH gdje pacijenti mogu pronaći doktore, pročitati recenzije i zakazati termine online - sve na jednom mjestu."
  },
  {
    question: "Kako će pacijenti pronaći moju ordinaciju?",
    answer: "Kada pacijenti pretražuju doktore po specijalizaciji ili lokaciji (npr. 'zubar Banja Luka'), vaš profil će se pojaviti u rezultatima pretrage."
  },
  {
    question: "Da li moram mijenjati način rada?",
    answer: "Ne. Vi samo prihvatate ili mijenjate termine koje pacijenti zakazuju online. Sve ostalo ostaje isto."
  },
  {
    question: "Kada će platforma biti dostupna?",
    answer: "Trenutno prikupljamo zainteresovane ordinacije. Lansiranje planiramo početkom 2026. godine."
  }
]

export default function SimpleFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SectionWrapper
      className="bg-muted/30"
      badge="ČESTA PITANJA"
      title="Imate pitanja?"
      subtitle="Evo odgovora na najčešća pitanja"
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">
              Još uvijek imate pitanja?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Registrujte se na listu čekanja i naš tim će vam odgovoriti na sva pitanja.
            </p>
            <button 
              onClick={() => document.querySelector('#waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
            >
              Kontaktiraj nas
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}