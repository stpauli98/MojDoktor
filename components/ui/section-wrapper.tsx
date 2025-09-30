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
    <section className={cn("py-20 lg:py-32", className)}>
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {(badge || title || subtitle) && (
          <div className={cn("mb-16", centered && "text-center")}>
            {badge && (
              <div className="medical-badge inline-block mb-4 animate-fade-in" data-scroll data-scroll-delay="0.1">
                {badge}
              </div>
            )}
            {title && (
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight animate-slide-up" data-scroll data-scroll-delay="0.2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                "text-lg lg:text-xl text-muted-foreground animate-slide-up",
                centered && "max-w-3xl mx-auto"
              )} data-scroll data-scroll-delay="0.3">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="animate-fade-in" data-scroll data-scroll-delay="0.4">
          {children}
        </div>
      </div>
    </section>
  )
}