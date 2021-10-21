import { API_EISH } from "../constants/api.constants";
import { HTTP, REQUEST_OPTIONS } from "../constants/constants";

class UserService {

  async register(userData) {

    // http://192.168.0.18:8080/api/v1/register

    const response = await fetch("http://192.168.0.18:8080/api/v1/register", REQUEST_OPTIONS(userData, HTTP.POST));
    console.log(response);
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
