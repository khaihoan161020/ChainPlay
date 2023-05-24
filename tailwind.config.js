/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        mono: ['var(--font-poppins)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-fire": "linear-gradient(103.7deg, #D71C5D 0%, #FF9017 100%)"
      },
      colors: {
        "dark-blue": "#0F172A",
        "navi": '#334155',
        'blur-gray': '#64748B',
        'dark-rose': '#D71C5D',
        'black-gray': '#151515',
        'white-gray': '#F5F5F5',
        'true-gray': '#737373'
      },
      keyframes: {
        ripple: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(2)" },
        },
      },
      animation: {
        ripple: "ripple 0.3s linear infinite",
      },
    },
  },
  safelist: [
    {
        pattern: /col-span-./,
    }
  ],
  plugins: [],
};
