/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				textColor: 'var(--text-color)',
				headingColor: 'var(--heading-color)',
				paragraphColor: 'var(--paragraph-color)',
				mainColor: 'var(---main-color)',
				borderColor: 'var(---border-color)',
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundSize: {
				'200': '200% 100%',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				shine: {
				'0%': { 'background-position': '0% 50%' },
				'100%': { 'background-position': '200% 50%' },
				},
				 spotlight: {
				"0%": {
					opacity: 0,
					transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
					opacity: 1,
					transform: "translate(-50%,-40%) scale(1)",
				},},
				pulse: {
				'0%, 100%': { opacity: 1 },
				'50%': { opacity: 0.5 },
				},
				spotlightSweep: {
				'0%': { 
					opacity: 0.3,
					transform: 'translateX(-10%) rotate(-5deg)'
				},
				'100%': { 
					opacity: 0.7,
					transform: 'translateX(0%) rotate(0deg)'
				}
				},
				spotlightSweepRight: {
				'0%': { 
					opacity: 0.3,
					transform: 'translateX(10%) rotate(5deg)'
				},
				'100%': { 
					opacity: 0.7,
					transform: 'translateX(0%) rotate(0deg)'
				}
				},
				scaleIn: {
				'0%': {
					opacity: 0,
					transform: 'scale(0.95)'
				},
				'100%': {
					opacity: 1,
					transform: 'scale(1)'
				}
				},
				fadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 }
				},
				textReveal: {
				'0%': {
					opacity: 0,
					transform: 'translateY(100%)'
				},
				'100%': {
					opacity: 1,
					transform: 'translateY(0)'
				}
				},
				lightBeam: {
				'0%': {
					opacity: 0.2,
					transform: 'translateX(-50%) translateY(-60%) rotate(-15deg)',
					width: '10px'
				},
				'50%': {
					opacity: 0.6,
					transform: 'translateX(-50%) translateY(-50%) rotate(0deg)',
					width: '20px'
				},
				'100%': {
					opacity: 0.2,
					transform: 'translateX(-50%) translateY(-40%) rotate(15deg)',
					width: '10px'
				}
				},
				widthExpand: {
				'0%': {
					width: '0%',
					opacity: 0
				},
				'100%': {
					width: '100%',
					opacity: 1
				}
				},
				spin: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
				},
				subtlePulse: {
				'0%': { opacity: 0.5, transform: 'scale(1)' },
				'50%': { opacity: 0.7, transform: 'scale(1.05)' },
				'100%': { opacity: 0.5, transform: 'scale(1)' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				 spotlight: "spotlight 2s ease .75s 1 forwards",
				'shine': 'shine 2s linear infinite',
				'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'spotlight-sweep': 'spotlightSweep 5s ease infinite alternate',
				'spotlight-sweep-right': 'spotlightSweepRight 5.5s ease infinite alternate',
				'scale-in': 'scaleIn 0.5s ease-out forwards',
				'fade-in': 'fadeIn 0.3s ease-out forwards',
				'text-reveal': 'textReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s',
				'light-beam': 'lightBeam 6s ease-in-out infinite alternate',
				'width-expand': 'widthExpand 0.7s ease-out forwards 0.4s',
				'spin': 'spin 10s linear infinite',
				'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
