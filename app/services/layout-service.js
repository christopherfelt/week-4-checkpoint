import store from "../store.js";
import Layout from "../models/coordinates.js";

class LayoutService {
  setLayoutType(layoutType) {
    store.commit("layoutType", layoutType);
    store.saveLocalStorage();
  }
  setCoodinates(data) {
    console.log("layout-service", data);
    let coorSet = store.State.coordinates.find((c) => c.id == data.id);
    if (coorSet) {
      coorSet.x = data.x;
      coorSet.y = data.y;
      store.saveLocalStorage();
    } else {
      console.log("should be going through here");
      store.State.coordinates.push(new Layout(data));
      store.saveLocalStorage();
    }
  }
}

const layoutService = new LayoutService();
export default layoutService;
