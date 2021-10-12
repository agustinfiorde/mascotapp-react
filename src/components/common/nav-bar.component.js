import "../../App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDashBoard: true,
    };
  }

  render() {
    const { showDashBoard } = this.state;
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to={"/"}
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img className="App-logo" height="52" src="dog.png" alt="" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>

              {showDashBoard && (
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link">
                    Dashboard
                  </Link>
                </li>
              )}

              <li>
                <Link to={"/mascota/form"} className="nav-link">
                  Cargar Mascota
                </Link>
              </li>
            </ul>

            {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form> */}

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </button>
              <button type="button" className="btn btn-warning">
                <Link to={"/sign-up"} className="nav-link">
                  Registro
                </Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
