"use client"

import { Button } from "@/components/ui/button"
import { Stethoscope, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    document.querySelector('#waitlist-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    })
  }

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