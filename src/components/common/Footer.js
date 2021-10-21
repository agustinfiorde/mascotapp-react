import "../../App.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.year = new Date().getFullYear();
    this.appTitle = "MascotAPP";
  }

  render() {
    return (
      <div className="container absolute-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">
            &copy; {this.year} {this.appTitle}
          </p>

          <Link
            to={"/"}
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img
              className="App-logo"
              height="52"
              src="dog.png"
              alt="perro-giratorio"
            />
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to={"/"} className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://eggeducacion.com/es-AR/"
                className="nav-link px-2 text-muted"
                target="_blank"
                rel="noreferrer"
              >
                EGG
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.youtube.com/c/EggEducaci%C3%B3n/playlists?view=50&sort=dd&shelf_id=3"
                className="nav-link px-2 text-muted"
                target="_blank"
                rel="noreferrer"
              >
                EGG Youtube
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/company/eggcooperation/mycompany/"
                className="nav-link px-2 text-muted"
                target="_blank"
                rel="noreferrer"
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
