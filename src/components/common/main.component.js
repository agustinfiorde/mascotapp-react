import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeUsername(e) {}

  onChangePassword(e) {}

  handleLogin(e) {}

  render() {
    return (
      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Album example</h1>
              <p class="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <Link to={"/mascota/form"} className="btn btn-primary my-2">
                  Carga una Mascota
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Cartas */}
      </main>
    );
  }
}
