import layoutService from "../services/layout-service.js";
import store from "../store.js";

function _drawLayoutType() {
  let layoutType = store.State.layoutType;
  console.log("layout controller layout type", layoutType);
  if (layoutType == "dark") {
    document.getElementById("layout-link").href = "assets/css/dark.css";
  } else {
    document.getElementById("layout-link").href = "assets/css/light.css";
  }
}

function _drawComponents(layoutType = "free") {
  let coordinates = store.State.coordinates;
  if (layoutType == "free") {
    coordinates.forEach((c) => {
      let doc = document.getElementById(c.id);
      doc.classList.add("box");
      doc.classList.add("absolute");
      doc.style.left = c.x + "px";
      doc.style.top = c.y + "px";
    });
  } else {
    coordinates.forEach((c) => {
      let doc = document.getElementById(c.id);
      doc.classList.remove("box");
      doc.classList.remove("absolute");
    });
  }
}

function _drawDraggable() {
  $(function () {
    $(".box").draggable();
    $(".box").mouseup(function () {
      let rect = this.getBoundingClientRect();
      let layoutObj = {};
      layoutObj.id = this.id;
      layoutObj.x = rect.x;
      layoutObj.y = rect.y;
      layoutService.setCoodinates(layoutObj);
    });
  });
}

export default class LayoutController {
  constructor() {
    store.subscribe("layoutType", _drawLayoutType);
    _drawLayoutType();
    _drawComponents();
    _drawDraggable();
  }

  setLayoutType(layoutType) {
    layoutService.setLayoutType(layoutType);
  }
}
