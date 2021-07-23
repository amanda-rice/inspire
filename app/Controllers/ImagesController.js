import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _draw() {
  let bg = document.getElementById('bg-image')
  bg.style.backgroundImage = `url(${ProxyState.image['imgUrl']})`
}


export default class ImagesController {
  constructor() {
    ProxyState.on('image', _draw)
    this.getImage()
  }
  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error("Failed to get images API", error)
    }
  }
}
