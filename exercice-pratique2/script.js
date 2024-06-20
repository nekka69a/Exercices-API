async function getWeather() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/meteofrance?latitude=52.52&longitude=13.41&current=temperature_2m"
    );
    let data = await response.json();

    document.querySelector("#temperature").textContent =
      "Le temps à Paris est de " + data.current.temperature_2m + " " + "degrés";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getWeather();

// async function fetchData() {
//   try {
//     const response = await fetch("https://api.example.com/data");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
