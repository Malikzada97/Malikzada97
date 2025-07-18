import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Tilt from 'react-parallax-tilt';

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants> & { tilt?: boolean }
>(({ className, variant, size, tilt = true, ...props }, ref) => (
  tilt ? (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.10}
      scale={1.04}
      transitionSpeed={180}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      className="inline-block"
    >
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }), 'transition-shadow duration-300 hover:shadow-lg')}
        {...props}
      />
    </Tilt>
  ) : (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }), 'transition-shadow duration-300 hover:shadow-lg')}
      {...props}
    />
  )
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
