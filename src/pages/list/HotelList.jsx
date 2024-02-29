import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card2 from "../../components/Card2";
import { Container, Grid } from "@mui/material";
export const HotelList = () => {
  const Hotels=[
    {
      id:"1",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"2",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"3",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },{
      id:"4",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },

    {
      id:"5",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"6",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"7",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"8",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"9",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    },
    {
      id:"10",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
      imgDesc: "desx",
      name: "Hotel 1",
      cost: "6000",
      desc: "hotel 1 descrition",
    }

  ];
  const hotelForHeach=Hotels.map((data)=>
    <Grid item xs={12} sm={6} md={3}   sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
      <Card2 key={data.id} info={data} /></Grid>);
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={1} sx={{ padding: 8 }}>
            {hotelForHeach}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
