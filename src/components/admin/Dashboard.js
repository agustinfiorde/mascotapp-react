import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import TablaMascotas from "./TablaMascotas";
import TablaUsuarios from "./TablaUsuarios";
import Detalle from "../mascota/Detalle";
import ListaMascotas from "../mascota/ListaMascotas";
import Perfil from "../usuario/Perfil";
import { DASHBOARD } from "../../constants/app.constants";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.path = props.match.path;
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
                path={DASHBOARD.TABLA_MASCOTAS()}
                component={TablaMascotas}
              />
              <Route
                exact
                path={DASHBOARD.TABLA_USUARIOS()}
                component={TablaUsuarios}
              />
              <Route exact path={DASHBOARD.PERFIL()} component={Perfil} />
              <Route exact path={DASHBOARD.LISTA()} component={ListaMascotas} />
              <Route exact path={DASHBOARD.FAV()} component={Detalle} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}
