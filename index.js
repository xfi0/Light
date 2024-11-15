function searchHeaders() {
    document.getElementById('searchbar').addEventListener('input', searchHeaders);
    const query = document.getElementById('searchbar').value.toLowerCase();
    const headers = document.querySelectorAll('h4,.icon');
    headers.forEach(header => {
        const text = header.textContent.toLowerCase();
        if (query) {
            if (text.includes(query)) {
                header.removeAttribute("hidden");
            } else {
                header.setAttribute("hidden", true);
            }
        } else {
            // When the query is empty, show all headers and remove any highlighting
            header.removeAttribute("hidden");
        }
    });
}
//splash options
// Array of options to choose from
const options = 
["https://github.com/xfi0/",
 "made by dominic the worst coder",
 "thanks For using my site",
  "laptop corrupted twice making this", 
  "i <3 VsCode"];

// Function to select a random value from the options array
function getRandomOption() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to update the paragraph with a random option
function updateSplashWithRandomOption() {
    document.addEventListener('DOMContentLoaded', updateSplashWithRandomOption);
    const randomOption = getRandomOption();
    const splashElement = document.querySelector('.splash');
    splashElement.textContent = randomOption;
}

// Call the function to update the splash element
updateSplashWithRandomOption();