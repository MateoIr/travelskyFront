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

export default function Footer() {
  return (
    <Grid container sx={{backgroundColor:"#ddabab",mt:5}}>
      <Grid item sm={12} md={6}>
        <List>
          <ListItemButton alignItems="center">
            <MailIcon></MailIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>
          <ListItemButton alignItems="center">
            <Instagram></Instagram>
            <ListItemText primary="Instagram" />
          </ListItemButton>
          <ListItemButton alignItems="center">
            <WhatsApp></WhatsApp>
            <ListItemText primary="WhatsApp"/>
          </ListItemButton>
        </List>
      </Grid>
      <Grid item sm={12} md={6}>
      <List>
          <ListItemButton alignItems="center">
            <MailIcon></MailIcon>
            <ListItemText primary="Contacto" />
          </ListItemButton>
          <ListItemButton alignItems="center">
            <Instagram></Instagram>
            <ListItemText primary="mail" />
          </ListItemButton>
          <ListItemButton alignItems="center">
            <WhatsApp></WhatsApp>
            <ListItemText primary="instagram"/>
          </ListItemButton>
        </List>
        
      </Grid>
    </Grid>
  );
}
