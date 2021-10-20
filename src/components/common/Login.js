import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import UserService from "../../services/usuario.service";



export const Login = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fakeLogin = function() {
    UserService.logFakeUser();
    setIsLoggedIn(true);
  };

  return (
    <div className="text-center">
        <main className="form-signin">
          <form>
            <i
              className="fa fa-address-card-o fa-3x mb-4"
              aria-hidden="true"
            ></i>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Recordarme
              </label>
              <Link to={"/sign-up"} className="m-5">
                Registro
              </Link>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={fakeLogin}>
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
      </div>
  )
}

