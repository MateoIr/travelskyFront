import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Route } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Card2({ info }) {
  return (
    <Card sx={{ maxWidth: 240 }}>
      <CardMedia sx={{ height: 140 }} image={info.img} title={info.name} />
      <CardContent sx={{ height: 100 }}>
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
          sx={{ height: 60, width: 200, overflow: "hidden" }}
        >
          {info.desc}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      ></CardActions>
      <Button size="large" sx={{ pr: 3 }}>
        <Link to={`/hotels/${info.id}`}>
        Learn More
        </Link>
      </Button>
    </Card>
  );
}
