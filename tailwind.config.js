//  @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#1a1a1a",
        primary: "#f8f9fa",
        // secondary: "#333333",
        secondary: "#dee2e6",
        accent: "#228be6",
      },
    },
  },
  plugins: [],
};
