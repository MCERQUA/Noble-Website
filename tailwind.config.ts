import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0d141a",
          50: "#f3f4f5",
          100: "#e7e9ea",
          200: "#c3c7cb",
          300: "#9fa5ab",
          400: "#57616c",
          500: "#0d141a",
          600: "#0b1117",
          700: "#090e13",
          800: "#070b0f",
          900: "#050809"
        },
        secondary: {
          DEFAULT: "#e36b20",
          50: "#fef8f4",
          100: "#fdf1e9",
          200: "#fcdcc7",
          300: "#fac7a5",
          400: "#f69c61",
          500: "#e36b20",
          600: "#cc601d",
          700: "#aa5018",
          800: "#883f13",
          900: "#70340f"
        }
      },
      fontFamily: {
        sans: ["'Lato'", "system-ui", "sans-serif"],
        heading: ["'Lato'", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "shimmer": "shimmer 1.5s infinite",
        "spin": "spin 1s linear infinite",
        "pulse-scale": "pulseScale 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        pulseScale: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
} satisfies Config