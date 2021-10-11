import "../../App.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.appTitle = "MascotAPP";
    this.year = new Date().getFullYear();
  }

  render() {
    return (
      <div class="container absolute-bottom">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; {this.year} {this.appTitle}</p>
          <Link
            to={"/"}
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              class="App-logo"
              height="52"
              src="dog.png"
              alt="perro-giratorio"
            />
          </Link>

          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <Link to={"/"} className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a
                href="https://eggeducacion.com/es-AR/"
                class="nav-link px-2 text-muted"
                target="_blank" rel="noreferrer"
              >
                EGG
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.youtube.com/c/EggEducaci%C3%B3n/playlists?view=50&sort=dd&shelf_id=3"
                class="nav-link px-2 text-muted"
                target="_blank" rel="noreferrer"
              >
                EGG Youtube
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://www.linkedin.com/company/eggcooperation/mycompany/"
                class="nav-link px-2 text-muted"
                target="_blank" rel="noreferrer"
              >
                EGG Linkedin
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
