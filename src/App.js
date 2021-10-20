import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/common/Footer";
import { NavBar } from "./components/common/NavBar";
import Main from "./components/common/Main";
import { Login } from "./components/common/Login";
import { RegistroForm } from "./components/common/RegistroForm";
import Dashboard from "./components/admin/Dashboard";
import { MascotaForm } from "./components/mascota/MascotaForm";
import Detalle from "./components/mascota/Detalle";
import {
  DASHBOARD,
  HOME,
  LOGIN,
  MASCOTAS,
  SIGNUP,
} from "./constants/app.constants";

const user = {
  isLoggedIn: false,
};

const UserContext = React.createContext(user);

class App extends Component {
  render() {
    return (
      <div className="">
        <UserContext.Provider>
          <NavBar />

          <Switch>
            <Route exact path={HOME} component={Main} />
            <Route path={DASHBOARD.ROOT} component={Dashboard} />
            <Route path={LOGIN} component={Login} />
            <Route path={SIGNUP} component={RegistroForm} />
            <Route path={MASCOTAS.DETALLE()} component={Detalle} />
            <Route path={MASCOTAS.FORM()} component={MascotaForm} />
          </Switch>
        </UserContext.Provider>

        <Footer />
      </div>
    );
  }
}

export default App;
