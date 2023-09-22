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
        surface: {
          50: 'rgb(var(--color-surface-50, 250 250 250) / <alpha-value>)',
          100: 'rgb(var(--color-surface-100, 243 244 244) / <alpha-value>)',
          200: 'rgb(var(--color-surface-200, 232 235 236) / <alpha-value>)',
          300: 'rgb(var(--color-surface-300, 214 218 220) / <alpha-value>)',
          400: 'rgb(var(--color-surface-400, 187 193 197) / <alpha-value>)',
          500: 'rgb(var(--color-surface-500, 157 165 170) / <alpha-value>)',
          600: 'rgb(var(--color-surface-600, 135 144 150) / <alpha-value>)',
          700: 'rgb(var(--color-surface-700, 113 122 127) / <alpha-value>)',
          800: 'rgb(var(--color-surface-800, 95 101 106) / <alpha-value>)',
          900: 'rgb(var(--color-surface-900, 77 82 86) / <alpha-value>)'
        },
        slate: {
          50: 'rgb(var(--color-slate-50, 248 250 252) / <alpha-value>)',
          100: 'rgb(var(--color-slate-100, 241 245 249) / <alpha-value>)',
          200: 'rgb(var(--color-slate-200, 226 232 240) / <alpha-value>)',
          300: 'rgb(var(--color-slate-300, 203 213 225) / <alpha-value>)',
          400: 'rgb(var(--color-slate-400, 148 163 184) / <alpha-value>)',
          500: 'rgb(var(--color-slate-500, 100 116 139) / <alpha-value>)',
          600: 'rgb(var(--color-slate-600, 71 85 105) / <alpha-value>)',
          700: 'rgb(var(--color-slate-700, 51 65 85) / <alpha-value>)',
          800: 'rgb(var(--color-slate-800, 30 41 59) / <alpha-value>)',
          900: 'rgb(var(--color-slate-900, 15 23 42) / <alpha-value>)'
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