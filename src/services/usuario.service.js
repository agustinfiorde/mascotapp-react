import { API_EISH } from "../constants/api.constants";
import { HTTP, REQUEST_OPTIONS } from "../constants/constants";

class UserService {

  async register(userData) {
    console.log(userData);
    const response = await fetch(API_EISH.USER_REGISTER, REQUEST_OPTIONS(userData, HTTP.POST));
    return response.json();
  }

  async edit(userData) {
    const response = await fetch(API_EISH.USER_REGISTER, REQUEST_OPTIONS(userData, HTTP.PATCH));
    return response.json();
  }

  async getAllUsers() {
    const response = await fetch(API_EISH.USER_GET_ALL);
    return response.json();
  }

}

export default new UserService();
