module.exports = {
    purge: ['./dist/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true
        },
        extend: {
            screens: {
                xl: '1200px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
