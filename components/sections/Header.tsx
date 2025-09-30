"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, ArrowRight } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = useCallback(() => {
    try {
      const target = document.querySelector('#waitlist-form')
      if (!target) {
        console.warn('Waitlist form not found')
        return
      }
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((window as any).locomotiveScroll) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).locomotiveScroll.scrollTo(target as HTMLElement)
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    } catch (error) {
      console.error('Error scrolling to waitlist form:', error)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 medical-transition ${
      isScrolled
        ? 'bg-background/95 backdrop-blur-md trust-shadow border-b border-border/50'
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="medical-transition group-hover:scale-110">
              <Stethoscope className="w-7 h-7 text-primary" />
            </div>
            <span className="text-lg font-bold text-foreground medical-transition group-hover:text-primary">
              DoktorOnline
            </span>
          </div>

          {/* Enhanced CTA with medical styling */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="medical-button bg-primary hover:bg-primary-dark text-primary-foreground shadow-medical medical-focus medical-transition hover:shadow-trust-lg hover:scale-105"
            aria-label="Scroll to waitlist signup form"
          >
            <span className="hidden sm:inline">Pridruži se listi</span>
            <span className="sm:hidden">Prijavi se</span>
            <ArrowRight className="w-4 h-4 ml-1 medical-transition group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </header>
  )
}