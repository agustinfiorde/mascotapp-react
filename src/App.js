import "./App.css";
import React from "react";
import { AuthContext } from "./context/context";
import { useAuth } from "./hooks/custom.hook";
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

export const App = () => {
  const [auth, setAuth, roles, setRoles] = useAuth();

  return (
    <div className="">
      <AuthContext.Provider value={{ auth, setAuth, roles, setRoles }}>
        <NavBar />

        <Switch>
          <Route exact path={HOME} component={Main} />
          <Route path={DASHBOARD.ROOT} component={Dashboard} />
          <Route path={LOGIN} component={Login} />
          <Route path={SIGNUP} component={RegistroForm} />
          <Route path={MASCOTAS.DETALLE()} component={Detalle} />
          <Route path={MASCOTAS.FORM()} component={MascotaForm} />
        </Switch>
      </AuthContext.Provider>

      <Footer />
    </div>
  );
};
