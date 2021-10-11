import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeUsername(e) {}

  onChangePassword(e) {}

  handleLogin(e) {}

  render() {
    // let { path, url } = useRouteMatch();

    return (
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link to={"/dashboard/tabla-mascotas"} className="nav-link">
                Todas las Mascotas{" "}
                <i class="fa fa-table" aria-hidden="true"></i>{" "}
                <i class="fa fa-paw" aria-hidden="true"></i>
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/dashboard/tabla-usuarios"} className="nav-link">
                Todos los Usuarios{" "}
                <i class="fa fa-table" aria-hidden="true"></i>{" "}
                <i class="fa fa-user" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>
              <i class="fa fa-user" aria-hidden="true"></i> Nombre Usuario
            </span>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <Link to={"/dashboard/perfil"} className="nav-link">
                Mi Perfil <i class="fa fa-cog" aria-hidden="true"></i>
              </Link>
            </li>

            <li class="nav-item">
              <Link to={"/dashboard/lista"} className="nav-link">
                Mis Mascotas <i class="fas fa-list"></i>{" "}
                <i class="fa fa-paw" aria-hidden="true"></i>
              </Link>
            </li>

            <li class="nav-item">
              <Link to={"/dashboard/fav"} className="nav-link">
                Mi Mascota Favorita{" "}
                <i class="fa fa-heart" aria-hidden="true"></i>{" "}
                <i class="fa fa-paw" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
