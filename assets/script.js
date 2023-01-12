
var currentLocation = document.getElementsByClassName('todays-stats')[0];
var currentHigh = document.getElementById('today-high')[0];
var currentWind = document.getElementById('today-wind')[0];
var currentHumidity = document.getElementById('today-humidity')[0];
var searchFormInput = document.querySelector("#search-term")
var searchForm = document.querySelector("search-btn")
var currentDate = (new Date()).toLocaleDateString('en-US')




function searchWeather(city){   
  
  var city = document.getElementById("city".value);

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e07f73fd554a9ab1da8c6467b8557d53`)
  .then(function(res){
    return res.json();
  }).then(function(data){
    //appending to page
    console.log(data)
    var cityInput = document.getElementById("city".value);
    var cityName = (data.name);
    var high = (data.main.temp);
    var wind = (data.main.wind.speed);
    var humidity = (data.main.humidity);

    
  })
}

searchWeather("seattle");




searchForm.addEventListener("submit",function(e){
    e.preventDefault();
    var cityToSearch = searchFormInput.value;
    console.log(cityToSearch)

})
