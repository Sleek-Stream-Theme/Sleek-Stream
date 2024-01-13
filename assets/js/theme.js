/* This code is responsible for implementing a theme toggle functionality on a web page using
JavaScript. */
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle between moon and sun icons
const iconToggle = () => {
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
};

// Function to check and set the theme
const themeCheck = () => {
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userTheme === 'dark' || (userTheme === null && systemTheme)) {
        document.documentElement.classList.add('dark');
        iconToggle(); // Hide the sun icon if in dark mode
        return;
    }
};

// Function to switch the theme
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    iconToggle(); // Toggle the icons based on the new theme
};

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    themeSwitch();
});

// Set the initial theme on page load
document.addEventListener('DOMContentLoaded', () => {
    themeCheck();
});