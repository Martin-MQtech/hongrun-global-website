/** Tailwind build config — official Hongrun VI V3.0 palette.
 *  Replaces the Tailwind Play CDN (cdn.tailwindcss.com) with a precompiled CSS.
 *  Rebuild:  npx tailwindcss@3.4.14 -i assets/css/tailwind-input.css -o assets/css/tailwind.css
 */
module.exports = {
  content: [
    "./*.html",
    "./articles/**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        display: ["Oswald", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#0F4C81",
          deep: "#0C3D6B",
          sky: "#0EA5E9",
          dark: "#0F172A",
          light: "#F1F5F9",
          accent: "#EA580C",
          gold: "#EAB308",
        },
      },
    },
  },
  plugins: [],
};
