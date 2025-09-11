import { CheckCircle, Calendar, Users, Globe, MessageSquare, ChartBar, Bell } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { IconCard } from "@/components/ui/icon-card"

const solutions = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Platforma sa hiljadama pacijenata",
    description: "Pacijenti pretražuju doktore po lokaciji, specijalizaciji i recenzijama"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Vaš profil na vrhu pretrage",
    description: "Optimizovan za Google - kad traže 'zubar Banja Luka', nalaze vas"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Online zakazivanje direktno",
    description: "Pacijenti zakazuju termine 24/7 bez pozivanja"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Stvarne recenzije pacijenata",
    description: "Pozitivne recenzije privlače nove pacijente"
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Automatski podsjetnici",
    description: "SMS i email podsjetnici smanjuju otkazivanja"
  },
  {
    icon: <ChartBar className="w-6 h-6" />,
    title: "Vidite odakle dolaze pacijenti",
    description: "Analitika pokazuje koje pretrage vas dovode"
  }
]

export default function DoctorSolutionSection() {
  return (
    <SectionWrapper
      badge="KAKO FUNKCIONIŠE MOJDOKTOR"
      title="Platforma gdje pacijenti pronalaze doktore"
      subtitle="Budite vidljivi tamo gdje pacijenti aktivno traže doktore"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <IconCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              variant="solution"
            />
          ))}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Zašto biti na DoktorOnline platformi?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Prva i jedina platforma ove vrste u BiH</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Pacijenti vas pronalaze po lokaciji i specijalizaciji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Konkurencija koja nije tu, gubi pacijente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>Rani korisnici imaju prednost u pretrazi</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-8 shadow-xl border border-primary/20">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4">Vaša konkurencija koja nije na platformi:</h4>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">❌ Nevidljiva online</p>
                    <p className="text-muted-foreground">❌ Gubi pacijente</p>
                    <p className="text-muted-foreground">❌ Nema recenzije</p>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-semibold text-primary">
                      Budite ispred njih.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}