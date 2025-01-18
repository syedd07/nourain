/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   // Custom soft white background color
      //   softWhite: '#FAFAFA', // You can adjust this hex value as needed

      //   // Optionally, you can customize primary and secondary colors
      //   primary: {
      //     light: '#3B82F6',
      //     DEFAULT: '#1E3A8A',
      //     dark: '#1E40AF',
      //   },
      //   secondary: {
      //     light: '#FBBF24',
      //     DEFAULT: '#F59E0B',
      //     dark: '#D97706',
      //   },
      // },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Fira Code", "monospace"],
    },
    boxShadow: {
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      'outline-blue': '0 0 0 3px rgba(59, 130, 246, 0.5)',
    },
    transitionProperty: {
      'height': 'height',
    },
    
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
      },
    
    borderRadius: {
      "4xl": "2rem",
    },
  },
  },
  plugins: [],
};
