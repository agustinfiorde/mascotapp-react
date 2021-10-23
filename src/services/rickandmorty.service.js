import { API } from "../constants/api.constants";
import { httpReq } from "./interceptor.service";

class RickAndMortyService {
  async getAllCharacters() {
    const response = await fetch(API.CHARACTERS());
    return httpReq(response)
  }

  async getCharacterById(id) {
    const response = await fetch(`${API.CHARACTERS()}/${id}`);
    return response.json();
  }


}

export default new RickAndMortyService();
