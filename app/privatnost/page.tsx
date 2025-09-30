import type { Metadata } from "next"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Politika Privatnosti - DoktorOnline",
  description: "Politika privatnosti DoktorOnline platforme. Saznajte kako čuvamo i koristimo vaše podatke u skladu sa GDPR standardima.",
  keywords: "politika privatnosti, GDPR, zaštita podataka, DoktorOnline, privatnost",
  alternates: {
    canonical: "/privatnost"
  },
  openGraph: {
    title: "Politika Privatnosti - DoktorOnline",
    description: "Politika privatnosti DoktorOnline platforme",
    url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL || "https://doktoronline.ba"}/privatnost`,
    type: "website"
  }
}

export default function PrivatnostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Politika Privatnosti
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Uvod</h2>
                <p>
                  DoktorOnline (&quot;mi&quot;, &quot;naša&quot;, &quot;platforma&quot;) posvećena je zaštiti vaše privatnosti.
                  Ova politika privatnosti objašnjava kako prikupljamo, koristimo i štitimo vaše
                  lične podatke kada koristite našu platformu za povezivanje pacijenata i doktora u BiH.
                </p>
                <p>
                  Posljednje ažuriranje: {new Date().toLocaleDateString('bs-BA')}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Podaci koje prikupljamo</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Podaci koje dobrovoljno pružate:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email adresa</strong> - kada se prijavite na listu čekanja</li>
                  <li><strong>Podaci o ordinaciji</strong> - ako ste doktor koji se registruje (naziv, adresa, specijalizacija, radno vrijeme)</li>
                  <li><strong>Kontakt informacije</strong> - telefon, email ordinacije</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">2.2 Automatski prikupljeni podaci:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Analitički podaci</strong> - broj posjetilaca, stranice koje posjećujete (anonimno)</li>
                  <li><strong>Tehnički podaci</strong> - IP adresa, tip browsera, vrijeme pristupa</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Kako koristimo vaše podatke</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Za slanje obavještenja o lansiranju platforme</li>
                  <li>Za komunikaciju sa doktorima o registraciji ordinacije</li>
                  <li>Za poboljšanje kvaliteta naših usluga</li>
                  <li>Za pružanje korisničke podrške</li>
                  <li>Za analizu korištenja platforme (anonimno)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Dijeljenje podataka sa trećim stranama</h2>
                <p>
                  Vaše podatke dijelimo samo u sljedećim slučajevima:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Sheets</strong> - za čuvanje waitlist podataka (bezbijedno enkriptovano)</li>
                  <li><strong>Email provajderi</strong> - za slanje komunikacije (Gmail/Nodemailer)</li>
                  <li><strong>Analitički servisi</strong> - Vercel Analytics (anonimno)</li>
                  <li><strong>Zakonski zahtjevi</strong> - ako to zahtijeva zakon BiH</li>
                </ul>
                <p className="mt-4">
                  <strong>Ne prodajemo</strong> vaše podatke trećim stranama ni u kom slučaju.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Vaša prava</h2>
                <p>
                  U skladu sa GDPR i zakonima BiH, imate pravo na:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Pristup</strong> - možete tražiti kopiju svojih podataka</li>
                  <li><strong>Ispravku</strong> - možete tražiti izmenu netačnih podataka</li>
                  <li><strong>Brisanje</strong> - možete tražiti brisanje svojih podataka</li>
                  <li><strong>Prenosivost</strong> - možete tražiti podatke u mašinski čitljivom formatu</li>
                  <li><strong>Prigovor</strong> - možete da se usprotivite obradi podataka</li>
                  <li><strong>Unsubscribe</strong> - možete se odjaviti sa email liste u bilo kom trenutku</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Bezbjednost podataka</h2>
                <p>
                  Koristimo savremene bezbjednosne mjere za zaštitu vaših podataka:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HTTPS enkriptacija za sve komunikacije</li>
                  <li>Bezbjedne API konekcije sa Google Sheets</li>
                  <li>Redovne bezbjednosne provjere</li>
                  <li>Ograničen pristup podacima samo ovlašćenom osoblju</li>
                  <li>Automatsko brisanje starih i nepotrebnih podataka</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Čuvanje podataka</h2>
                <p>
                  Vaše podatke čuvamo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Email adrese (waitlist)</strong> - do lansiranja platforme + 1 godina</li>
                  <li><strong>Podaci o doktorima</strong> - dok je ordinacija aktivna na platformi</li>
                  <li><strong>Analitički podaci</strong> - maksimalno 2 godine (anonimno)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Kolačići (Cookies)</h2>
                <p>
                  Koristimo minimalan broj kolačića:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Osnovni kolačići</strong> - za funkcioniranje stranice</li>
                  <li><strong>Analitički kolačići</strong> - za poboljšanje korisničkog iskustva (anonimno)</li>
                </ul>
                <p className="mt-4">
                  Možete blokirati kolačiće u postavkama browsera, što neće utjecati na osnovnu funkcionalnost.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Izmjene politike privatnosti</h2>
                <p>
                  Možemo ažurirati ovu politiku privatnosti. O značajnim izmjenama ćemo vas obavijestiti:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email obavještenjem na registrovane adrese</li>
                  <li>Objavom na glavnoj stranici</li>
                  <li>Ažuriranjem datuma na vrhu ovog dokumenta</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Kontakt</h2>
                <p>
                  Za sva pitanja o privatnosti kontaktirajte nas:
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mt-4">
                  <ul className="space-y-2">
                    <li><strong>Email:</strong> <a href={`mailto:${process.env.CONTACT_EMAIL || 'pixelnext9@gmail.com'}`} className="text-blue-600 hover:text-blue-800">{process.env.CONTACT_EMAIL || 'pixelnext9@gmail.com'}</a></li>
                    <li><strong>Telefon:</strong> <a href={`tel:${process.env.CONTACT_PHONE || '+38766603900'}`} className="text-blue-600 hover:text-blue-800">{process.env.CONTACT_PHONE || '+387 66 603 900'}</a></li>
                    <li><strong>Adresa:</strong> Gradiška, Bosna i Hercegovina</li>
                    <li><strong>Radno vrijeme:</strong> Ponedjeljak - Petak, 9:00 - 17:00</li>
                  </ul>
                </div>
              </section>

              <section className="border-t border-gray-200 pt-8">
                <div className="text-center text-sm text-gray-500">
                  <p>
                    Ova politika privatnosti je u skladu sa GDPR (EU 2016/679) i zakonima
                    Bosne i Hercegovine o zaštiti ličnih podataka.
                  </p>
                  <p className="mt-2">
                    Posljednje ažuriranje: {new Date().toLocaleDateString('bs-BA')}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}