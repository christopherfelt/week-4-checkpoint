import layoutService from "../services/layout-service.js";
import store from "../store.js";

function _drawComponents() {
  let coordinates = store.State.coordinates;
  if (coordinates.length > 0) {
    coordinates.forEach((c) => {
      let doc = document.getElementById(c.id);
      doc.style.left = c.x + "px";
      doc.style.top = c.y + "px";
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
    _drawComponents();
    _drawDraggable();
  }
}
