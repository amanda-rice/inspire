import { ProxyState } from "../AppState.js"
import { sandbox } from "./AxiosService.js"


class QuotesService {
  async getQuote() {
    const res = await sandbox.get('quotes')
    ProxyState.quote = [res.data.content, res.data.author]
  }
}

export const quotesService = new QuotesService()