import React, { Component } from "react";

export default class Perfil extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="mx-auto col-md-9 col-lg-10 m-4">
        <h4 className="mb-3">Perfil</h4>
        <form className="needs-validation" novalidate>
          <div className="row g-3">
            <div className="col-sm-6">
              <label for="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder=""
                value=""
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
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
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            {/* <div className="col-12">
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
            </div> */}

            <div className="col-6">
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

            <div className="col-6">
              <label for="dni" className="form-label">
                DNI
              </label>
              <input
                type="text"
                className="form-control"
                id="dni"
                placeholder="DNI"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-6">
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="email"
                placeholder="Password"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-6">
              <label for="repeat-password" className="form-label">
                Repetir Password
              </label>
              <input
                type="password"
                className="form-control"
                id="email"
                placeholder="Repetir Password"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-md-6">
              <label for="profilePicture" className="form-label">
                Foto de Perfil
              </label>
              <input
                type="file"
                multiple
                className="form-control"
                id="profilePicture"
                placeholder=""
                value=""
                required
              />
              
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
