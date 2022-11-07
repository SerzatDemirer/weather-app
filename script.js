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
