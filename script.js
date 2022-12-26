
let search_btn = document.getElementById("search_btn");
function currentTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
document.getElementById("displayCurrentTime").innerHTML = currentTime(new Date());

  function search(){
   
    let inputState = document.getElementById("searchState").value
    let displayCityName = document.getElementById("displayCityName")
    let key =
      `https://api.openweathermap.org/data/2.5/weather?q=${inputState}&appid=84a5541e536549f59b50ed907cab345b&units=metric`;
      fetch(key)
      .then((res) => res.json())
      .then((data)=>{
        console.log(data)
        displayCityTemparature.innerHTML= Math.round(data.main.temp) +`&deg;C` 
        displayCityName.innerHTML = `${data.name},${data.sys.country}`
      
      })
      .catch((err) =>displayCityName.innerHTML= `<p>Enter a valid city name</p>`);
     
    
   
    }

search_btn.addEventListener("click",search)