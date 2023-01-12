
var currentLocation = document.getElementsByClassName('todays-stats')[0];
var currentHigh = document.getElementById('today-high')[0];
var currentLow = document.getElementById('today-low')[0];
var currentWind = document.getElementById('today-wind')[0];
var currentHumidity = document.getElementById('today-humidity')[0];






    requestURL = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=e07f73fd554a9ab1da8c6467b8557d53`
    fetch(requestURL)
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      ;
        for (let i = 0; i < data.length; i++) {
            console.log(data);
    }

renderData = (location, forecast) => {
    var currentWeather = forcast[0].weather[0];
    
}

searchForm.addEventListener("submit",function(e){
    e.preventDefault();
    var cityToSearch = cityName.value;
    searchWeather(newName);

})})
