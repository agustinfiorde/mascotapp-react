import React, { useState } from "react";
import UserService from "../../services/usuario.service";

const statuses = {
  200: "success",
  500: "danger",
};

export const RegistroForm = () => {
  const [formValues, setFormValues] = useState({});
  const [response, setResponse] = useState({
    finished: false,
  });

  // const [message, setMessage] = useState();
  // const [finished, setFinished] = useState(false);
  // const [status, setStatus] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handleInputChanges = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validPasswords = () => {
    const { password } = formValues;
    return password === passwordConfirmation;
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!validPasswords()) return;

    await UserService.register(formValues)
      .then((apiResponse) => {
        setResponse({
          ...response,
          status: apiResponse.status,
        });
        return apiResponse.json();
      })
      .then(({ message }) =>
        setResponse({
          ...response,
          message,
        })
      )
      .catch((err) => console.log(err))
      .finally(() =>
        setResponse({
          ...response,
          finished: true,
        })
      );
  };

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const { status, message, finished } = response;

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      {finished && (
        <div className={`alert alert-${statuses[status]}`} role="alert">
          {message}
        </div>
      )}
      <form className="needs-validation" novalidate>
        <div className="row g-3">
          <div className="col-12">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleInputChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label for="address" className="form-label">
              Clave
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password"
              onChange={handleInputChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label for="address2" className="form-label">
              Repetir Clave
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
          </div>

          <hr className="my-4" />

          <button
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleClick}
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};