import { TrendingUp, Users, Clock } from "lucide-react"
import WaitlistSection from "./WaitlistSection"
export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 lg:pt-28 lg:pb-16 bg-gradient-to-br from-background via-primary-light/30 to-background relative overflow-hidden">
      {/* Medical background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main headline with medical badge */}
          <div className="mb-6 animate-fade-in">
            <div className="medical-badge inline-block mb-4">
              • Medicinska platforma •
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            Platforma gdje pacijenti
            <span className="text-primary block mt-2 medical-gradient bg-clip-text text-transparent">
              pronalaze doktore u BiH
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Kao Booking.com za hotele. Hiljade pacijenata mjesečno će tražiti doktore na našoj platformi.
            <span className="block mt-2 text-primary font-semibold">Registrujte se među prvima i budite vidljivi.</span>
          </p>

          {/* Key Benefits for Doctors with enhanced medical styling */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="medical-card bg-card p-6 rounded-xl border border-border trust-shadow group hover:border-primary/20">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 medical-transition group-hover:scale-110">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Novi pacijenti</h3>
              <p className="text-sm text-muted-foreground">koji vas pronalaze online</p>
            </div>
            <div className="medical-card bg-card p-6 rounded-xl border border-border trust-shadow group hover:border-primary/20" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 medical-transition group-hover:scale-110">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Online zakazivanje</h3>
              <p className="text-sm text-muted-foreground">24/7 bez poziva</p>
            </div>
            <div className="medical-card bg-card p-6 rounded-xl border border-border trust-shadow group hover:border-primary/20" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 medical-transition group-hover:scale-110">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Vidljivost na Google</h3>
              <p className="text-sm text-muted-foreground">kada traže doktore</p>
            </div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <WaitlistSection />
          </div>
        </div>
      </div>
    </section>
  )
}