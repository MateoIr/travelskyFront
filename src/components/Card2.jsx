
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Card2({ info }) {
  return (
    <Link to={`${info.id}`} information={info}>
      <Card sx={{ maxWidth: 260}}>
        <CardMedia sx={{ height: 190 }} image={info.img} title={info.name} />
        <CardContent sx={{ height: 80 }}>
          <Typography gutterBottom variant="h6" component="div">
            {info.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            ${info.cost}
          </Typography>
          <Typography 
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ height: 60, width: 170, overflow: "hidden" }}
          >
            {info.desc}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></CardActions>
      </Card>
    </Link>
  );
}
