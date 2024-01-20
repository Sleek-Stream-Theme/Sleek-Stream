// JavaScript to handle scroll animation
document.addEventListener('scroll', function () {
    var scrollWatcher = document.getElementById('scroll-watcher');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;

    // Calculate the percentage scrolled
    var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    // Limit the scale to a maximum of 100%
    var scale = Math.min(scrollPercentage, 100);

    // Apply the scale to the transform property
    scrollWatcher.style.transform = 'scaleX(' + scale / 100 + ')';
});