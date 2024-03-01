import React from 'react'
import * as yup from "yup";

const userValidationYup = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Debe ingresar un valor"),
        last_name: yup.string().required("Debe ingresar un valor"),
        dni: yup
          .number()
          .required("Debe ingresar un valor")
          .typeError("sin espacios ni puntos"),
        phone: yup
          .number()
          .required("Debe ingresar un valor")
          .typeError("sin espacios ni puntos"),
        address: yup.string().required("Debe ingresar un valor"),
        nationality: yup.string().required("Debe ingresar un valor"),
        user_name: yup.string().required("Debe ingresar un valor"),
        email: yup
          .string()
          .email("Debe ser un email")
          .required("Debe ingresar un valor"),
        password: yup
          .string()
          .min(4, "Debe tener minimo 4 caracteres")
          .max(20, "Debe tener minimo 20 caracteres")
          .required("Debe ingresar un valor"),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
        birthdate: yup.date().required().typeError("Invalido, ej: 20/12/2000"),})
  return schema
}

export default userValidationYup
