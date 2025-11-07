function getInspirationalQuote(queryString, pTagID) {
    baseURL = "https://api.quotable.io/";
    fullURL = `${baseURL}${queryString}`

    console.log(fullURL);
    fetch(fullURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)  // DEBUG:
            // Update the DOM with the quote
            const quote = data[0].content;
            const author = data[0].author;
            console.log(quote)
            console.log(author)
            const output = document.getElementById(pTagID);
            output.textContent = `${quote} - ${author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            const output = document.getElementById("index_quote");
            output.textContent = "Wisdom comes from within - Unknown"; // Fallback quote
        });
}

// runs ONLY when the whole page is ready to go:
document.addEventListener('DOMContentLoaded', () => {
    
    // Check 1: Are we on the _? page?
    // We check if the HTML element with the corresponding ID exists:
    const INDEX_PageIndicator = document.getElementById('index_quote_of_the_day');
    const COMPSCI_PageIndicator = document.getElementById('compsci_quote_of_the_day');
    const ECONOMICS_PageIndicator = document.getElementById('economics_quote_of_the_day');
    const MATH_PageIndicator = document.getElementById('math_quote_of_the_day');
    const ENGLISH_PageIndicator = document.getElementById('english_quote_of_the_day');        
    const HISTORY_PageIndicator = document.getElementById('history_quote_of_the_day');
    const TIMER_PageIndicator = document.getElementById('timer_quote_of_the_day');

    if (INDEX_PageIndicator) {
        console.log("Found the Index page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=knowledge|wisdom", 
            pTagID = 'index_quote_of_the_day'); 
    } 

    else if (COMPSCI_PageIndicator) {
        console.log("Found the Computer Science page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=technology|future", 
            pTagID = 'compsci_quote_of_the_day'); 
    } 

    else if (ECONOMICS_PageIndicator) {
        console.log("Found the Economics page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=science", 
            pTagID = 'economics_quote_of_the_day'); 
    } 

    else if (MATH_PageIndicator) {
        console.log("Found the Mathematics page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=math|logic", 
            pTagID = 'math_quote_of_the_day'); 
    } 

    else if (HISTORY_PageIndicator) {
        console.log("Found the History page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=history|past", 
            pTagID = 'history_quote_of_the_day'); 
    } 

    else if (ENGLISH_PageIndicator) {
        console.log("Found the History page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=wisdom|muse", 
            pTagID = 'english_quote_of_the_day'); 
    } 

    else if (TIMER_PageIndicator) {
        console.log("Found the Pomodoro timer page marker...");
        getInspirationalQuote(queryString = "quotes/random?maxLength100&tags=time", 
            pTagID = 'timer_quote_of_the_day'); 
    } 
});