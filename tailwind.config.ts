import type { Config } from "tailwindcss";
import animate from 'tailwindcss-animate';

export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				surface: 'hsl(var(--surface))',
				'glass-border': 'rgba(var(--glass-border))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
					muted: 'hsl(var(--primary-muted))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
					muted: 'hsl(var(--secondary-muted))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))',
					muted: 'hsl(var(--accent-muted))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					hover: 'hsl(var(--success-hover))',
					muted: 'hsl(var(--success-muted))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
					hover: 'hsl(var(--warning-hover))',
					muted: 'hsl(var(--warning-muted))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
					hover: 'hsl(var(--destructive-hover))',
					muted: 'hsl(var(--destructive-muted))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['Fira Code', 'Monaco', 'Cascadia Code', 'monospace'],
				display: ['Inter', 'system-ui', 'sans-serif'],
				body: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				// Headings (explicit h1-h6 for clarity)
				'h1': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }], // 36px
				'h2': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }], // 30px
				'h3': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }], // 24px
				'h4': ['1.25rem', { lineHeight: '1.75rem' }], // 20px
				'h5': ['1rem', { lineHeight: '1.5rem' }], // 16px
				'h6': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
				// Custom display sizes
				'display-xs': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.02em' }],
				'display-sm': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
				'display-md': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.02em' }],
				'display-lg': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
				'display-xl': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
				'display-2xl': ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.02em' }],
				'display-3xl': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.02em' }],
				// Body text sizes
				'body-xs': ['0.75rem', { lineHeight: '1.125rem' }],
				'body-sm': ['0.875rem', { lineHeight: '1.375rem' }],
				'body-base': ['1rem', { lineHeight: '1.625rem' }],
				'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'body-xl': ['1.25rem', { lineHeight: '1.875rem' }],
				'body-2xl': ['1.5rem', { lineHeight: '2.125rem' }],
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			},
			lineHeight: {
				'tight': '1.25',
				'snug': '1.375',
				'normal': '1.5',
				'relaxed': '1.625',
				'loose': '2',
			},
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'normal': '0em',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em',
			},
			borderRadius: {
				// Card and button radii
				'card': '1rem',      // 16px
				'button': '0.75rem', // 12px
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem',
			},
			spacing: {
				// Standardized 8px scale for vertical spacing
				'4': '1rem',    // 16px
				'6': '1.5rem',  // 24px
				'8': '2rem',    // 32px
				'10': '2.5rem', // 40px
				'12': '3rem',   // 48px
				'16': '4rem',   // 64px
				'20': '5rem',   // 80px
				'24': '6rem',   // 96px
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
				'144': '36rem',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-from-top': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-in-from-bottom': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'slide-in-from-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-from-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'rotate-in': {
					'0%': { opacity: '0', transform: 'rotate(-180deg) scale(0.3)' },
					'100%': { opacity: '1', transform: 'rotate(0) scale(1)' }
				},
				'bounce-in': {
					'0%': { opacity: '0', transform: 'scale(0.3)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in-from-top': 'slide-in-from-top 0.5s ease-out',
				'slide-in-from-bottom': 'slide-in-from-bottom 0.5s ease-out',
				'slide-in-from-left': 'slide-in-from-left 0.5s ease-out',
				'slide-in-from-right': 'slide-in-from-right 0.5s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'rotate-in': 'rotate-in 0.5s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
			},
			boxShadow: {
				// Card shadow
				'card': '0 4px 24px rgba(0,0,0,0.08)',
				'soft': '0 2px 8px -2px hsl(220 15% 25% / 0.08)',
				'medium': '0 4px 16px -4px hsl(220 15% 25% / 0.12)',
				'strong': '0 8px 32px -8px hsl(220 15% 25% / 0.16)',
				'glow': '0 0 32px hsl(217 91% 60% / 0.25)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
				'inner-soft': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
				'inner-medium': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
				'neon': '0 0 20px hsl(217 91% 60% / 0.5)',
				'neon-lg': '0 0 40px hsl(217 91% 60% / 0.3)',
			},
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				'md': '12px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '40px',
				'3xl': '64px',
			},
			backgroundColor: {
				'glass': 'rgba(255, 255, 255, 0.1)',
				'glass-bg': 'rgba(var(--glass-bg))',
				'glass-border': 'rgba(var(--glass-border))'
			},
			backgroundImage: {
				'gradient-mesh': 'conic-gradient(from 180deg at 50% 50%, hsl(217 91% 60% / 0.8) 0deg, hsl(269 90% 65% / 0.8) 180deg, hsl(217 91% 60% / 0.8) 360deg)',
				'gradient-radial': 'radial-gradient(circle at 50% 50%, hsl(217 91% 60% / 0.3) 0%, transparent 50%)',
				'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
				'gradient-secondary': 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 100%)',
				'gradient-surface': 'linear-gradient(135deg, hsl(var(--surface)) 0%, hsl(var(--background)) 100%)',
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			}
		}
	},
	plugins: [animate],
} satisfies Config;
