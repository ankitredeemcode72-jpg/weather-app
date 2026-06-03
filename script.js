function getWeather() {
    let city = document.getElementById("cityInput").value;

    document.getElementById("result").innerText =
        "You searched for: " + city;
}