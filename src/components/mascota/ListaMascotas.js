import React from "react";

export const ListaMascotas = () => {

  const mascotas = [1, 2, 3, 4, 5, 6, 4, 4, 4, 4, 4, 4, 4]; //await MascotaService.getPetsByUser();
    const rows = mascotas.map((m, i) => (
      <tr className="table-success" key={i}>
        <td>{m}</td>
        <td>random</td>
        <td>data</td>
        <td>
          {/* <a>
                    <i className="far fa-thumbs-up"></i>
                  </a> */}
        </td>

        <td>
          {/* <a>
                    <i className="fas fa-trash"></i>
                  </a> */}
        </td>
      </tr>
    ));

  return (
    <div>
        <h2 className="mt-4">Mis Mascotas</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Fav</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
  )
}