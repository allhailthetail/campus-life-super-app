
function getInspirationalQuote() {
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())  // Covert the response
        .then(data => {
            // Update the DOM with the quote
            const quote = data[0];
            const output = document.getElementById("q");
            output.textContent = fact;
        })
        .catch(error => {
        // Message to print if there was an error
        console.error("Error fetching quote:", error);
    });
}
