import { Container, Grid } from "@mui/material";
import ActionAreaCard from "../../components/Card1";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
export const Home = () => {
  const serviceList = [
    {
      id: 1,
      link: "/service/bus-tikets",
      title: "Pasaje de colectivos",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 2,
      link: "/service/plane-tikts",
      title: "Pasaje de avión",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 3,
      link: "/service/train-tikets",
      title: "Pasaje de tren",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 4,
      link: "/service/hotels",
      title: "Hoteles",
      img: "https://www.clarin.com/img/2022/08/18/VceQyzGL3_1200x0__1.jpg",
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
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      desc: "pasajes al mejor precio xd",
    },
    {
      id: 7,
      link: "/service/events-tikets",
      title: "Entradas a eventos",
      img: "https://www.aa.com/content/images/aadvantage-program/miles/redeem/redeem-miles-banner.jpg",
      desc: "pasajes al mejor precio xd",
    },
  ];

  const serviceForHeach = serviceList.map((data) => (
    <Grid
      item
      md={6}
      sm={12}
      sx={{ mt: 2, display: "flex", justifyContent: "center" }}
      key={data.id}
    >
      <Link to={data.link}>
        <ActionAreaCard
          info={{
            title: data.title,
            img: data.img,
            desc: data.desc,
          }}
        />
      </Link>
    </Grid>
  ));

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={3}>
          {serviceForHeach}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
