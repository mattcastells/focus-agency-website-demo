module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'plugin:tailwindcss/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'vue/multi-word-component-names': 0,
    'max-len': 0,
    'linebreak-style': 0,
    'tailwindcss/no-custom-classname': 0,
  },
};

