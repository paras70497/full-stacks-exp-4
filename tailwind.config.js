export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4850e5",
        "primary-dark": "#3b42c4",
        "primary-light": "#eef0ff",
        "primary-content": "#ffffff",
        "background-light": "#f6f6f8", 
        "background-dark": "#111221",
        "surface-light": "#ffffff",
        "surface-dark": "#1a1b2e",
        "text-main": "#0e0f1b",
        "text-secondary": "#505495",
        "text-muted": "#505495",
        "neutral-light": "#e0e7ff",
        "neutral-dark": "#2a2d4a"
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(72, 80, 229, 0.04), 0 2px 4px -1px rgba(72, 80, 229, 0.02)',
        'hover': '0 10px 15px -3px rgba(72, 80, 229, 0.08), 0 4px 6px -2px rgba(72, 80, 229, 0.04)',
      }
    },
  },
  plugins: [],
}
