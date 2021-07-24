import { ProxyState } from "../AppState.js"

function _draw() {
  document.getElementById('clock').innerText = ProxyState.clock[0]
  document.getElementById('clock-greeting').innerText = ProxyState.clock[1]
}

export default class ClocksController {
  constructor() {
    ProxyState.on('clock', _draw)

    getClock()
  }
}
function getClock() {
  let time = new Date()
  let hour = time.getHours()
  let greeting = "Good Morning"
  if (hour > 12 && hour < 4) {
    greeting = "Good Afternoon"
  }
  else if (hour >= 4 && hour < 8) {
    greeting = "Good Evening"
  }
  else if (hour >= 8) {
    greeting = "Good Night"
  }

  if (hour > 12) {
    hour -= 12
  }
  if (hour == 0) {
    hour = 12
  }
  let min = time.getMinutes()

  ProxyState.clock = [hour + ':' + (min < 10 ? '0' + min : min), greeting]
}
setInterval(getClock, 1000)

