async function getWeather() {

    let city =
    document.getElementById("cityInput").value;

    let apiKey =
    "97bcea5bd81c3ca72a435b902d759db6";

    let url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        let response =
        await fetch(url);

        let data =
        await response.json();

        if(data.cod != 200){

            document.getElementById("cityName").innerText =
            "Error";

            document.getElementById("temperature").innerText =
            data.message;

            return;
        }

        document.getElementById("cityName").innerText =
        data.name;

        document.getElementById("temperature").innerText =
        data.main.temp + " °C";

    }

    catch(error){

        console.log(error);

        document.getElementById("temperature").innerText =
        "Something went wrong";

    }

}