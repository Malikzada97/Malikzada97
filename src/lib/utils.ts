import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utilities
export const springConfig = {
  tension: 300,
  friction: 30,
  mass: 1
}

export const staggerConfig = {
  delayChildren: 0.1,
  staggerChildren: 0.1
}

// 3D transform utilities
export const create3DTransform = (x: number, y: number, scale: number = 1) => ({
  transform: `perspective(1000px) rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(${scale})`,
  transformStyle: 'preserve-3d' as const
})

// Gradient utilities
export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  success: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  warning: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
  dark: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
}

// Glass morphism effect
export const glassEffect = {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
}

// Hover effects
export const hoverEffects = {
  lift: 'hover:scale-105 hover:-translate-y-2 transition-all duration-300',
  glow: 'hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300',
  border: 'hover:border-primary/50 hover:shadow-lg transition-all duration-300',
  gradient: 'hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300'
}
