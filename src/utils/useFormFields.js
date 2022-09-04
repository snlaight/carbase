import { useState } from 'react';

export const useFormFields = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetFormFields = () => setValues(initialValues);

  return [values, handleChange, resetFormFields];
};
