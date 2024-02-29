import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const UserCreate = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Debe ingresar un valor"),
    email: yup
      .string()
      .email("Debe ser un email")
      .required("Debe ingresar un valor"),
    password: yup
      .string()
      .min(4, "Debe tener minimo 4 caracteres")
      .max(20, "Debe tener minimo 20 caracteres")
      .required("Debe ingresar un valor"),
    password: yup.string().min(4,"Debe tener como minimo 4 letras").max(20,"Debe tener como maximo 4 letras").required("Debe ingresar un valor"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords must be the same"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
    console.log(data);
  };
  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        sx={{
          backgroundColor: "#40373724",
          maxWidth: 300,
          p: 4,
          borderRadius: 4,
          border: "2px solid grey",
        }}
      >
        <Typography variant="h5">Registrar</Typography>
        <TextField
          id="fullName"
          label="Nombre"
          variant="standard"
          fullWidth
          type="text"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <Typography textAlign={"center"}>{errors.fullName?.message}</Typography>
        <TextField
          id="email"
          label="Email"
          type="text"
          variant="standard"
          {...register("email")}
          error={errors.email?.message}
        />
        <Typography textAlign={"center"}>{errors.email?.message}</Typography>
        <TextField
          id="password"
          label="Contraseña"
          type="password"
          variant="standard"
          fullWidth
          {...register("password")}
          error={errors.password?.message}
        />
        <Typography textAlign={"center"}>{errors.password?.message}</Typography>
        <TextField
          id="confirmPassword"
          label="Confirmar contraseña"
          type="password"
          variant="standard"
          fullWidth
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <Typography textAlign={"center"}>
          {errors.confirmPassword?.message}
        </Typography>
        <Button variant="contained" type="submit" sx={{ maxWidth: 300, mt: 4, color:"white",backgroundColor:"#ddabab"}}>
          Crear
        </Button>
      </Box>
    </Container>
  );
};

export default UserCreate;
