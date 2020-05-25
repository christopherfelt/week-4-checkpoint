import Weather from "./models/weather.js";
import Quote from "./models/quote.js";
import Image from "./models/image.js";
import Username from "./models/username.js";
import Layout from "./models/coordinates.js";

let _state = {
  /**@type {Weather} */
  weather: new Weather({ name: "loading", main: { temp: 0.0 } }), //temporary fake data
  /**@type {Quote} */
  quote: null,
  /**@type {Image} */
  image: new Image({
    large_url: "/assets/mountain.jpg",
  }),
  /**@type {any[]}*/
  todos: [], //TODO change 'any' to your todo model
  username: null,
  coordinates: [],
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
let _listeners = {
  weather: [],
  quote: [],
  todos: [],
  image: [],
  username: [],
};

/**
 * Validates the property string is defined in both the state and the listeners
 * @param {string} prop
 */
function _validateProp(prop) {
  if (!_state.hasOwnProperty(prop) || !Array.isArray(_listeners[prop])) {
    throw new Error(
      `Unable to subscribe to ${prop}, please check your state and your listeners`
    );
  }
}

/**
 * Validates the subscriber is a function
 * @param {function} fn
 * @param {string} prop
 */
function _validateSubscriber(fn, prop) {
  if (typeof fn != "function") {
    throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
  }
}

class Store {
  /**
   * Provides access to application state data
   */

  get State() {
    return _state;
  }
  /**
   * Takes in a property to observe, and a function to run when it changes
   * @param {string} prop
   * @param {function} fn
   */
  subscribe(prop, fn) {
    _validateProp(prop);
    _validateSubscriber(fn, prop);
    _listeners[prop].push(fn);
  }

  /**
   * Takes in a property to set, and the value to set it to
   * @param {string} prop
   * @param {any} data
   */
  commit(prop, data) {
    _validateProp(prop);
    _state[prop] = data;
    _listeners[prop].forEach((fn) => fn());
  }

  saveLocalStorage() {
    let inspiration = {
      username: _state.username,
      coordinates: _state.coordinates,
    };
    localStorage.setItem("Inspiration", JSON.stringify(inspiration));
  }

  loadLocalStorage() {
    let data = JSON.parse(localStorage.getItem("Inspiration"));
    console.log("from load", data);
    if (data.username) {
      store.commit("username", new Username(data.username));
    }
    console.log("from load", data.coordinates);
    if (data.coordinates) {
      let coordinates = data.coordinates.map((c) => new Layout(c));
      this.State.coordinates = coordinates;
    }
  }
}

const store = new Store();
export default store;

store.loadLocalStorage();
