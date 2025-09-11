"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

interface EmailSignupFormProps {
  id?: string
  title?: string
  subtitle?: string
  buttonText?: string
  successTitle?: string
  successMessage?: string
  className?: string
  variant?: 'default' | 'compact'
  showPrivacy?: boolean
}

export function EmailSignupForm({
  id,
  title = "🎉 Budite među prvima!",
  subtitle = "Prijavite se na listu čekanja i dobijte ekskluzivan pristup",
  buttonText = "Pridruži se listi",
  successTitle = "Hvala na prijavi! 🎊",
  successMessage = "Dobićete email čim platforma bude spremna.",
  className,
  variant = 'default',
  showPrivacy = true
}: EmailSignupFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        toast({
          title: "Greška",
          description: data.error || 'Greška pri prijavi. Molimo pokušajte ponovo.',
          variant: "destructive",
        })
      }
    } catch {
      toast({
        title: "Greška",
        description: 'Greška pri prijavi. Molimo pokušajte ponovo.',
        variant: "destructive",
      })
    }
    
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className={cn(
        "bg-primary/10 p-8 rounded-2xl max-w-xl mx-auto",
        className
      )}>
        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">{successTitle}</h3>
        <p className="text-muted-foreground">{successMessage}</p>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="vas@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 bg-background"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="lg" 
            className="h-12 px-8 bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? "Prijavljivanje..." : (
              <>
                {buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    )
  }

  return (
    <div id={id} className={cn(
      "bg-card/50 backdrop-blur p-8 rounded-2xl shadow-xl border max-w-xl mx-auto",
      className
    )}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{subtitle}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="vas@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 bg-background"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="lg" 
            className="h-12 px-8 whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? "Prijavljivanje..." : (
              <>
                {buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>

      {showPrivacy && (
        <p className="text-xs text-muted-foreground mt-4">
          Bez spama. Možete se odjaviti u bilo kom trenutku.
        </p>
      )}
    </div>
  )
}