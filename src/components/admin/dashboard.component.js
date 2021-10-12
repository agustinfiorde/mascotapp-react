import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./side-bar.component";
import TablaMascotas from "./tabla-mascotas.component";
import TablaUsuarios from "./tabla-usuarios.component";
import Detalle from "../mascota/detalle.component";
import ListaMascotas from "../mascota/lista-mascotas.component";
import Perfil from "../usuario/perfil.component";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.path = props.match.path;
    // console.log(props.location);
    // console.log(props.match);
    // console.log(props.history);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100">
            <Switch>
              <Route
                exact
                path={`${this.path}/tabla-mascotas`}
                component={TablaMascotas}
              />
              <Route
                exact
                path={[`${this.path}`, `${this.path}/tabla-usuarios`]}
                component={TablaUsuarios}
              />
              <Route
                exact
                path={`${this.path}/perfil`}
                component={Perfil}
              />
              <Route
                exact
                path={`${this.path}/lista`}
                component={ListaMascotas}
              />
               <Route
                exact
                path={`${this.path}/fav/:id`}
                component={Detalle}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
