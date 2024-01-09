/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite/**/*.js",
        'node_modules/preline/dist/*.js',
        "./themes/**/layouts/**/*.html",
        "./content/**/layouts/**/*.html",
        "./layouts/**/*.html",
        "./content/**/*.html"
    ],
    theme: {
        fontFamily: {
            'heading': 'var(--heading)',
            'body': 'var(--body)'
        },
        extend: {
            colors: {
                primary: 'rgb(var(--primary))',
                secondary: 'rgb(var(--secondary))',
                accent: 'rgb(var(--accent))',
                neutral: 'rgb(var(--neutral))',
                base: 'rgb(var(--base))',
                info: 'rgb(var(--info))',
                success: 'rgb(var(--success))',
                warning: 'rgb(var(--warning))',
                error: 'rgb(var(--error))'
            },
            backgroundColor: {
                'primary': 'rgba(var(--primary) / var(--tw-border-opacity))',
                'secondary': 'rgba(var(--secondary)/ var(--tw-border-opacity))',
                'accent': 'rgba(var(--accent) / var(--tw-border-opacity))',
                'neutral': 'rgba(var(--neutral) / var(--tw-border-opacity))',
                'base': 'rgba(var(--base) / var(--tw-border-opacity))',
                'info': 'rgba(var(--info) / var(--tw-border-opacity))',
                'success': 'rgba(var(--success) / var(--tw-border-opacity))',
                'warning': 'rgba(var(--warning) / var(--tw-border-opacity))',
                'error': 'rgba(var(--error) / var(--tw-border-opacity))'
            }
        },
    },
    plugins: [
        require('flowbite/plugin'),
        require('preline/plugin'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries')
    ]
}