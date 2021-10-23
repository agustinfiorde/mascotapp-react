import { API_EISH } from "../constants/api.constants";
import { HTTP, REQUEST_OPTIONS } from "../constants/constants";
import { httpReq } from "./interceptor.service";

class MascotaService {

  async register(petData) {
    console.log(API_EISH.PET_REGISTER());
    const response = await fetch(API_EISH.PET_REGISTER(), REQUEST_OPTIONS(petData, HTTP.POST));
    return httpReq(response)
  }

  async getAllPets() {
    const response = await fetch(API_EISH.PET_GET_ALL());
    return response.json();
  }

  async getPetsByUser(userId) {
    const response = await fetch(`${API_EISH.PET_GET_ALL()}/${userId}`);
    return response.json();
  }

  async getFavoritePet(userId) {
    const response = await fetch(`${API_EISH.PET_GET_SINGLE()}/${userId}`);
    return response.json();
  }

}

export default new MascotaService();