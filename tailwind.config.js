module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800020',
        turmeric: '#FFD700',
        emerald: '#228B22',
        charcoal: '#333333',
        offwhite: '#F5F5F5'
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Lora', 'serif'],
        fun: ['Baloo 2', 'cursive']
      }
    }
  },
  plugins: []
}
