import React from "react";
import Cart from "./Cart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/Logo.png";
import Drawer from "@mui/material/Drawer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Navbar({ cartItems, removeElementsOnclickOfTheRemoveButton }) {
  // logic for openeing the drawer
  const [open, setOpen] = React.useState(false);
  const openCart = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              backgroundColor: "#e68bbe",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  alt="err"
                  style={{ width: "3rem", height: "3.5rem" }}
                  src={logo}
                ></img>
                <p>FashWind</p>
              </Typography>
              <IconButton
                onClick={openCart}
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
                <Typography>{/* add the cart.length here */}</Typography>
                <Drawer anchor="right" open={open} onClose={openCart}>
                  <Cart
                    openCart={openCart}
                    cartItems={cartItems}
                    removeElementsOnclickOfTheRemoveButton={
                      removeElementsOnclickOfTheRemoveButton
                    }
                  />
                </Drawer>
              </IconButton>
              <Button color="inherit">Log Out </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}

export default Navbar;
