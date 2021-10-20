export const API = {
    URL: "https://rickandmortyapi.com/api",
    CHARACTERS: function () {
      return `${this.URL}/character`;
    },
  }
  
  export const API_EISH = {
    URL: "http://192.168.0.18:8080/api/v1",
  
    LOGIN: function () {
      return `${this.URL}/login`;
    },
  
    USER_REGISTER: function () {
      return `${this.URL}/register`;
    },
  
    USER_EDIT: function () {
      return `${this.URL}/user/edit`;
    },
  
    USER_GET_ALL: function () {
      return `${this.URL}/user/register`;
    },
  
    PET_REGISTER: function () {
      return `${this.URL}/pet/save`;
    },
  
    PET_GET_ALL: function () {
      return `${this.URL}/pet/list`;
    },
    PET_GET_SINGLE: function () {
      return `${this.URL}/pet/favorite`;
    },
  }