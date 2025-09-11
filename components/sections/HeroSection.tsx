import { CheckCircle, TrendingUp, Users, Clock } from "lucide-react"
import { EmailSignupForm } from "@/components/ui/email-signup-form"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main headline */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight">
            Platforma gdje pacijenti
            <span className="text-primary block mt-2">pronalaze doktore u BiH</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Kao Booking.com za hotele. Hiljade pacijenata mjesečno će tražiti doktore na našoj platformi.
            Registrujte se među prvima i budite vidljivi.
          </p>

          {/* Key Benefits for Doctors */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-card p-4 rounded-lg border border-border">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Novi pacijenti</h3>
              <p className="text-sm text-muted-foreground">koji vas pronalaze online</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Online zakazivanje</h3>
              <p className="text-sm text-muted-foreground">24/7 bez poziva</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Vidljivost na Google</h3>
              <p className="text-sm text-muted-foreground">kada traže doktore</p>
            </div>
          </div>

          {/* Waitlist Form */}
          <EmailSignupForm 
            id="waitlist-form"
            title="🩺 Postanite dio prve medicinske platforme u BiH"
            subtitle="Prijavite se da saznate više i budete među prvima kada pokrenemo"
            buttonText="Prijavite ordinaciju"
            successTitle="Hvala za interes! 🎉"
            successMessage="Kontaktiraćemo vas uskoro da razgovaramo o vašim potrebama i kako MojDoktor može pomoći."
            className="mb-0"
          />

        </div>
      </div>
    </section>
  )
}