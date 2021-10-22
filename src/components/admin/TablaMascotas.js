import React, { useState, useEffect } from "react";
import MascotaService from "../../services/mascota.service";

export const TablaMascotas = () => {

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    MascotaService.getAllPets()
      .then((response) => setMascotas(response.data.pets))
      .catch(() => setMascotas([]))
  }, []);

  const rows = mascotas.map((m, i) => (
    <tr key={i}>
      <td>{m.petNumber}</td>
      <td>{m.nickname}</td>
      <td>{m.breed}</td>
      <td>{m.born}</td>
      <td>{m.id}</td>
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
  )
}
