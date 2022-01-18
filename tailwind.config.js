module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui'),],

    // Daisy UI Config
    daisyui: {
        themes: ['dark'],
    },
}
