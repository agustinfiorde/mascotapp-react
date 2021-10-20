import React, { Component } from "react";

export default class TablaUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const usuarios = [1,2,3,4,5,6,4,4,4,4,4,4,4] ;//await UsuarioService.getAllUsers();
    const rows = usuarios.map((u) => (
      <tr>
        <td>1,001</td>
        <td>random</td>
        <td>data</td>
        <td>placeholder</td>
        <td>text</td>
      </tr>
    ));

    return (
      <div>
        <h2 className="mt-4">Tabla Usuarios</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">DNI</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Foto</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
