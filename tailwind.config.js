/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#BF0A30", // Naya Color
          deep: "#990824",    // Hover ke liye thoda dark
        },
        cream: {
          DEFAULT: "#F5EBDD", // Warm Cream
          light: "#FAF7F1",   // Light Cream Background
        },
        charcoal: "#231F1D",
        beige: "#E9DFD1",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(35,31,29,0.04), 0 8px 24px -8px rgba(35,31,29,0.08)",
        lift: "0 4px 12px rgba(35,31,29,0.06), 0 24px 48px -16px rgba(35,31,29,0.14)",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};