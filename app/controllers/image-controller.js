import ImageService from "../services/image-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)

function _drawBackgroundImage() {
  let image = store.State.image;
  document.getElementById(
    "bg-image"
  ).style.backgroundImage = `url(${image.largeImageUrl})`;
}

export default class ImageController {
  constructor() {
    store.subscribe("image", _drawBackgroundImage);
    this.getBackgroundImage();
  }

  getBackgroundImage() {
    ImageService.getBackgroundImage();
  }
}
