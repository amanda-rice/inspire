import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _draw() {
  let name = ProxyState.image['query']
  name = name.charAt(0).toUpperCase() + name.slice(1)
  let bg = document.getElementById('bg-image')
  bg.style.backgroundImage = `url(${ProxyState.image['largeImgUrl']})`
  bg.style.backgroundSize = "cover"
  bg.style.backgroundAttachment = "fixed"
  let template = `
  <div class="this-img">
    <p class="p-0 m-0 main-shadow"><i>${name}</i></p>
    <p class="p-0 m-0 main-shadow">Photographer: ${ProxyState.image['author']}</p>  
    <div class="change-img">
      <p class="p-0 m-0 main-shadow" onclick="app.imagesController.getImage()"><i>Change Image<i></p>
    </div>
  </div>
  `

  document.getElementById('img-info').innerHTML = template
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
