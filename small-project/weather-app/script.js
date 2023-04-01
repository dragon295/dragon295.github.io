const search_barEl = document.querySelector(".search-bar");
const btn_searchEl = document.querySelector(".btn-search");
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const iconEl = document.querySelector(".icon");
const descriptionEl = document.querySelector(".description");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const weatherEl = document.querySelector(".weather");
const locationEl = document.querySelector(".location");
const container = document.querySelector(".container");

// document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?city,universe")`;

const apiKey = "ba0164a4a4faaa157ec4bd4b9a152ea1";

const error = document.createElement("div");
error.classList.add("err");
error.innerText = "Sorry we can't find your city. Please try again!";

async function fetchWeather(city) {
  const reponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  const data = await reponse.json();
  if (city && data.message !== "city not found") {
    const { weather, main, wind, sys, name } = data;
    const { icon, description } = data.weather[0];
    const { humidity } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;

    weatherEl.classList.remove("err");
    cityEl.innerText = `Weather in ${name}`;
    tempEl.innerText = `${main.temp} °C`;
    iconEl.src = `http://openweathermap.org/img/wn/${icon}.png`;
    descriptionEl.innerText = description;
    humidityEl.innerText = `Humidity: ${humidity}%`;
    windEl.innerText = `Wind: ${speed} km/h`;
    locationEl.innerText = `Location: ${country}`;
    weatherEl.classList.remove("loading");
    weatherEl.style.display = "block";
    error.remove();

    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?city,${city}")`;
  } else {
    weatherEl.style.display = "none";
    container.appendChild(error);
  }
}

fetchWeather("California")
  .then((response) => response)
  .catch((error) => {
    console.log(error);
  });

btn_searchEl.addEventListener("click", () => {
  if (search_barEl.value !== "") {
    fetchWeather(search_barEl.value);
  } else {
    weatherEl.style.display = "none";
    container.appendChild(error);
  }
});

search_barEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && search_barEl.value !== "") {
    fetchWeather(search_barEl.value);
  }
});
