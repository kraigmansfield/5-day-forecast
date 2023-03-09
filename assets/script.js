var APIKey = 'e07f73fd554a9ab1da8c6467b8557d53';


var $searchBtn = $('#searchBtn');
var Input = document.querySelector("#search-city");
var cityName = document.querySelector("#cityName");
var temp = document.querySelector('#Temp');
var temp1 = document.querySelector('#Temp1');
var temp2 = document.querySelector('#Temp2');
var temp3 = document.querySelector('#Temp3');
var temp4 = document.querySelector('#Temp4');
var temp5 = document.querySelector('#Temp5');

$searchBtn.on('click', function (event) {
  console.log(Input.value);

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + Input.value + '&appid=ec96c3d6509b8a012ba07a86b8f2719b')
        .then(response => response.json())
        .then(data => {
          var cityValue = data['name'];
          var tempValue = data['main']['temp'];

          cityName.innerHTML = (cityValue + " ");
          var convertTemp = Math.trunc(1.8 * ( tempValue - 273)+32);
          temp.innerHTML = ('Temperature: ' + convertTemp + " °F");

        }).catch(err => {
          console.log(err)
        })

    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + Input.value + '&units=imperial&appid=ec96c3d6509b8a012ba07a86b8f2719b')
        .then(response => response.json())
        .then(data => {
          console.log(data);
            
            document.getElementById("Temp1").innerHTML = 'Temp: ' + Number(data.list[0].main.temp).toFixed(0) + "°F"
            document.getElementById("Day1").innerHTML = (data.list[0].dt_txt);

            
            document.getElementById("Temp2").innerHTML = 'Temp: ' + Number(data.list[8].main.temp).toFixed(0) + "°F"
            document.getElementById("Day2").innerHTML = (data.list[8].dt_txt);


            document.getElementById("Temp3").innerHTML = 'Temp: ' + Number(data.list[16].main.temp).toFixed(0) + "°F"
            document.getElementById("Day3").innerHTML = (data.list[16].dt_txt);


            document.getElementById("Temp4").innerHTML = 'Temp: ' + Number(data.list[24].main.temp).toFixed(0) + "°F"
            document.getElementById("Day4").innerHTML = (data.list[24].dt_txt);


            document.getElementById("Temp5").innerHTML = 'Temp: ' + Number(data.list[32].main.temp).toFixed(0) + "°F"
            document.getElementById("Day5").innerHTML = (data.list[32].dt_txt);

        })


// Event Listeners on button click
// document.addEventListener("DOMContentLoaded", () => {
//   // Handling button click
//   document.querySelector(".searchBtn").addEventListener("click", () => {
//       const searchedCity = document.querySelector('.search-term');
//       console.log(searchedCity.value);
//       if(searchedCity.value){
//           weatherForecast(searchedCity.value);
//       }       
//  }) }
// )});
      })
