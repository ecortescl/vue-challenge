/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'curious-blue': {
          50: '#f1f8fe',
          100: '#e2f1fc',
          200: '#bfe1f8',
          300: '#87caf2',
          400: '#47b0e9',
          500: '#1e90cf',
          600: '#1278b7',
          700: '#0f5f95',
          800: '#11517b',
          900: '#144466',
          950: '#0d2c44'
        }
      }
    }
  },
  plugins: ['flowbite/plugin']
}