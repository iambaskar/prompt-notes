/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": " rgb(58, 16, 120)",
      },
      before: ["responsive"],
      keyframes: {
        "scroll-vertical": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "scroll-vertical": "scroll-vertical 25s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "2rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
