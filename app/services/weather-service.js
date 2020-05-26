import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const _weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000,
});

class WeatherService {
  async getWeather(unit) {
    let res = await _weatherApi.get();
    // console.log(res.data.weather[0].description);
    res.data.unit = unit;

    store.commit("weather", new Weather(res.data));
  }
}

const weatherService = new WeatherService();
export default weatherService;
