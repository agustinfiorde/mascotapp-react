import React, { Component } from "react";

export default class FormularioRegistro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeUsername(e) {}

  onChangePassword(e) {}

  handleLogin(e) {}

  render() {
    return (
      <div class="w-50 mx-auto mt-5">
        <h4 class="mb-3">Humano Registrate!</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-12">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">
                Clave
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Clave"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">
                Repetir Clave 
              </label>
              <input
                type="text"
                class="form-control"
                id="address2"
                placeholder="Repetir clave"
              />
            </div>

            <hr class="my-4" />

            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    );
  }
}
