/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(217, 91%, 60%)',
        'primary-hover': 'hsl(217, 91%, 55%)',
        background: 'hsl(220, 20%, 97%)',
        foreground: 'hsl(220, 20%, 12%)',
        card: 'hsl(0, 0%, 100%)',
        secondary: 'hsl(220, 15%, 96%)',
        muted: 'hsl(220, 13%, 94%)',
        accent: 'hsl(210, 40%, 96%)',
        border: 'hsl(220, 13%, 88%)',
      }
    },
  },
  plugins: [],
};
