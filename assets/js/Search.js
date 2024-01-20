// ==================================================================================
//                              Search Modal
// ==================================================================================

// Add another event listener to the entire document for keydown events
document.addEventListener("keydown", function (event) {
    // Check if the '/' key is pressed and focus is not on an input, textarea, or select element
    if (event.key === "/" && !event.target.tagName.toLowerCase().match(/input|textarea|select/)) {
        // Prevent the default '/' behavior (e.g., in the browser's address bar)
        event.preventDefault();

        // Simulate a click on the button with id "search-button"
        document.getElementById("search-button").click();
        // Set focus on the search input field
        var searchInput = document.getElementById("default-search");
        if (searchInput) {
            searchInput.value = ""; // Clear the input field
            searchInput.focus(); // Set focus on the input field
        }
    }
});

// ==================================================================================
//                              Fuse Js Search
// ==================================================================================

// Import the Fuse library for fuzzy searching
const Fuse = require("fuse.js");

// Function to fetch posts from "/index.json"
async function getPosts() {
    try {
        const res = await fetch("/index.json");
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const data = await res.json(); // Extract JSON data
        return data;
    } catch (error) {
        console.error(error);
        return error.message; // Return error message on failure
    }
}

// Function to retrieve search results using getPosts
async function retrieveSearchResults(query, posts) {
    // Configure Fuse for fuzzy search
    const fuse = new Fuse(posts, {
        shouldSort: true,
        ignoreLocation: true,
        threshold: 0.0,
        includeMatches: true,
        keys: ["title", "section", "tags", "summary", "content"],
    });
    // Perform the search
    const searchResults = fuse.search(query);
    return searchResults;
}

// Function to generate HTML for a post
function generatePostHTML(post) {
    return `
        <li>
            <div id="wraper">
                <a 
                    href="${post.item.permalink}" tabindex="0">
                    <div id="post">
                        <div id="title">
                            ${post.item.title}
                        </div>
                        <div id="section">${post.item.section}<span
                            >&middot;</span>${post.item.date}</span>
                        </div>
                        <div id="summery">${post.item.summary}</div>
                    </div>
                    <div id="arrow">&rarr;</div>
                </a>
            </div>
        </li>
        <hr class="divider">`;
}

// Function to generate HTML for "No Result Found" message
function generateNoResultHTML() {
    return `
        <li id="not-found">
            <div id="wraper">
                <h2>
                    No Result Found
                </h2>
            </div>
        </li>`;
}

const form = document.querySelector("#search-form");
const searchResults = document.querySelector("#search-results");

// Variable to store all posts
let allPosts = [];

// Event listener for search form submission
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const query = formData.get("search");
    const postsToDisplay = await retrieveSearchResults(query, allPosts);

    // Check if there are search results
    searchResults.innerHTML = postsToDisplay.length > 0 ? postsToDisplay.map(generatePostHTML).join("") : generateNoResultHTML();

    // Toggle scrolling class based on the number of search results
});

// Event listener for input in the search box
form.addEventListener("input", async (e) => {
    const query = e.target.value.trim(); // Trim whitespace
    if (query.length > 0) {
        // If there is a query, retrieve search results and update display
        const postsToDisplay = await retrieveSearchResults(query, allPosts);
        searchResults.innerHTML = postsToDisplay.length > 0 ? postsToDisplay.map(generatePostHTML).join("") : generateNoResultHTML();

        // Toggle scrolling class based on the number of search results
    } else {
        // If the query is empty, clear the search results
        searchResults.innerHTML = "";

        // Remove scrolling class
    }
});

// Fetch all posts and store them in the allPosts variable
getPosts().then((posts) => {
    allPosts = posts;
});
