const apiKey = "5ddc17fe5314f41137d58924cca60251";
const weatherDataEl = document.getElementById("weather-data")
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherCity(cityValue)
})
async function getWeatherCity(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

        if (!response.ok) {
            throw new Error("Network response is not ok")
        }
        const data = await response.json()
        const temparature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity:${data.main.humidity}%`,
            `Wind speed:${data.wind.speed} m/s`,
        ]
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
        weatherDataEl.querySelector(".temparature").textContent = `${temparature}°C`;
        weatherDataEl.querySelector(".description").textContent = description;
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) =>
        `<div>${detail}</div>`).join('');   
    } catch (error) {

    }
}