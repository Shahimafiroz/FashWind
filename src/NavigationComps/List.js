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

function CartList({
  item,
  removeElementsOnclickOfTheRemoveButton,
  incrementDecrement,
}) {
  return (
    <div>
      <Divider
        variant="inset"
        component="li"
        sx={{
          backgroundColor: "#E68BBE",
          height: "1px",
        }}
      />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={item.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.price}
              </Typography>

              <IconButton
                onClick={() => removeElementsOnclickOfTheRemoveButton(item)}
              >
                <DeleteOutlineIcon />
                {/* <p style={{ fontSize: "small" }}>ADD TO CART</p> */}
              </IconButton>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                  onClick={() => incrementDecrement(item, "inc", "list")}
                  sx={{ backgroundColor: "#F4B8DA" }}
                >
                  +
                </Button>
                <Button sx={{ backgroundColor: "#E68BBE" }}>
                  {item.quantity}
                </Button>
                <Button
                  onClick={() => incrementDecrement(item, "dec", "list")}
                  sx={{ backgroundColor: "#F4B8DA" }}
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
          backgroundColor: "#F9CEE7",
          height: "1px",
        }}
      />
    </div>
  );
}

export default CartList;
