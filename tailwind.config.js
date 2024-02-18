/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-orange': 'radial-gradient(#ff3131, #ff914D)',
        'gradient-random': 'radial-gradient(#ff3131, #rrrrrr)',
      },
    },
  },
  plugins: [],
}

