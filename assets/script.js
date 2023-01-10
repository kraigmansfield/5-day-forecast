let weather = {
    apiKey : "e07f73fd554a9ab1da8c6467b8557d53",
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=e07f73fd554a9ab1da8c6467b8557d53')
            .then((response) => response.json())
            .then((data) => console.log(data))

    }}

weather.fetchWeather();

