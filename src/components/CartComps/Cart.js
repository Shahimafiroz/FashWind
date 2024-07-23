import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
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
import { useSelector } from "react-redux";
import productsReducer from "../../Redux/Products/productsReducer";
import { IconButton } from "@mui/material";

function Cart({ open, openCart }) {
  const state = useSelector((state) => state.productsReducer.cartItems);
  console.log("form the cart", state);
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <Box sx={{ width: 500 }} role="presentation" onClick={openCart}>
        <IconButton sx={{ padding: "1rem" }}>
          <CloseIcon />
        </IconButton>
        <List>
          <EachList />
        </List>
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
