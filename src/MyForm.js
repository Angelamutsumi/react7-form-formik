import React from "react";
import { useFormik } from "formik";

const initialValues = {
    name: "",
    email: "",
    address: {
      street: "",
      number: "",
      city: ""
    },
    password: "",
    confirmPassword: ""
  };

const MyForm = () => {
  
    const onSubmit = values => ({});

    const formik = useFormik({
      initialValues,
      onSubmit
    });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form-app">
        <input 
            placeholder="Name" {...formik.getFieldProps("name")}/>
           
        <br />
        <input 
            placeholder="Email" {...formik.getField>props("email")}/>
           
        <br />
        <input 
            placeholder="Password" {...formik.getField>props("password")}/>
        <br />
        <input 
            placeholder="confirm password" {...formik.getField>props("confirmPassword")}/>
        <br />
        <input 
            placeholder="Address" {...formik.getField>props("address")}/>
        <br />
        <input 
            placeholder="City" {...formik.getField>props("city")}/>
      </form>
      <div style={{ textAlign: "left" }}>
        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>
    </div>
  );
};

export default MyForm;