function _drawClock() {
  var time = new Date().getTime();
  var date = new Date(time);
  var currentTime = date.toString().split(" ")[4];
  document.getElementById("clock-text").innerText = currentTime;
}

export default class ClockController {
  constructor() {
    _drawClock();
    this.clock = setInterval(_drawClock, 1000);
  }
}
