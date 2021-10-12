export const HOME = ["/", "/home"];
export const USERS = "/users";
export const LOGIN = "/login";
export const SIGNUP = "/sign-up";

export const MASCOTAS = {
  ROOT: "/mascotas",
  DETALLE: () => `${this.ROOT}/detalle`,
  FORM: () => `${this.ROOT}/form`,
};

export const DASHBOARD = {
  ROOT: "/dashboard",
  TABLA_MASCOTAS: () => `${this.ROOT}/tabla-mascotas`,
  TABLA_USUARIOS: () => [`${this.ROOT}/tabla-usuarios`,this.ROOT],
  LISTA: () => `${this.ROOT}/lista`,
  PERFIL: () => `${this.ROOT}/perfil`,
  FAV: () => `${this.ROOT}/fav/:id`,
};
