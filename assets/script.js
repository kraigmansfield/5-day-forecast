
var currentLocation = document.getElementsByClassName('todays-stats')[0];
var currentHigh = document.getElementById('today-high')[0];
// var searchFormInput = document.querySelector("#search-term");
var searchForm = document.querySelector("search-btn");
var currentDate = (new Date()).toLocaleDateString('en-US');
var newName = document.getElementById('search-term');
var cityName = cityName.innerHTML = newName.value;


function searchWeather(city){   
  

  fetch('api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=e07f73fd554a9ab1da8c6467b8557d53')
  .then(function(res){
    return res.json();
  }).then(function(data){
    //appending to page
    console.log(data)
    var cityInput = document.getElementById("city".value);
    var cityName = (data.name);
    var high = (data.main.temp);

    
  })
}

searchWeather("seattle");




//Event Listeners on button click
document.addEventListener("DOMContentLoaded", () => {
  // Handling button click
  document.querySelector(".search-btn").addEventListener("click", () => {
      const searchedCity = document.querySelector('.search-term');
      console.log(searchedCity.value);
      if(searchedCity.value){
          weatherForecast(searchedCity.value);
      }       
 }) 
});
