import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal", "sans-serif"],
      },
      colors: {
        // Brand warm brown palette
        brand: {
          bg: "#FDFBF7",
          card: "#FFFFFF",
          text: "#4A2E1B",
          "text-light": "#7A5C45",
          "text-subtle": "#A08060",
          primary: "#8B5E3C",
          "primary-dark": "#6B4428",
          "primary-light": "#B07A50",
          accent: "#D4936A",
          "accent-light": "#F0C8A0",
          border: "#E8D5C0",
          "border-light": "#F2E8DC",
          gold: "#C49A5A",
          "gold-light": "#F0D898",
          warm: "#FFF8F0",
          "section-alt": "#FAF5EE",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37,211,102,0.6)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 0 12px rgba(37,211,102,0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "counter-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
        "pulse-wa": "pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #FDFBF7 0%, #F5EDE0 40%, #EDD8C0 100%)",
        "card-gradient": "linear-gradient(145deg, #FFFFFF 0%, #FDF8F2 100%)",
        "primary-gradient": "linear-gradient(135deg, #8B5E3C 0%, #6B4428 100%)",
        "gold-gradient": "linear-gradient(135deg, #C49A5A 0%, #A07840 100%)",
        "accent-gradient": "linear-gradient(135deg, #D4936A 0%, #B07050 100%)",
      },
      boxShadow: {
        "card": "0 4px 24px rgba(74, 46, 27, 0.08), 0 1px 4px rgba(74, 46, 27, 0.04)",
        "card-hover": "0 12px 40px rgba(74, 46, 27, 0.15), 0 4px 12px rgba(74, 46, 27, 0.08)",
        "btn": "0 4px 16px rgba(139, 94, 60, 0.35)",
        "btn-hover": "0 8px 24px rgba(139, 94, 60, 0.50)",
        "wa": "0 4px 20px rgba(37, 211, 102, 0.4)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
