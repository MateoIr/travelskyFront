import { Box, Grid } from "@mui/material";
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsTransitFilledIcon from "@mui/icons-material/DirectionsTransitFilled";
import FestivalIcon from "@mui/icons-material/Festival";
import HikingIcon from "@mui/icons-material/Hiking";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import { Link } from "react-router-dom";
DirectionsCarIcon;

const ServiceIconList = () => {
  const styles = {
    link: {
      textDecoration: "none",
      textAlign: "center",
      color: "#EAE4FA",
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          p: 1,
          pl: { xs: 3, md: 20, lg: 30 },
          pr: { xs: 3, md: 20, lg: 30 },
          backgroundColor: "#64aad3",
          borderBottom: 3,
          borderBlockColor: "#EAE4FA",
        }}
        columns={7}
      >
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/hotels">
              <LocalHotelIcon></LocalHotelIcon>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/car-rent">
              <DirectionsCarIcon></DirectionsCarIcon>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/plane-tikts">
              <AirplanemodeActiveIcon></AirplanemodeActiveIcon>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/bus-tikets">
              <DirectionsBusIcon></DirectionsBusIcon>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/events-tikets">
              <FestivalIcon></FestivalIcon>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/train-tikets">
              <DirectionsTransitFilledIcon></DirectionsTransitFilledIcon>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box sx={styles.icon}>
            <Link style={styles.link} to="/service/excursion">
              <HikingIcon></HikingIcon>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceIconList;
