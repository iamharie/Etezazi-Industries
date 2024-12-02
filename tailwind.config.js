//  @type {import('tailwindcss').Config}
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // primary: "#1a1a1a",
//         primary: "#f8f9fa",
//         // secondary: "#333333",
//         secondary: "#dee2e6",
//         accent: "#228be6",
//       },
//     },
//   },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a",
          light: "#f8f9fa",
        },
        secondary: {
          DEFAULT: "#333333",
          light: "#dee2e6",
        },
        accent: "#228be6",
        text: {
          dark: "#ffffff",
          light: "#495057", // Darker gray for better contrast on light background
        },
      },
    },
  },
  plugins: [],
};
