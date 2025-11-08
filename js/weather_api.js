function getWeatherForecast(queryString) {
    fullURL = "https://api.weather.gov/gridpoints/LZK/92,34/forecast";

    console.log(fullURL);
    fetch(fullURL)
        .then(response => response.json())
        .then(data => {
            // Extract current and future temperature
            const current_temp = data.properties.periods[0].temperature;
            const future_temp = data.properties.periods[2].temperature;
            const temp_unit = data.properties.periods[0].temperatureUnit;
            
            // Extract current and future conditions:
            const current_conditions = data.properties.periods[0].shortForecast;
            const future_conditions = data.properties.periods[2].shortForecast;

            // Assemble forecast into text:
            const todayForecast = `Today: ${current_temp}${temp_unit} ${current_conditions}`;
            const futureForecast = `Tomorrow: ${future_temp}${temp_unit} ${future_conditions}`;
            // Final forecast text:
            const forecastText = `${todayForecast} | ${futureForecast}`;

            // Update the DOM with the weather
            console.log(forecastText);  // DEBUG:
            const output = document.getElementById('weather_forecast');
            output.textContent = forecastText;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            const output = document.getElementById("weather_forecast");
            output.textContent = "Weather --, --"; // Fallback quote
        });
}

// runs ONLY when the whole page is ready to go:
document.addEventListener('DOMContentLoaded', () => {
    
    // Check 1: Are we on the _? page?
    // We check if the HTML element with the corresponding ID exists:
    const INDEX_PageIndicator = document.getElementById('weather_forecast');

    if (INDEX_PageIndicator) {
        console.log("Found the Index page marker...");
        getWeatherForecast(); 
    } 
});