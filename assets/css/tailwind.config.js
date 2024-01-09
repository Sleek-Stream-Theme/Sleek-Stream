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
                primary: {
                    50: 'rgb(var(--primary-50))',
                    100: 'rgb(var(--primary-100))',
                    200: 'rgb(var(--primary-200))',
                    300: 'rgb(var(--primary-300))',
                    400: 'rgb(var(--primary-400))',
                    500: 'rgb(var(--primary-500))',
                    600: 'rgb(var(--primary-600))',
                    700: 'rgb(var(--primary-700))',
                    800: 'rgb(var(--primary-800))',
                    900: 'rgb(var(--primary-900))',
                },
                secondary: {
                    50: 'rgb(var(--secondary-50))',
                    100: 'rgb(var(--secondary-100))',
                    200: 'rgb(var(--secondary-200))',
                    300: 'rgb(var(--secondary-300))',
                    400: 'rgb(var(--secondary-400))',
                    500: 'rgb(var(--secondary-500))',
                    600: 'rgb(var(--secondary-600))',
                    700: 'rgb(var(--secondary-700))',
                    800: 'rgb(var(--secondary-800))',
                    900: 'rgb(var(--secondary-900))',
                },
                neutral: {
                    50: 'rgb(var(--neutral-50))',
                    100: 'rgb(var(--neutral-100))',
                    200: 'rgb(var(--neutral-200))',
                    300: 'rgb(var(--neutral-300))',
                    400: 'rgb(var(--neutral-400))',
                    500: 'rgb(var(--neutral-500))',
                    600: 'rgb(var(--neutral-600))',
                    700: 'rgb(var(--neutral-700))',
                    800: 'rgb(var(--neutral-800))',
                    900: 'rgb(var(--neutral-900))',
                },
                info: 'rgb(var(--info))',
                success: 'rgb(var(--success))',
                warning: 'rgb(var(--warning))',
                error: 'rgb(var(--error))'
            },
            backgroundColor: {
                'primary-50': 'rgba(var(--primary-50) / var(--tw-border-opacity))',
                'primary-100': 'rgba(var(--primary-100) / var(--tw-border-opacity))',
                'primary-200': 'rgba(var(--primary-200) / var(--tw-border-opacity))',
                'primary-300': 'rgba(var(--primary-300) / var(--tw-border-opacity))',
                'primary-400': 'rgba(var(--primary-400) / var(--tw-border-opacity))',
                'primary-500': 'rgba(var(--primary-500) / var(--tw-border-opacity))',
                'primary-600': 'rgba(var(--primary-600) / var(--tw-border-opacity))',
                'primary-700': 'rgba(var(--primary-700) / var(--tw-border-opacity))',
                'primary-800': 'rgba(var(--primary-800) / var(--tw-border-opacity))',
                'primary-900': 'rgba(var(--primary-900) / var(--tw-border-opacity))',

                'secondary-50': 'rgba(var(--secondary-50)/ var(--tw-border-opacity))',
                'secondary-100': 'rgba(var(--secondary-100) / var(--tw-border-opacity))',
                'secondary-200': 'rgba(var(--secondary-200) / var(--tw-border-opacity))',
                'secondary-300': 'rgba(var(--secondary-300) / var(--tw-border-opacity))',
                'secondary-400': 'rgba(var(--secondary-400) / var(--tw-border-opacity))',
                'secondary-500': 'rgba(var(--secondary-500) / var(--tw-border-opacity))',
                'secondary-600': 'rgba(var(--secondary-600) / var(--tw-border-opacity))',
                'secondary-700': 'rgba(var(--secondary-700) / var(--tw-border-opacity))',
                'secondary-800': 'rgba(var(--secondary-800) / var(--tw-border-opacity))',
                'secondary-900': 'rgba(var(--secondary-900) / var(--tw-border-opacity))',

                'neutral-50': 'rgba(var(--neutral-50) / var(--tw-border-opacity))',
                'neutral-100': 'rgba(var(--neutral-100) / var(--tw-border-opacity))',
                'neutral-200': 'rgba(var(--neutral-200) / var(--tw-border-opacity))',
                'neutral-300': 'rgba(var(--neutral-300) / var(--tw-border-opacity))',
                'neutral-400': 'rgba(var(--neutral-400) / var(--tw-border-opacity))',
                'neutral-500': 'rgba(var(--neutral-500) / var(--tw-border-opacity))',
                'neutral-600': 'rgba(var(--neutral-600) / var(--tw-border-opacity))',
                'neutral-700': 'rgba(var(--neutral-700) / var(--tw-border-opacity))',
                'neutral-800': 'rgba(var(--neutral-800) / var(--tw-border-opacity))',
                'neutral-900': 'rgba(var(--neutral-900) / var(--tw-border-opacity))',
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