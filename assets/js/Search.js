// ==================================================================================
//                              Search Modal 
// ==================================================================================


// Add another event listener to the entire document for keydown events
document.addEventListener('keydown', function (event) {
    // Check if the '/' key is pressed and focus is not on an input, textarea, or select element
    if (event.key === '/' && !event.target.tagName.toLowerCase().match(/input|textarea|select/)) {
        // Prevent the default '/' behavior (e.g., in the browser's address bar)
        event.preventDefault();

        // Simulate a click on the button with id "search-button"
        document.getElementById('search-button').click();
        // Set focus on the search input field
        var searchInput = document.getElementById('default-search');
        if (searchInput) {
            searchInput.value = ''; // Clear the input field
            searchInput.focus(); // Set focus on the input field
        }
    }
});
