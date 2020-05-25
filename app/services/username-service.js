import store from "../store.js";
import Username from "../models/username.js";

class UsernameService {
  setUsername(username) {
    console.log;
    store.commit("username", new Username(username));
    store.saveLocalStorage();
  }
}

const usernameService = new UsernameService();
export default usernameService;
