import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  badge?: string
  title?: string
  subtitle?: string
  centered?: boolean
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  badge,
  title,
  subtitle,
  centered = true
}: SectionWrapperProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {(badge || title || subtitle) && (
          <div className={cn("mb-16", centered && "text-center")}>
            {badge && (
              <p className="text-primary font-semibold mb-3 uppercase text-sm">{badge}</p>
            )}
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                "text-lg text-muted-foreground",
                centered && "max-w-2xl mx-auto"
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}