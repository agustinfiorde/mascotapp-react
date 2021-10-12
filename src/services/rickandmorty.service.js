// import authHeader from "./auth-header";

const API_URL = "https://rickandmortyapi.com/api/character";

class RickAndMortyService {
  //   getAllCharacters() {
  //     fetch(API_URL)
  //       .then((response) => response.json())
  //       .then((data) => this.setState({ totalReactPackages: data.total }));
  //   }

  // getAllCharacters() {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data.results;
  //     });
  // }

  async getAllCharacters() {
    const response = await fetch(API_URL);
    return response.json();
  }

  async getCharacterById(id) {
    const response = await fetch(API_URL + `/${id}`);
    return response.json();
  }

  //   getUserBoard() {
  //     return axios.get(API_URL + "user", { headers: authHeader() });
  //   }
}

export default new RickAndMortyService();
