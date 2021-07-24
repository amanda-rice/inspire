
export default class Temp {
  constructor({ main, name, weather, id }) {
    this.temp = (main.temp * 1.8 - 459.67).toFixed(1)
    this.celsius = (main.temp - 273.15).toFixed(1)
    this.city = name
    this.weather = weather[0].main
    this.isCelsius = false
  }
}