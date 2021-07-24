import { ProxyState } from "../AppState.js"
import { sandbox } from "../Services/AxiosService.js"
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
  let template = `
  <div class="this-quote">
    <div>"${ProxyState.quote[0]}"</div>
    <div class="author">
      <div>${ProxyState.quote[1]}</div>
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
