/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    presets: [
        require('./src/plugins/tailwindcss/presets')
    ],
    theme: {
        fontFamily: {
            custom: ['Montserrat Alternates', 'sans-serif'],
        },
        extend: {
            fontFamily: {
                sans: ['Montserrat Alternates', 'sans-serif'],
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities, addComponents }) {
            addUtilities({
                '.timeline-view': { 'animation-timeline': 'view()' },
            })
            addComponents({
            })
        })
    ],
    darkMode: 'selector',
}

