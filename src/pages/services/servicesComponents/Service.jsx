
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
export const Service = () => {
  const hotel = [
    {
      id: "1",
      name: "Casa re piola",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cupiditate aspernatur vero natus vitae. Ad quo aperiam distinctioadipisci dolorum, modi illo vero veniam dolores fuga saepe tenetur  voluptatum, quaerat quae?",
      img: "https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={8.1}
            sx={{ height: "auto", overflowWrap: "break-word", p: 3 }}
          >
            <Typography variant="h4">
              {" "}
              <div>{hotel.name}Casa Piola</div>
            </Typography>
          </Grid>

          <Grid item xs={12} md={3.9} sx={{ p: 3 }}>
            <Box display={"flex"} sx={{ maxWidth: 265 }}>
              <Button
                variant="outlined"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <SendIcon />
                Compartir
              </Button>
              <Button variant="contained" startIcon={<FavoriteIcon />}>
                Favoritos
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} sm={12} md={12} sx={{ margin: 6 }}>
            <img
              src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2022/06/20/62b0c33777e3d83239159a6a.webp"
              alt=""
              srcSet=""
            />
          </Grid>
          <Grid item sm={6} md={8} sx={{ p: 4 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            maxime quis minus, aspernatur vero assumenda odit excepturi
            exercitationem, accusantium rem natus optio itaque reprehenderit,
            ipsam tenetur. Veniam tenetur nihil vitae.
          </Grid>
          <Grid item sm={6} md={4} sx={{display:"flex",alignItems:"end",padding:3} }>
            <Typography variant="h6">Costo:$6000</Typography>
            <Button
              variant="contained"
              sx={{
                ml:2
              }}
            >
              comprar
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </>
  );
};
