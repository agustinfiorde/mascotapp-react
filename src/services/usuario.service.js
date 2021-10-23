import { API_EISH } from "../constants/api.constants";
import { HTTP, REQUEST_OPTIONS } from "../constants/constants";
import { httpReq } from "./interceptor.service";

class UserService {

  async register(userData) {
    const response = await fetch(API_EISH.USER_REGISTER(), REQUEST_OPTIONS(userData, HTTP.POST));
    return httpReq(response)
  }

  async edit(userData) {
    const response = await fetch(API_EISH.USER_REGISTER(), REQUEST_OPTIONS(userData, HTTP.PATCH));
    return response.json();
  }

  async getAllUsers() {
    const response = await fetch(API_EISH.USER_GET_ALL());
    return response.json();
  }

}

export default new UserService();
