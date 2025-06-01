//configure tailwind to scan source files
//Tells tailwind to apply styles only to components in src file
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
}

