

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation: {
        loopL: "loopTextLeft 4s linear infinite",
      },

      keyframes: {
        loopTextLeft: {
          '0%' : {transfrom: "translateX(0)"},
          "100%" : {transform: "translateX(-100%)"}
        }
      },
      transitionProperty: {
        height: 'height',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
