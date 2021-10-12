import React, { Component } from "react";

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeUsername(e) {}

  onChangePassword(e) {}

  handleLogin(e) {}

  render() {
    return (
      <div className="mx-auto col-md-9 col-lg-10 m-4">
        <h4 className="mb-3">Carga Mascota</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">Valid first name is required.</div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">Valid last name is required.</div>
            </div>

            <div className="col-12">
              <label for="username" className="form-label">
                Usuario
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <div className="invalid-feedback">Your username is required.</div>
              </div>
            </div>

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

            <div className="col-md-5">
              <label for="country" className="form-label">
                Country
              </label>
              <select className="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">Please select a valid country.</div>
            </div>

            <div className="col-md-4">
              <label for="state" className="form-label">
                State
              </label>
              <select className="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div className="col-md-3">
              <label for="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    );;
  }
}