import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'glass' | 'elevated' | 'outlined' | 'gradient'
    hover?: boolean
  }
>(({ className, variant = 'default', hover = true, ...props }, ref) => {
  const baseClasses = "rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300"
  
  const variantClasses = {
    default: "bg-card border-border shadow-sm",
    glass: "bg-glass backdrop-blur-md border-glass-border shadow-glass",
    elevated: "bg-card border-border shadow-lg hover:shadow-xl",
    outlined: "bg-transparent border-2 border-border shadow-none",
    gradient: "bg-gradient-surface border-border shadow-lg"
  }
  
  const hoverClasses = hover ? "hover:scale-[1.02] hover:shadow-lg" : ""
  
  return (
    <div
      ref={ref}
      className={cn(
        baseClasses,
        variantClasses[variant],
        hoverClasses,
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-6 rounded-card shadow-card bg-card text-card-foreground transition-shadow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
CardBase.displayName = 'CardBase';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardBase, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
