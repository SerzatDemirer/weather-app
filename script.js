const dateElement = document.getElementById("current-date");
let timeElement = document.getElementById("current-time");

const tempCelsius = document.getElementById("temp-celsius");
const tempFahrenheit = document.getElementById("temp-fahrenheit");

const cityElement = document.getElementById("city");

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

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  let hours = time.getHours();
  const minutes = time.getMinutes();

  timeElement.innerHTML = hours + ":" + minutes;
  dateElement.innerHTML = days[day] + "," + " " + date + " " + months[month];
}, 1000);

const tempElement = document.querySelector(".temp-celsius");

getCurrentTemp();

function getCurrentTemp() {
  let apiKey = "89b03fb69db0a881d3b9274015f1da99";
  let latitude = 56.0362966;
  let longitude = 12.7585506;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then(function (data) {
      console.log(data);
      temp-celsius.value = data.main.temp;
      showTemperature(data);
    });
}

function showTemperature(data) {
  tempElement.innerHTML = `${weather.celcius}18&#176; C`;
}
