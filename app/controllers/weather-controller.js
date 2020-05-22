import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  let weather = store.State.weather;

  document.getElementById("location").innerText = weather.city;
  let temp = document.getElementById("temperature");
  if (weather.unit == "F") {
    temp.innerText = weather.fahrenheit.toString();
  } else if (weather.unit == "C") {
    temp.innerText = weather.celsius.toString();
  } else {
    temp.innerText = weather.kelvin.toString();
  }
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    this.getWeather("F");
  }

  getWeather(unit) {
    WeatherService.getWeather(unit);
  }
}
