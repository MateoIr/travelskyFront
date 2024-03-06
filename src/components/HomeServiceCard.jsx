import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const styles = {
  cardContent: {
    pl: 0,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAE4FA",
  },
};

export default function HomeServiceCard({ info }) {
  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.img}
          alt="green iguana"
        />
        <CardContent sx={styles.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ width: "90%" }}
          >
            <div>{info.title}</div>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: "90%" }}
          >
            {info.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
