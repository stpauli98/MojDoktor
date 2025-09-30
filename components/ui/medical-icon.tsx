import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MedicalIconProps {
  children: ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "primary" | "secondary" | "success" | "warning"
  animated?: boolean
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-20 h-20"
}

const variantClasses = {
  primary: "bg-primary-light text-primary",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning"
}

export function MedicalIcon({
  children,
  className,
  size = "md",
  variant = "primary",
  animated = false
}: MedicalIconProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full medical-transition",
        sizeClasses[size],
        variantClasses[variant],
        animated && "group-hover:scale-110",
        className
      )}
    >
      {children}
    </div>
  )
}