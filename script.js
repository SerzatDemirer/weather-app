const dateElement = document.getElementById("current-date");
let timeElement = document.getElementById("current-time");

//const tempCelsius = document.getElementById("temp-celsius");
//const tempFahrenheit = document.getElementById("temp-fahrenheit");

//const cityElement = document.getElementById("city");

const days = [
  "Söndag",
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

// Time and date implentation with setInterval Method..
setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  timeElement.innerHTML = hours + ":" + minutes + ":" + seconds;
  dateElement.innerHTML = days[day] + "," + " " + date + " " + months[month];
}, 1000);

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const tempElement = document.querySelector(".temp-celsius");

getCurrentTemp();

function getCurrentTemp() {
  let apiKey = "89b03fb69db0a881d3b9274015f1da99"; // Min api key for OpenWeather app.
  let latitude = 56.0362966; // Lattitude for Helcingborg city
  let longitude = 12.7585506; // Longitude for Helsingborg city
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}` // Fetching from OpenWeather
  )
    .then((res) => res.json()) // Response & request, Json format
    .then(function (data) {
      // console.log(data.main.temp);

      showTemperature(data.main.temp);
    });
}

function showTemperature(data) {
  let roundedTemperature = Math.round(data);
  tempElement.innerHTML = `${roundedTemperature}&#176; C`;

  // Celsius to Fahrenheit
  document.querySelector(".temp-fahrenheit").innerHTML = `${
    (roundedTemperature * 9) / 5 + 32
  }&#176; F`;
}
