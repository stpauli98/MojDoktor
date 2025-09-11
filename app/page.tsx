import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import MarketplaceExplanationSection from "@/components/sections/MarketplaceExplanationSection"
import DoctorSolutionSection from "@/components/sections/DoctorSolutionSection"
import SimpleFAQSection from "@/components/sections/SimpleFAQSection"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <div data-scroll-section>
        <HeroSection />
      </div>
      <div data-scroll-section>
        <MarketplaceExplanationSection />
      </div>
      <div data-scroll-section>
        <DoctorSolutionSection />
      </div>
      <div data-scroll-section>
        <SimpleFAQSection />
      </div>
      <div data-scroll-section>
        <Footer />
      </div>
    </>
  )
}