function getInfo(){
    var newName= document.querySelector("cityInput");
    var cityName = document.querySelector("cityName");
}

function searchWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=' +${newName}+'&units=metric&appid=e07f73fd554a9ab1da8c6467b8557d53`)
    .then(response => response.json(){
        return res.json(); 
    }).then(function(data){
        renderResults(data)
    })}

    searchWeather();


searchForm.addEventListener("submit",function(e){
    e.preventDefault();
    var cityToSearch = searchCityInput.value;
    searchWeather(city);

})