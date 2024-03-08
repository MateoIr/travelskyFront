import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userValidationYup from "../../../hooks/userValidationYup";


const UserCreate = ({employee}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationYup()),
  });
  


  const onSubmit = (data) => {
    const person = {
      dni: data.dni,
      last_name: data.name,
      birthdate: data.birthdate,
      address: data.address,
      nationality: data.nationality,
      salary: data.salaryEmployee,
      post: data.postEmployee,
      user: {
        u_name: data.user_name,
        u_contrasena: data.password,
        u_email: data.email,
        u_celular: data.phone,
      },
    };
    console.log(person);
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
          id="name"
          label="Nombre"
          variant="standard"
          fullWidth
          type="text"
          {...register("name")}
          error={errors.name?.message}
        />
        <Typography textAlign={"center"}>{errors.name?.message}</Typography>

        <TextField
          id="last_name"
          label="Apellido"
          variant="standard"
          fullWidth
          type="text"
          {...register("last_name")}
          error={errors.last_name?.message}
        />
        <Typography textAlign={"center"}>
          {errors.last_name?.message}
        </Typography>

        <TextField
          id="user_name"
          label="Nombre de usuario"
          variant="standard"
          fullWidth
          type="text"
          {...register("user_name")}
          error={errors.user_name?.message}
        />
        <Typography textAlign={"center"}>
          {errors.user_name?.message}
        </Typography>

        <TextField
          id="dni"
          label="DNI"
          variant="standard"
          fullWidth
          type="text"
          {...register("dni")}
          error={errors.dni?.message}
        />
        <Typography textAlign={"center"}>{errors.dni?.message}</Typography>

        <TextField
          id="phone"
          label="Teléfono"
          variant="standard"
          fullWidth
          type="text"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <Typography textAlign={"center"}>{errors.phone?.message}</Typography>

        <TextField
          id="address"
          label="Direccion"
          variant="standard"
          fullWidth
          type="text"
          {...register("address")}
          error={errors.address?.message}
        />
        <Typography textAlign={"center"}>{errors.address?.message}</Typography>
        <TextField
          id="nationality"
          label="Nacionalidad"
          type="text"
          variant="standard"
          {...register("nationality")}
          error={errors.nationality?.message}
        />
        <Typography textAlign={"center"}>
          {errors.nationality?.message}
        </Typography>

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

        <TextField
        sx={{display:(employee!= undefined)? "flex":"none"}}
          id="postEmployee"
          label="Cargo del empleado"puesto
          type="text"
          variant="standard"
          fullWidth
          {...register("postEmployee")}
          error={errors.postEmployee?.message}
        />
        <Typography textAlign={"center"}>
          {errors.postEmployee?.message}
        </Typography>
        
        
        <TextField
          sx={{display:(employee!= undefined)? "flex":"none"}}
          id="salaryEmployee"
          label="Sueldo del empleado"
          type="text"
          variant="standard"
          fullWidth
          {...register("salaryEmployee")}
          error={errors.salaryEmployee?.message}
        />
        <Typography textAlign={"center"}>
          {errors.salaryEmployee?.message}
        </Typography>
        <Typography textAlign={"left"} sx={{ mt: 2 }}>
          Fecha de nacimineto
        </Typography>
        <TextField
          id="birthdate"
          name="birthdate"
          placeholder="mm dd aaaa"
          {...register("birthdate")}
          error={errors.birthdate?.message}
          sx={{ m: 1, width: 260 }}
        />
        <Typography textAlign={"center"}>
          {errors.birthdate?.message}
        </Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{
            maxWidth: 300,
            mt: 4,
            color: "white",
            backgroundColor: "#ddabab",
          }}
        >
          Crear
        </Button>
      </Box>
    </Container>
  );
};

export default UserCreate;
