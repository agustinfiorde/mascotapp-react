import { API } from "../constants/api.constants";

class RickAndMortyService {
  async getAllCharacters() {
    const response = await fetch(API.CHARACTERS());
    return response.json();
  }

  async getCharacterById(id) {
    const response = await fetch(`${API.CHARACTERS()}/${id}`);
    return response.json();
  }


}

export default new RickAndMortyService();
