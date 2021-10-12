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
              <label for="nickName" className="form-label">
                Apodo
              </label>
              <input
                type="text"
                className="form-control"
                id="nickName"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">Valid Apodo is required.</div>
            </div>

            <div className="col-sm-6">
              <label for="petNumber" className="form-label">
                Numero Mascotuno
              </label>
              <input
                type="text"
                className="form-control"
                id="petNumber"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid petNumber is required.
              </div>
            </div>

            <div className="col-6">
              <label for="breed" className="form-label">
                Raza
              </label>
              <div className="input-group has-validation">
                <select className="form-select" id="country" required>
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
            </div>

            <div className="col-6">
              <label for="born" className="form-label">
                Nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="petNumber"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid petNumber is required.
              </div>
            </div>

            <div className="col-md-6">
              <label for="profilePicture" className="form-label">
                Foto de Perfil
              </label>
              <input
                type="file"
                className="form-control"
                id="petNumber"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="rounded"
                height="300px"
                src="https://c.tenor.com/xhj_nO3GCQ0AAAAd/so-pretty-dog.gif"
                alt="profile"
              />
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    );
  }
}
