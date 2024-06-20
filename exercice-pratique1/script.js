async function getWeather() {
  fetch(
    "https://api.open-meteo.com/v1/meteofrance?latitude=52.52&longitude=13.41&current=temperature_2m"
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (data) {
      document.getElementById("temperature").textContent =
        "Le temps à Paris est de " +
        data.current.temperature_2m +
        " " +
        "degrés";
    })
    .catch((error) => console.error("Error fetching data:", error));
}

getWeather();
