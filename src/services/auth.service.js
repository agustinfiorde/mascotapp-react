import { user, REQUEST_OPTIONS, HTTP } from "../constants/constants";
import { API_EISH } from "../constants/api.constants";

class AuthService {
  loginFakeUser() {
    const fakeUser = {
      roles: [{ role: "USER" }, { role: "ADMIN" }],
    };
    this.setLocalStorage(user, JSON.stringify(fakeUser));
  }

  async login(userData) {
    const response = await fetch(
      API_EISH.LOGIN,
      REQUEST_OPTIONS(userData, HTTP.POST)
    );
    return response.json();
  }

  isAdmin() {
    if (this.isLogged()) return this.getRoles().includes("ADMIN");
  }

  isUser() {
    if (this.isLogged()) return this.getRoles().includes("USER");
  }

  getRoles() {
    let { roles } = this.getLocalStorage(user);
    return roles.map((e) => e.role);
  }

  isLogged() {
    return !!this.getLocalStorage(user) ? true : false;
  }

  getLocalStorage(key) {
    const item = window.localStorage.getItem(key);
    return JSON.parse(item);
  }

  setLocalStorage(key, item) {
    try {
      window.localStorage.setItem(key, item);
      return true;
    } catch (error) {
      return false;
    }
  }

  clearLocalStorage() {
    window.localStorage.clear();
  }
}

export default new AuthService();
