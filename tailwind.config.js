/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {        
        primary: {
          50: 'rgb(var(--color-primary-50, 239 246 255) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100, 219 234 254) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200, 191 219 254) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300, 147 197 253) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400, 96 165 250) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500, 59 130 246) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600, 37 99 235) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700, 29 78 216) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800, 30 64 175) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900, 30 58 138) / <alpha-value>)',
        },

        secondary: {
          50: 'rgb(var(--color-secondary-50, 254 235 243) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100, 253 216 231) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200, 251 172 204) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300, 250 133 180) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400, 248 89 152) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500, 246 49 128) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600, 225 10 96) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700, 171 7 73) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800, 112 5 48) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900, 59 3 25) / <alpha-value>)',
        },

        tertiary: {
          50: 'rgb(var(--color-tertiary-50, 243 254 235) / <alpha-value>)',
          100: 'rgb(var(--color-tertiary-100, 231 253 216) / <alpha-value>)',
          200: 'rgb(var(--color-tertiary-200, 204 251 172) / <alpha-value>)',
          300: 'rgb(var(--color-tertiary-300, 180 250 133) / <alpha-value>)',
          400: 'rgb(var(--color-tertiary-400, 152 248 89) / <alpha-value>)',
          500: 'rgb(var(--color-tertiary-500, 128 246 49) / <alpha-value>)',
          600: 'rgb(var(--color-tertiary-600, 96 225 10) / <alpha-value>)',
          700: 'rgb(var(--color-tertiary-700, 73 171 7) / <alpha-value>)',
          800: 'rgb(var(--color-tertiary-800, 48 112 5) / <alpha-value>)',
          900: 'rgb(var(--color-tertiary-900, 25 59 3) / <alpha-value>)',
        },
        surface:{
          50: 'rgb(var(--color-surface-50, 0 255 0) / <alpha-value>)'
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "x", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}  