module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  mode: 'jit',
  plugins: [
    require('daisyui'),
  ],
  purge: [
    '{layouts,pages,components}/**/*.{j,t}s*'
  ],
  daisyui: {
    styled: true,
    themes: [
      'emerald',
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
