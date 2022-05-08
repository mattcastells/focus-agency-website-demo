module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Main
        'equo-blue': '#3884ff',
        'focus-red': '#EF1257',
        'focus-black': '#0e0f11',
        'dark-secondary': '#3C4D69',
        'secondary': '#B479D2',
        'equo-dark-blue': '#091a28',
        // Grayscale
        'light-gray': '#F6F6F6',
        'light-gray-2': '#E9E9EC',
        'light-gray-3': '#DEDEE3',
        'light-gray-4': '#A7A7B4',
        'dark-gray': '#6A6D74',
        'dark-gray-2': '#2b2e38',
        // Buttons
        'primary-button-hover': '#0A68FF',
        'secondary-button-hover': '#5028C6',
      },
      boxShadow: {
        equo: '0 3px 14px 0px rgba(0, 0, 0, 0.40)',
      },
      screens: {
        'ssm': '380px',
      },
    },
    fontFamily: {
      'focus': ['Readex Pro', 'sans-serif'],
    },
  },
  mode: 'jit',
};

