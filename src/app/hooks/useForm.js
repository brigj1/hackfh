'use client'

import { useState } from 'react'
export const useForm = (initialState, callback) => {

  const [formData, setFormData] = useState(initialState);

  const handleSubmitt = (e) => {  // for now, handleSubmitt is not a typo. Prevents mixing.
    if (e) e.preventDefault();
    callback();
  };

  const handleChange = (e) => {
    //console.log("e_target", e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = () => {
      setFormData(initialState)
  }

  const editFormValues = (formData) => {
      setFormData(formData)
  }

  return {
      formData, 
      handleSubmitt, 
      handleChange, 
      reset, 
      editFormValues
  }

};
