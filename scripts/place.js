





// Static values for temperature and wind speed (matching displayed values)
const temperature = 63; // °F
const windSpeed = 18; // mph

// Function to calculate windchill factor
function calculateWindChill(temp, wind) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
}

// Calculate and display windchill
function displayWindChill() {
    let windChillValue;
    
    // Check if conditions are met for viable windchill calculation
    if (temperature <= 50 && windSpeed > 3) {
        windChillValue = Math.round(calculateWindChill(temperature, windSpeed)) + "°F";
    } else {
        windChillValue = "N/A";
    }
    
    // Update the windchill display in the weather section
    // Assuming there's an element with id "wind-chill" or similar
    const windChillElement = document.querySelector("#wind-chill");
    if (windChillElement) {
        windChillElement.textContent = windChillValue;
    }
}

// Footer date functionality
const lastModified = document.querySelector("#short");
if (lastModified) {
    lastModified.innerHTML = document.lastModified;
}

const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}

// Initialize windchill calculation when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayWindChill();
});
