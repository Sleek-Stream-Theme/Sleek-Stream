// ==================================================================================
//                              Scroll Watcher
// ==================================================================================

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


// ==================================================================================
//                              Scroll To Top
// ==================================================================================
var scrollToTop = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}

// Use a function reference instead of invoking the function here
scrollToTop.onclick = function () {
    scrollToTopFunction();
};

function scrollToTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

