import React, { Component } from "react";

export default class Perfil extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="col-md-9 col-lg-10 m-4">
        <h4 class="mb-3">Perfil</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">
                Apellido
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">
                Usuario
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <div class="invalid-feedback">Your username is required.</div>
              </div>
            </div>

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

            <div class="col-md-5">
              <label for="country" class="form-label">
                Country
              </label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">
                State
              </label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="zip"
                placeholder=""
                required
              />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    );
  }
}
