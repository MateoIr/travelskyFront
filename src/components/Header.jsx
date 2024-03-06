import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import ServiceIconList from "./ServiceIconList";

const pages = ["Hoteles", "Pricing", "Blog"];
const settings = [
  { name: "Crear Usuario", link: "/user/register" },
  { name: "Igresar", link: "/user/login" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#64aad3" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, width: 200 }}>
              <img
                src="/travelskyLogo.png"
                sx={{ display: { xs: "none", md: "flex" }, height: 20, mr: 1 }}
              />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TRAVSKY
            </Typography>

            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                width: 200,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexFlow: "row-reverse",
                }}
              >
                <img
                  src="/travelskyLogo.png"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    height: 30,
                    mr: 2,
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TRAVSKY
            </Typography>

            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
              }}
            >
              <Tooltip
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexFlow: "row",
                }}
              >
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ pr: 4, width: 40 }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "55px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <Link to={setting.link}>
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <ServiceIconList></ServiceIconList>
    </>
  );
}
export default Header;
