/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#EEF5FF",
            100: "#DCE9FF",
            200: "#B9D3FF",
            300: "#86B2FF",
            400: "#4D89FF",
            500: "#0B5FFF",
            600: "#0A50D6",
            700: "#083EA8",
            800: "#062D7A",
            900: "#041B4C",
          },
        },
        boxShadow: {
          soft: "0 10px 40px -20px rgba(11,95,255,0.35)",
        },
        borderRadius: {
          xl2: "1.25rem",
          xl3: "1.75rem",
        },
      },
    },
    plugins: [],
  };
  