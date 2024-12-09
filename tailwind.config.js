import tailwindcssAnimate from "tailwindcss-animate"
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
  	container: {
  		center: 'true'
  	},
  	fontFamily: {
  		sans: ["Switzer-Variable", "ui-sans-serif", "system-ui", "sans-serif"]
  	},
  	extend: {
  		borderRadius: {
  			sm: 'calc(var(--radius) - 2px)',
  			DEFAULT: 'var(--radius)',
  			md: 'var(--radius)',
  			lg: 'calc(var(--radius) + 2px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'fade-left': {
  				from: {
  					opacity: '0',
  					transform: 'translateX(-10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-right': {
  				from: {
  					opacity: '0',
  					transform: 'translateX(10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-up': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-down': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(-10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in': {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			'fade-out': {
  				from: {
  					opacity: '1'
  				},
  				to: {
  					opacity: '0'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			}
  		},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			shine: 'shine var(--duration) infinite linear',
  			'fade-left': 'fade-left 0.2s ease-out',
  			'fade-right': 'fade-right 0.2s ease-out',
  			'fade-up': 'fade-up 0.2s ease-out',
  			'fade-down': 'fade-down 0.2s ease-out',
  			'fade-in': 'fade-in 0.2s ease-out',
  			'fade-out': 'fade-out 0.2s ease-out',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			gradient: 'gradient 8s linear infinite'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
}
