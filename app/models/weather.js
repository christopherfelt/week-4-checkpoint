export default class Weather {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name;
    this.kelvin = data.main.temp;
    this.fahrenheit = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
    this.celsius = Math.round(data.main.temp - 273.15);
    this.unit = data.unit || "F";
    this.description = data.weather[0].description;
  }
}
