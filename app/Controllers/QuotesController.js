import { ProxyState } from "../AppState.js"
import { sandbox } from "../Services/AxiosService.js"
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
  let template = `
  <div class="this-quote main-shadow">
    <div>"${ProxyState.quote[0]}"</div>
    <div class="author">
      <div>${ProxyState.quote[1]}</div>
      <p class="p-0 m-0 main-shadow" onclick="app.quotesController.getQuote()"><i>Get new quote<i></p>
    </div>
  </div>
  `
  document.getElementById('quote').innerHTML = template
}

export default class QuotesController {
  constructor() {
    ProxyState.on('quote', _draw)
    this.getQuote()
  }
  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      console.error("Failed to get quote API", error)
    }
  }
}
