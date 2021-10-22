import React, { Component } from "react";
// import Card from "../mascota/card.component";
import { Card } from "../mascota/Card";

export default class Cards extends Component {

  state = { mascotas: [] };

  render() {
    this.listItems = this.props.mascotas.map((m) => (
      <Card mascota={m} key={m.id} />
    ));

    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {this.listItems}
          </div>
        </div>
      </div>
    );
  }
}
