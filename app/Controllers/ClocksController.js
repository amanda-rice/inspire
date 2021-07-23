import { ProxyState } from "../AppState.js"

function _draw() {
  document.getElementById('clock').innerHTML = `<h1>${ProxyState.clock}</h1>`
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
  if (hour > 12) {
    hour -= 12
  }
  let min = time.getMinutes()
  ProxyState.clock = hour + ':' + min
}

