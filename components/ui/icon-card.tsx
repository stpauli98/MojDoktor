import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface IconCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'default' | 'problem' | 'solution' | 'compact'
  className?: string
}

export function IconCard({
  icon,
  title,
  description,
  variant = 'default',
  className
}: IconCardProps) {
  const iconColors = {
    default: "bg-primary/10 text-primary",
    problem: "bg-destructive/10 text-destructive",
    solution: "bg-primary/10 text-primary",
    compact: "bg-muted"
  }

  if (variant === 'compact') {
    return (
      <div className={cn("bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow", className)}>
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", iconColors[variant])}>
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    )
  }

  return (
    <Card className={cn("border-border hover:shadow-lg transition-shadow", className)}>
      <CardContent className="p-6">
        <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", iconColors[variant])}>
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}