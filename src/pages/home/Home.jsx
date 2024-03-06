import { Box, Container, Grid } from "@mui/material";
import HomeServiceCard from "../../components/HomeServiceCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
export const Home = () => {
  const serviceList = [
    {
      id: 1,
      link: "/service/bus-tikets",
      title: "Pasaje de colectivos",
      img: "https://images.unsplash.com/photo-1617479625255-43666e3a3509?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 2,
      link: "/service/plane-tikts",
      title: "Pasaje de avión",
      img: "https://images.unsplash.com/photo-1499063078284-f78f7d89616a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 3,
      link: "/service/train-tikets",
      title: "Pasaje de tren",
      img: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 4,
      link: "/service/hotels",
      title: "Hoteles",
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Reserva hoteles re piolas",
    },
    {
      id: 5,
      link: "/service/car-rent",
      title: "Alquiler de autos",
      img: "https://www.karvi.com.ar/blog/wp-content/uploads/2022/01/Cronos0-850x524.jpg",
      desc: "Los autos mas facheros que veras",
    },
    {
      id: 6,
      link: "/service/excursion",
      title: "Excursiones",
      img: "https://images.unsplash.com/photo-1621528833554-c7cc26249762?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 7,
      link: "/service/events-tikets",
      title: "Entradas a eventos",
      img: "https://images.unsplash.com/photo-1587407627257-27b7127c868c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "pasajes al mejor precio xd",
    },
  ];

  const serviceForHeach = serviceList.map((data) => (
    <Grid
      item
      sm={6}
      xs={12}
      sx={{
        mt: 2,
        display: "flex",
        alignContent: "center",
        justifyItems: "center",
      }}
      key={data.id}
    >
      <Box sx={{ p: 2 }}>
        <Link to={data.link}>
          <HomeServiceCard
            info={{
              title: data.title,
              img: data.img,
              desc: data.desc,
            }}
          />
        </Link>
      </Box>
    </Grid>
  ));

  return (
    <>
      <Header />

      <Box
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1575580280904-905f466584e0?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ backgroundColor: "#5e936564" }}>
          <Container>
            <Grid container>{serviceForHeach}</Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
