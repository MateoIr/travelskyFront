import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MailIcon from "@mui/icons-material/Mail";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  TableBody,
  TableCell,
  TableContainer,
} from "@mui/material";
import { Instagram, WhatsApp } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <List>
          <ListItemButton alignItems="center">
            <MailIcon></MailIcon>
            <ListItemText primary="Sent mail" sx={{ pl: 1 }} />
          </ListItemButton>
          <ListItemButton alignItems="center">
            <Instagram></Instagram>
            <ListItemText primary="Instagram" sx={{ pl: 1 }} />
          </ListItemButton>
          <ListItemButton alignItems="center">
            <WhatsApp></WhatsApp>
            <ListItemText primary="WhatsApp" sx={{ pl: 1 }} />
          </ListItemButton>
        </List>
      </Grid>
      <Grid item sm={12} md={6}>
        <typography variant="h6">
          <ul>
            <li>Contacto</li>
            <li>mail</li>
            <li>instagram</li>
            <li>Whatsapp</li>
            <li>Direccion</li>
          </ul>
        </typography>
      </Grid>
    </Grid>
  );
}
