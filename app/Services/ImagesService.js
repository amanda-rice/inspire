import { ProxyState } from "../AppState.js"
import { sandbox } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    const res = await sandbox.get('images')
    console.log('image', res.data)
    ProxyState.image = res.data
  }
}

export const imagesService = new ImagesService()