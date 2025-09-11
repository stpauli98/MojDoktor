import Header from "@/components/sections/Header"
import HeroSection from "@/components/sections/HeroSection"
import MarketplaceExplanationSection from "@/components/sections/MarketplaceExplanationSection"
import DoctorSolutionSection from "@/components/sections/DoctorSolutionSection"
import SimpleFAQSection from "@/components/sections/SimpleFAQSection"
import Footer from "@/components/sections/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MarketplaceExplanationSection />
      <DoctorSolutionSection />
      <SimpleFAQSection />
      <Footer />
    </div>
  )
}