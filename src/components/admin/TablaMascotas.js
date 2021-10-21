import React, { Component } from "react";

export default class TablaMascotas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const mascotas = [1,2,3,4,5,6,4,4,4,4,4,4,4] ;//await MascotaService.getAllPets();
    const rows = mascotas.map((m, i) => (
      <tr key={i}>
        <td>1,001</td>
        <td>random</td>
        <td>data</td>
        <td>placeholder</td>
        <td>text</td>
      </tr>
    ));

    return (
      <div>
        <h2 className="mt-4">Tabla Mascotas</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Nro Mascotuno</th>
                <th scope="col">Apodo</th>
                <th scope="col">Raza</th>
                <th scope="col">Nacimiento</th>
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
