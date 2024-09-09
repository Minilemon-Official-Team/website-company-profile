/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1024px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        blue: "0 25px 50px -12px rgba(0, 0, 255, 0.25)",
      },
      dropShadow: {
        titlePurple: [
          "0 6px 0 rgba(114,4,165,0.8)",
          "-2px 0 0.3px rgba(114,4,165,0.8)",
          "2px 0 0.3px rgba(114,4,165,0.8)",
        ],
        titleBlack: [
          "0 6px 0 rgba(49, 49, 49,0.8)",
          "-2px 0 0.3px rgba(49, 49, 49,0.8)",
          "2px 0 0.3px rgba(49, 49, 49,0.8)",
        ],
        titleRed: [
          "0 6px 0 rgba(144, 27, 1,0.8)",
          "-2px 0 0.3px rgba(144, 27, 1,0.8)",
          "2px 0 0.3px rgba(144, 27, 1,0.8)",
        ],
      },
    },
  },
  plugins: [],
};
