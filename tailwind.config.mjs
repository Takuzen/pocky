/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura LT Book", "Arial", "Helvetica", "sans-serif"],
      },
      letterSpacing: {
        wide: "2.4px",
      },
    },
  },
  plugins: [],
};
