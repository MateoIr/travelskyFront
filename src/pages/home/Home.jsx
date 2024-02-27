import React from "react";
import { Grid } from "@mui/material";
import ResponsiveAppBar from './Header'
import ActionAreaCard from "./Card1";
import SpacingGrid from "./Footer";
export const Home = () => {
  return (
    <>
    
      
      <ResponsiveAppBar/>
      
      <Grid container spacing={3}>
        <Grid item md={7} sm={12} sx={{mt:2, display:"flex", justifyContent:"center"}}><ActionAreaCard info={{title:"pasajes",img:"https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",desc:"pasajes al mejor precio xd"}}/></Grid>
        <Grid item md={5} sm={12} sx={{mt:2, display:"flex", justifyContent:"center"}}><ActionAreaCard info={{title:"Hoteles",img:"https://www.clarin.com/img/2022/08/18/VceQyzGL3_1200x0__1.jpg",desc:"Reserva hoteles re piolas"}}/></Grid>
        <Grid item md={5} sm={12} sx={{mt:2, display:"flex", justifyContent:"center"}}><ActionAreaCard info={{title:"vehículos",img:"https://www.karvi.com.ar/blog/wp-content/uploads/2022/01/Cronos0-850x524.jpg",desc:"Los autos mas facheros que veras"}}/></Grid>
        <Grid item md={7} sm={12} sx={{mt:2, display:"flex", justifyContent:"center"}}><ActionAreaCard info={{title:"pasajes",img:"https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",desc:"pasajes al mejor precio xd"}}/></Grid>
        <Grid item md={12} sm={12} sx={{mt:2, display:"flex", justifyContent:"center"}}><ActionAreaCard info={{title:"Paquetes",img:"https://www.aa.com/content/images/aadvantage-program/miles/redeem/redeem-miles-banner.jpg",desc:"pasajes al mejor precio xd"}}/></Grid>
      </Grid> 
      <SpacingGrid/>
    </>
  );
};
