"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

const faqs = [
  {
    question: "Šta je MojDoktor?",
    answer: "MojDoktor je prva platforma u BiH gdje pacijenti mogu pronaći doktore, pročitati recenzije i zakazati termine online - sve na jednom mjestu."
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
      </div>
    </SectionWrapper>
  )
}