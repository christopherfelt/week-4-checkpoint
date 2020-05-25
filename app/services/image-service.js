import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000,
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getBackgroundImage() {
    let res = await _imgApi.get();

    store.commit("image", new Image(res.data));
  }
}

const imageService = new ImageService();
export default imageService;
