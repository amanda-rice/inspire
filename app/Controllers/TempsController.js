import { ProxyState } from "../AppState.js"
import Temp from "../Models/TempModel.js"
import { tempsService } from "../Services/TempsService.js"

function _draw() {
  let currentTemp = ''
  if (ProxyState.temp.isCelsius) {
    currentTemp = ProxyState.temp.celsius + '°C'
  }
  else {
    currentTemp = ProxyState.temp.temp + '°F'
  }
  let template = `
  <p class="m-0 p-0">${ProxyState.temp.weather}</p>
  <div class="main-shadow">
    <p class="m-0 p-0" onclick="app.tempsController.switchMeasurement()">${currentTemp}</p>
    <p class="m-0 p-0">${ProxyState.temp.city}</p>
  </div>
  `
  document.getElementById('weather').innerHTML = template
}

export default class TempsController {
  constructor() {
    ProxyState.on('temp', _draw)
    this.getTemp()
  }
  async getTemp() {
    try {
      await tempsService.getTemp()
    } catch (error) {
      console.error("Failed to get weather API", error)
    }
  }
  switchMeasurement() {
    ProxyState.temp.isCelsius = !ProxyState.temp.isCelsius
    ProxyState.temp = ProxyState.temp
  }
}
