/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './vendor.html',
        './public/js/**/*.js',
        './public/css/**/*.css',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
};