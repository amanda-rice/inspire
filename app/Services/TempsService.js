import { ProxyState } from "../AppState.js"
import Temp from "../Models/TempModel.js"
import { sandbox } from "./AxiosService.js"

class TempsService {
  async getTemp() {
    const res = await sandbox.get('weather')
    console.log(res.data)
    ProxyState.temp = new Temp(res.data)
    console.log(ProxyState.temp)
  }
}

export const tempsService = new TempsService()