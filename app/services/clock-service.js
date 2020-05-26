import store from "../store.js";
import Clock from "../models/clock.js";

class ClockService {
  setClockType(clockType) {
    store.State.clockType = new Clock({ clockType: clockType });
    store.saveLocalStorage();
  }
}

const clockservice = new ClockService();
export default clockservice;
