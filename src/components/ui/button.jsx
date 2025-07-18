import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover hover:scale-105 hover:shadow-lg active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive-hover hover:scale-105 hover:shadow-lg active:scale-95",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:scale-105 hover:shadow-md active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover hover:scale-105 hover:shadow-lg active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline hover:scale-105 active:scale-95",
        gradient: "bg-gradient-primary text-white hover:from-primary-hover hover:to-accent-hover hover:scale-105 hover:shadow-xl active:scale-95",
        glass: "bg-glass backdrop-blur-md border border-glass-border text-white hover:bg-white/20 hover:scale-105 hover:shadow-xl active:scale-95",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 hover:shadow-neon active:scale-95",
        success: "bg-success text-success-foreground hover:bg-success-hover hover:scale-105 hover:shadow-lg active:scale-95",
        warning: "bg-warning text-warning-foreground hover:bg-warning-hover hover:scale-105 hover:shadow-lg active:scale-95",
        subtle: "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground hover:scale-105 active:scale-95"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  children,
  loading = false,
  ripple = true,
  tilt = true, // new prop for 3D tilt
  ...props 
}, ref) => {
  const Comp = asChild ? Slot : "button"

  const buttonContent = (
    <>
      {/* Ripple effect */}
      {ripple && !asChild && (
        <div className="absolute inset-0 overflow-hidden rounded-md pointer-events-none">
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      {/* Animated Glow */}
      <div className="absolute inset-0 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-primary/30 to-secondary/30" />
      {/* Loading spinner */}
      {loading && !asChild && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </motion.div>
      )}
      {/* Content */}
      <span className={cn("relative z-10 flex items-center gap-2", loading && !asChild && "opacity-0")}
        // Animate icons inside button
      >
        {React.Children.map(children, child => {
          if (React.isValidElement(child) && child.type && child.type.displayName === 'FiArrowRight') {
            return React.cloneElement(child, {
              className: cn(child.props.className, 'transition-transform duration-300 group-hover:translate-x-1'),
            });
          }
          return child;
        })}
      </span>
      {/* Gradient overlay for gradient variant */}
      {variant === 'gradient' && !asChild && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
      )}
    </>
  )

  if (asChild) {
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {children}
      </Comp>
    )
  }

  // 3D Tilt effect wrapper
  const ButtonWithTilt = tilt ? (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.04}
      transitionSpeed={250}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="w-full"
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={loading}
          {...props}
        >
          {buttonContent}
        </Comp>
      </motion.div>
    </Tilt>
  ) : (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={loading}
        {...props}
      >
        {buttonContent}
      </Comp>
    </motion.div>
  );

  return ButtonWithTilt;
})
Button.displayName = "Button"

export { Button, buttonVariants } 