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
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to={"/"}
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img class="App-logo" height="52" src="dog.png" alt="" />
            </Link>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                {showDashBoard && (
                  <li className="nav-item">
                    <Link to={"/dashboard"} className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                )}
              </li>
              <li>
                <Link to={"/mascota/form"} className="nav-link">
                  Cargar Mascota
                </Link>
              </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </button>
              <button type="button" class="btn btn-warning">
                <Link to={"/sign-up"} className="nav-link">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}