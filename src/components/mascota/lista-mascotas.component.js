import React, { Component } from "react";

export default class ListaMascotas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeUsername(e) {}

  onChangePassword(e) {}

  handleLogin(e) {}

  render() {
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
            <tbody>
              <tr className="table-success">
                <td>1,001</td>
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
              <tr>
                <td>1,001</td>
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
              <tr>
                <td>1,001</td>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
