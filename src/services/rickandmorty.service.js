// import authHeader from "./auth-header";

import { API } from "../constants";

class RickAndMortyService {
  async getAllCharacters() {
    const response = await fetch(API.CHARACTERS());
    return response.json();
  }

  async getCharacterById(id) {
    const response = await fetch(`${API.CHARACTERS()}/${id}`);
    return response.json();
  }

  //   getUserBoard() {
  //     return axios.get(API_URL + "user", { headers: authHeader() });
  //   }
}

export default new RickAndMortyService();
