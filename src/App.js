import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/common/footer.component";
import NavBar from "./components/common/nav-bar.component";
import Main from "./components/common/main.component";
import Login from "./components/common/login.component";
import FormularioRegistro from "./components/common/formulario-registro.component";
import Dashboard from "./components/admin/dashboard.component";
import MascotaForm from "./components/mascota/formulario.component";
import Detalle from "./components/mascota/detalle.component";
import "./paths";
import {
  DASHBOARD,
  HOME,
  LOGIN,
  MASCOTAS,
  SIGNUP,
} from "./paths";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModeratorBoard: "asd",
    };
  }

  render() {
    return (
      <div className="">
        <NavBar />

        <Switch>
          <Route exact path={HOME} component={Main} />
          <Route path={DASHBOARD.ROOT} component={Dashboard} />
          <Route path={LOGIN} component={Login} />
          <Route path={SIGNUP} component={FormularioRegistro} />
          <Route path={MASCOTAS.DETALLE} component={Detalle} />
          <Route path={MASCOTAS.FORM} component={MascotaForm} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
