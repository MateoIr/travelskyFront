import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({info}) {



  return (
    <Card sx={{ maxWidth: 600,maxHeight:"auto"}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={info.img}
          alt="green iguana"
        />
        <CardContent sx={{pl:0,display:"flex", flexFlow:"column", alignItems:"center",justifyContent:"center"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{width:"90%"}}>
            <div>{info.title}</div>
          </Typography>
          <Typography variant="body2" color="text.secondary"  sx={{maxWidth:"90%"}}>
            {info.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}