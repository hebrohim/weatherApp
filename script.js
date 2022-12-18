var search_btn = document.getElementById("search_btn");
function search(){
var inputState = document.getElementById("searchState").value
var displayCityName = document.getElementById("displayCityName")
var key =
  `https://api.openweathermap.org/data/2.5/weather?q=${inputState}&appid=84a5541e536549f59b50ed907cab345b&units=metric`

fetch(key)
.then((res) => res.json())
.then((data)=>displayCityName.innerHTML= Math.round(data.main.temp) +`&deg;C`)
.catch((err) =>displayCityName.innerHTML= "err");
}

search_btn.addEventListener("click",search)