/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './app/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/utils/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'light': '#FEF6E4',
                'yellow': '#E9C46A',
                'shadow': '#BA9D55',
                'primary': '#525DC0',
                'gray': '#707070',
                'dark': '#2D3748'
            },
            spacing: {
                '104': '26rem',
                '112': '28rem',
                '120': '30rem',
                '128': '32rem',
                '136': '34rem',
                '144': '36rem',
                '152': '38rem',
                '160': '40rem',
                '200': '50rem'
            },
        },
    },
    plugins: [],
} 