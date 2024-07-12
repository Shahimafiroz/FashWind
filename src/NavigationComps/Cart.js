import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CartList from "./List";
function Cart({ openCart, cartItems, removeElementsOnclickOfTheRemoveButton }) {
  console.log(cartItems[0]);
  return (
    <div>
      <Box sx={{ width: 500 }} role="presentation" onClick={openCart}>
        <Typography sx={{ padding: "1rem" }}>
          <IconButton
            onClick={openCart}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, padding: "10px" }}
          >
            <CloseIcon />
          </IconButton>
        </Typography>

        <div sx={{ padding: "1rem" }}>
          {cartItems.map((item, index) => (
            <List key={index} sx={{ padding: "1rem" }}>
              <CartList
                item={item}
                removeElementsOnclickOfTheRemoveButton={
                  removeElementsOnclickOfTheRemoveButton
                }
              />
            </List>
          ))}
        </div>
        {/* ********************** Actions -delete , total********************************* */}
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
