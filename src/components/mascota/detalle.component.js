import React, { Component } from "react";
import RickAndMortyService from "../../services/rickandmorty.service";

export default class Detalle extends Component {
  state = { mascota: {} };

  componentDidMount() {
    const id = this.props.match.params.id;

    RickAndMortyService.getCharacterById(id).then((data) => {
      this.setState({ mascota: data });
    });
  }

  render() {
    return (
      <div className="row m-3">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-success">
                {this.state.mascota.species}
              </strong>
              <h3 className="mb-0 text-dark">{this.state.mascota.name}</h3>
              <div className="mb-1 text-muted">
                {new Date(this.state.mascota.created).toLocaleDateString()}
              </div>
              <div className="mb-1 text-muted"></div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This is a wider card with
                supporting text below as a natural lead-in to additional
                content. This is a wider card with supporting text below as a
                natural lead-in to additional content. This is a wider card with
                supporting text below as a natural lead-in to additional
                content.
              </p>
              <ul className="list-group mt-1">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </div>
            <img
              className="h-100 d-inline-block rounded card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={this.state.mascota.image}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
