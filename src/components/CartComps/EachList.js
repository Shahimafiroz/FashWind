import React from "react";
import Cart from "./Cart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {
  ButtonGroup,
  Button,
  ListItem,
  IconButton,
  Typography,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  List,
} from "@mui/material";

function CartList({ cartItem }) {
  return (
    <div style={{ color: "#7c0000" }}>
      <Divider
        variant="inset"
        component="li"
        sx={{
          backgroundColor: "#7c0000",
          height: "1px",
        }}
      />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={cartItem.image} />
        </ListItemAvatar>
        <ListItemText
          primary={cartItem.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {cartItem.price}
              </Typography>

              <IconButton
              // onClick={() => removeElementsOnclickOfTheRemoveButton(item)}
              // onClick={""}
              >
                <DeleteOutlineIcon />
                {/* <p style={{ fontSize: "small" }}>ADD TO CART</p> */}
              </IconButton>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                  // onClick={() => incrementDecrement(item, "inc", "list")}
                  sx={{ backgroundColor: "#7c0000" }}
                >
                  +
                </Button>
                <Button sx={{ backgroundColor: "#1A4941" }}>
                  {cartItem.quantity}
                </Button>
                <Button
                  // onClick={() => incrementDecrement(item, "dec", "list")}
                  sx={{ backgroundColor: "#7c0000" }}
                >
                  -
                </Button>
              </ButtonGroup>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider
        variant="inset"
        component="li"
        sx={{
          backgroundColor: "#F1720C",
          height: "1px",
        }}
      />
    </div>
  );
}

export default CartList;
