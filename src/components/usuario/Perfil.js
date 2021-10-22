import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import UserService from "../../services/usuario.service";

export const Perfil = () => {

  const [formValues, setFormValues] = useState({});
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [user, setUser] = useState(AuthService.getUser());

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleChange = (e) => {
    console.log(user);
    setUser((prevProps) => ({
      ...prevProps,
      [e.target.name]: e.target.value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validPasswords()) return;

    UserService.edit(user)
      .then((response) => {
        AuthService.setLocalStorage("user", response.data.token.user);
        setUser(response.data.token.user);

      });

    // await UserService.register(formValues)
    //   .then((apiResponse) => {
    //     setResponse({
    //       ...response,
    //       status: apiResponse.status,
    //     });
    //     return apiResponse;
    //   })
    //   .then(({ message }) =>
    //     setResponse({
    //       ...response,
    //       message,
    //     })
    //   )
    //   .catch((err) => console.log(err))
    //   .finally(() =>
    //     setResponse({
    //       ...response,
    //       finished: true,
    //     })
    //   );
  }

  const validPasswords = () => {
    const { password } = formValues;
    return password === passwordConfirmation;
  };




  return (
    <div className="mx-auto col-md-9 col-lg-10 m-4">
      <h4 className="mb-3">Perfil</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nombre"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Apellido"
              value={user.lastName}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={user.email}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="dni" className="form-label">
              DNI
            </label>
            <input
              type="text"
              className="form-control"
              id="dni"
              name="dni"
              placeholder="DNI"
              value={user.dni}
              onChange={handleChange}
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="email"
              placeholder="Password"
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="repeat-password" className="form-label">
              Repetir Password
            </label>
            <input
              type="password"
              className="form-control"
              id="email"
              
              placeholder="Repetir Password"
              onChange={handlePasswordConfirmation}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-md-6">
            <label htmlFor="profilePicture" className="form-label">
              Foto de Perfil
            </label>
            <input
              type="file"
              multiple
              className="form-control"
              id="profilePicture"
              placeholder=""
              value=""
              required
            />

          </div>

          <div className="col-md-6">
            <img
              className="rounded"
              height="300px"
              src="https://c.tenor.com/xhj_nO3GCQ0AAAAd/so-pretty-dog.gif"
              alt="profile"
            />
          </div>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>
          Continue to checkout
        </button>
      </form>
    </div>
  )
}

