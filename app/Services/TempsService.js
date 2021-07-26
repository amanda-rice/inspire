import { ProxyState } from "../AppState.js"
import Temp from "../Models/TempModel.js"
import { sandbox } from "./AxiosService.js"

class TempsService {
  async getTemp() {
    const res = await sandbox.get('weather')
    ProxyState.temp = new Temp(res.data)
  }
}

export const tempsService = new TempsService()