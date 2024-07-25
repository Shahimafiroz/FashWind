import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import EachList from "./EachList";
import CloseIcon from "@mui/icons-material/Close";
// Redux imports
import { useDispatch, useSelector } from "react-redux";
import productsReducer from "../../Redux/Products/productsReducer";
import { IconButton } from "@mui/material";

function Cart({ open, openCart }) {
  const cartItems = useSelector((state) => state.productsReducer.cartItems);
  const dispatch = useDispatch();
  console.log("today from the cart", cartItems);
  return (
    <div
      style={{
        flex: 1,
        padding: "1rem 2rem",
        background: "#ede0d0",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/batthern.png")',
        display: "flex",
        flexDirection: "column",
        color: "#F1720C",
      }}
    >
      <Box sx={{ width: 500 }} role="presentation" onClick={openCart}>
        <IconButton sx={{ padding: "1rem", color: "#F1720C" }}>
          <CloseIcon />
        </IconButton>
        {cartItems.map((cartItem) => {
          console.log(cartItem.clickedProduct);
          return (
            <List>
              <EachList cartItem={cartItem.clickedProduct} />
            </List>
          );
        })}
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default Cart;
