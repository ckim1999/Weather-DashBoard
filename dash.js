// use openweather API to retrieve weather data for cities
// includes a section called "How to start" - will provide basic setup and usage instructions

// This is our API key. Add your own API key between the ""
var APIKey = "452a81a2af18090604bf5a6da3cb5157";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?&unitsimperial&q=Bujumbura,Burundi&appid=" + APIKey;




// user is able to input their current location
// user is able to search for a location

// display current and future condiitons for that city
    // when viewing future weather conditions
        // shows a 5-day forecast
            // displays the date, an icon representation of weather conditions, the temperature, and the humidity

// store the information from that city into the search history
    // when a user clicks on that city again
        // display current and future conditions for the city

// create a card that shows the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// when viewing the UV index
    // presented with a color
        // conditions are favorable
        // conditions are moderate
        // conditions are severe

// when reopening weather dashboard it will display the last searched city forecast