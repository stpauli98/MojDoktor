"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, ArrowRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = useCallback(() => {
    const target = document.querySelector('#waitlist-form')
    if (!target) return
    
    if (window.locomotiveScroll) {
      window.locomotiveScroll.scrollTo(target as HTMLElement)
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope className="w-7 h-7 text-primary" />
            <span className="text-lg font-bold text-foreground">DoktorOnline</span>
          </div>

          {/* Single CTA */}
          <Button 
            onClick={scrollToTop}
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            aria-label="Scroll to waitlist signup form"
          >
            <span className="hidden sm:inline">Pridruži se listi</span>
            <span className="sm:hidden">Prijavi se</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </header>
  )
}