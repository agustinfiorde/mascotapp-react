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

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showModeratorBoard: "asd"
    };
  }

  render() {
    return (
      <div className="">
        <NavBar/>

        <Switch>
          <Route exact path={["/", "/home"]} component={Main} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={FormularioRegistro} />
          <Route path="/mascota/detalle/:id" component={Detalle} />
          <Route path="/mascota/form" component={MascotaForm} />
        </Switch>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
