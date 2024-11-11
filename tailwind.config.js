/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      white: "#F4F4F4",
      gray: {
        1: "#C2C1C4",
        2: "#494650",
        3: "#121212",
        apple: "#2D3541",
      },
      yellow: {
        1: "#EACB74",
        2: "#EDC044",
        3: "#E9B72E",
        4: "#E6A800",
        kakao: "#FEE500",
      },
      green: {
        1: "#83D99B",
        2: "#53CB75",
        3: "#1EC44C",
        4: "#15BC44",
      },
      red: {
        alert: "#FF4949",
      },
    },
    extend: {},
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".text-title": {
          "font-size": "30px",
          "font-weight": "700",
          "line-height": "130%",
          "letter-spacing": "0.0375rem",
        },
        ".text-btn": {
          "font-size": "16px",
          "font-style": "normal",
          "font-weight": 700,
          "line-height": "150%" /* 24px */,
          "letter-spacing": "0.32px",
        },
      });
    },
  ],
};
