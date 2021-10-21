import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideBar from "./SideBar";
import TablaMascotas from "./TablaMascotas";
import TablaUsuarios from "./TablaUsuarios";
import Detalle from "../mascota/Detalle";
import { ListaMascotas } from "../mascota/ListaMascotas";
import Perfil from "../usuario/Perfil";
import { DASHBOARD } from "../../constants/app.constants";
import { AuthContext } from "../../context/context";

export const Dashboard = (props) => {
  const { auth } = useContext(AuthContext);
  // const path = props.match.path;

  if (!auth) return <Redirect to={"/login"} />;

  return (
    <div>
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
    </div>
  );
};
