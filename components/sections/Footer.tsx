import { Stethoscope, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold text-foreground">DoktorOnline</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Digitalna platforma koja automatizuje ordinacije i dovodi nove pacijente.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-2">
              Pokrećemo uskoro • 2025
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:info@doktoronline.ba" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@doktoronline.ba
                </a>
              </li>
              <li>
                <a href="tel:+38761234567" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +387 66 603 900
                </a>
              </li>
              <li className="text-muted-foreground flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Gradiška, BiH
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Radimo sa:</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Privatne ordinacije • Domovi zdravlja • Poliklinike • Stomatološke ordinacije
            </p>
            <p className="text-xs text-muted-foreground/70">
              Trenutno u fazi razvoja. Prijavite se za rani pristup.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">

          <p className="mt-2">
            Stranicu je napravio{' '}
            <a 
              href="https://www.nextpixel.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next Pixel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}