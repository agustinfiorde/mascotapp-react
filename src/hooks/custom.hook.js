import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [form, setForm] = useState(initialState);

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    setForm,
    handleChanges,
  };
};

export const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [roles, setRoles] = useState([]);

  return [auth, setAuth, roles, setRoles];
};
