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
      <div className="w-25 mx-auto mt-5">
        <h4 className="mb-3">Humano Registrate!</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-12">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">
                Clave
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Clave"
                required
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label for="address2" className="form-label">
                Repetir Clave 
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Repetir clave"
              />
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="submit">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    );
  }
}
