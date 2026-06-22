let historyList = [];
async function getWeather(){

    let city =
    document.getElementById("cityInput").value;
    if(!historyList.includes(city)){

    historyList.unshift(city);

}

if(historyList.length>5){

    historyList.pop();

}

showHistory();

    let apiKey =
    "97bcea5bd81c3ca72a435b902d759db6";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("cityName").innerText = "Loading...";
    let response =
    await fetch(url);

    let data =
    await response.json();

    if(data.cod!=200){

        alert(data.message);

        return;

    }

    document.getElementById("cityName").innerText =
    data.name;
    let today =
new Date();

document
.getElementById("date")
.innerText=

today.toDateString();

document
.getElementById("description")
.innerText=

data.weather[0].description;

    document.getElementById("temperature").innerText =
    data.main.temp + " °C";

    document.getElementById("humidity").innerText =
    "Humidity : " + data.main.humidity + "%";

    document.getElementById("wind").innerText =
    "Wind : " + data.wind.speed + " m/s";

    document.getElementById("weatherIcon").src =
    "https://openweathermap.org/img/wn/" +
    data.weather[0].icon +
    "@2x.png";

}
function handleEnter(event){

    if(event.key==="Enter"){

        getWeather();

    }

}
function showHistory(){

    let list=

    document.getElementById("history");

    list.innerHTML="";

    historyList.forEach(function(city){

        let li=

        document.createElement("li");

        li.className="list-group-item";

        li.innerText=city;

        li.onclick=function(){

            document.getElementById("cityInput").value=city;

            getWeather();

        }

        list.appendChild(li);

    });

}
function getLocationWeather(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            showPosition

        );

    }

    else{

        alert(

        "Geolocation is not supported"

        );

    }

}
async function showPosition(position){

    let lat =

    position.coords.latitude;

    let lon =

    position.coords.longitude;

    let apiKey =

    "97bcea5bd81c3ca72a435b902d759db6";

    let url =

`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let response =

    await fetch(url);

    let data =

    await response.json();

    document.getElementById(

    "cityName"

    ).innerText =

    data.name;

    document.getElementById(

    "temperature"

    ).innerText =

    data.main.temp + " °C";

    document.getElementById(

    "humidity"

    ).innerText =

    "Humidity : " +

    data.main.humidity +

    "%";

    document.getElementById(

    "wind"

    ).innerText =

    "Wind : " +

    data.wind.speed +

    " m/s";

    document.getElementById(

    "weatherIcon"

    ).src =

    "https://openweathermap.org/img/wn/" +

    data.weather[0].icon +

    "@2x.png";

}