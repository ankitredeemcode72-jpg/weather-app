async function getWeather(){

    let city =
    document.getElementById("cityInput").value;

    let apiKey =
    "97bcea5bd81c3ca72a435b902d759db6";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("result").innerHTML = "Loading...";
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