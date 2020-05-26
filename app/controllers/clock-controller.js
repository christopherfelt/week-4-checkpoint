import clockservice from "../services/clock-service.js";
import store from "../store.js";

function _drawClock() {
  let date = new Date();

  let hoursInt = date.getHours();
  let minutesInt = date.getMinutes();
  let secondsInt = date.getSeconds();
  let hours = parseInt(hoursInt.toString());
  let minutes =
    minutesInt < 10 ? "0" + minutesInt.toString() : minutesInt.toString();
  let seconds =
    secondsInt < 10 ? "0" + secondsInt.toString() : secondsInt.toString();
  let currentTime = "";
  let clockType = store.State.clockType.clockType;

  let greeting = "";
  if (hoursInt >= 0 && hoursInt < 5) {
    greeting = "Good night";
  } else if (hoursInt >= 5 && hoursInt < 12) {
    greeting = "Good morning";
  } else if (hoursInt >= 12 && hoursInt < 17) {
    greeting = "Good Afternoon";
  } else if (hoursInt >= 17 && hoursInt <= 23) {
    greeting = "Good evening";
  }

  if (clockType == "12") {
    let hour12El = document.getElementById("12hour");
    let hour24El = document.getElementById("24hour");
    let hour12Label = document.getElementById("12hour-label");
    let hour24Label = document.getElementById("24hour-label");
    hour12El.checked = true;
    hour24El.checked = false;
    hour12Label.classList.add("active");
    hour24Label.classList.remove("active");

    let ampm = hoursInt >= 12 ? "pm" : "am";
    let hours = hoursInt % 12;
    hours = hours ? hours : 12;
    currentTime = hours.toString() + ":" + minutes + ":" + seconds + " " + ampm;
  } else {
    currentTime = hours.toString() + ":" + minutes + ":" + seconds;
  }

  document.getElementById("greeting").innerText = greeting;
  document.getElementById("clock-text").innerText = currentTime;
}

export default class ClockController {
  constructor() {
    _drawClock();
    this.clock = setInterval(_drawClock, 1000);
  }

  setClockType(clockType) {
    clockservice.setClockType(clockType);
  }
}
