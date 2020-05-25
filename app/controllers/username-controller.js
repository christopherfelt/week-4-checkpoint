import store from "../store.js";
import usernameService from "../services/username-service.js";

function _drawUserName() {
  let username = store.State.username;
  document.getElementById("username-entry").innerText = username.username;
}

export default class UsernameController {
  constructor() {
    _drawUserName();
    store.subscribe("username", _drawUserName);
  }

  setUsername(event) {
    event.preventDefault();
    let formData = event.target;
    let username = {
      username: formData.newUsername.value,
    };
    usernameService.setUsername(username);
    document.getElementById("change-name-link").click();
    formData.reset();
  }
}
