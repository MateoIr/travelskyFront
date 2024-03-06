
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Card2 from "../../../components/Card2";
import { Container, Grid } from "@mui/material";

export const ServiceList = ({listado}) => {
 
  // eslint-disable-next-line react/prop-types
  const serviceForHeach = listado.map((data) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      key={data.id} 
      sx={{ mt: 2, display: "flex", justifyContent: "center",p:1 }}
    >
      <Card2 key={data.id} info={data}/>
    </Grid>
  ));
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={0} sx={{ padding: 6 }}>
          {serviceForHeach}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
