const dateElement = document.getElementById("#current-date");
const timeElement = document.getElementById("#current-time");
const amPmElement = document.getElementById("#am-pm");

const tempCelsius = document.getElementById("#temp-celsius");
const tempFahrenheit = document.getElementById("#temp-fahrenheit");

const cityElement = document.getElementById("#city");

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
});
