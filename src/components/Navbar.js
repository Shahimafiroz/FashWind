/* eslint-disable */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import Cart from "./CartComps/Cart";

const pages = [
  { name: "Home", NavLink: "/", id: 1 },
  { name: "Products", NavLink: "/products", id: 2 },
  { name: "Contact", NavLink: "/contact", id: 3 },
];
const settings = ["Profile", "Cart", "Orders", "Logout"];
const users = [
  { name: "Profile", NavLink: "/ParentUser", id: 1 },
  { name: "Cart", NavLink: "/Cart", id: 2 },
  { name: "Orders", NavLink: "/", id: 3 },
  { name: "LogOut", NavLink: "/", id: 4 },
];

function Navbar() {
  /////---logic for openeing cart ---///////
  const [open, setOpen] = React.useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const Navigate = useNavigate();
  const handelNavigate = (link) => {
    console.log(link);
    Navigate(link);
  };

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleUserMenu = () => {
    setShowUserMenu((prev) => !prev);
  };
  const openCart = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: "#1e1305",
          display: "flex",
          boxShadow: "none",
          justifyContent: "space-evenly",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Sevillana",
                fontSize: "30px",
                fontWeight: 500,
                color: "#EDDFD0",
                textDecoration: "none",
              }}
            >
              FashWind
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="#EDDFD0"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={showMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(showMenu)}
                onClose={handleMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={() => handelNavigate(page.NavLink)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#EDDFD0",
                textDecoration: "none",
              }}
            >
              FashWind
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handelNavigate(page.NavLink)}
                  sx={{
                    my: 2,
                    color: "#EDDFD0",
                    display: "block",
                    fontFamily: "Nanum Myeongjo",
                    fontWeight: "bold",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <Tooltip title="Cart items">
                <IconButton onClick={openCart} sx={{ p: 2, m: 1 }}>
                  <ShoppingCartIcon sx={{ color: "#EDDFD0" }} />
                  <Drawer anchor="right" open={open} onClose={openCart}>
                    <Cart open={open} onClose={openCart} />
                  </Drawer>
                </IconButton>
              </Tooltip>

              <Tooltip title="User" sx={{ padding: "50px" }}>
                <IconButton
                  onClick={handleUserMenu}
                  sx={{ p: 0, paddingRight: "30px" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/58/John_Cena_2024.png"
                  />
                </IconButton>
              </Tooltip>

              <Tooltip title="Login / Register" sx={{ padding: "50px" }}>
                <Button
                  onClick={() => handelNavigate("/loginRegister")}
                  variant="contained"
                  sx={{
                    background: "#20170c",
                    color: "#f1720c",
                    textTransform: "capitalize",
                    // fontFamily:'Sevillana',
                    fontFamily: "Cormorant Upright",
                    fontWeight: "bold",

                    "&:hover": {
                      background: "#1a4941",
                      color: "#f1720c",
                    },
                  }}
                >
                  Login / Register
                </Button>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={showUserMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(showUserMenu)}
                onClose={handleUserMenu}
              >
                {/* ButtonBase */}
                {users.map((user) => (
                  <MenuItem key={user.id} onClick={handleUserMenu}>
                    <Typography textAlign="center">{user.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
