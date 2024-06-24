const apiKey = '5cabea2e871c408d9ac52240242406';

function fetchWeather(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Check the data structure in the console

            // Extract relevant data from the API response
            const location = data.location.name;
            const weather = data.current.condition.text;
            const temperature = data.current.temp_c + '°C';
            const description = data.current.condition.text;

            // Update HTML elements with the extracted data
            document.getElementById('location').textContent = location;
            document.getElementById('weather').textContent = weather;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('description').textContent = description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
}

window.onload = fetchWeather('London'); // Default fetch weather for London on page load
