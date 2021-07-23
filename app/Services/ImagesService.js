import { ProxyState } from "../AppState.js"
import { sandbox } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    const res = await sandbox.get('images')
    console.log(res)
    ProxyState.image = res.data
    console.log(ProxyState.image)
    console.log(ProxyState.image.id)
  }
}

export const imagesService = new ImagesService()