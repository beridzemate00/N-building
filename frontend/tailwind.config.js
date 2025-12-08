/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f2f7ff",
          100: "#e6efff",
          200: "#cfe0ff",
          300: "#a9c6ff",
          400: "#78a3ff",
          500: "#3b7bff",
          600: "#1f5de6",
          700: "#1848b3",
          800: "#123585",
          900: "#0e2761"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 42, 98, 0.08)"
      }
    }
  },
  plugins: []
};
