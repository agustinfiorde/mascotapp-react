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
