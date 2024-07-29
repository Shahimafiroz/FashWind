import React from "react";
import Cart from "./Cart";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
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
import productsReducer from "../../Redux/Products/productsReducer";
import {
  INCEREMENT_CART,
  DECREMENT_CART,
  REMOVE_CART_ITEMS,
} from "../../Redux/Products/productsActionTypes";
import { type } from "@testing-library/user-event/dist/type";

function CartList({ cartItem }) {
  const dispatch = useDispatch();

  const incrementButtonHandler = () => {
    dispatch({ type: INCEREMENT_CART, payload: cartItem.id });
    console.log("INC_CART");
  };

  const DecrementHandler = (qunatity) => {
    if (qunatity > 1) {
      dispatch({ type: DECREMENT_CART, payload: cartItem.id });
      console.log("DEC_CART", qunatity);
    } else {
      dispatch({ type: REMOVE_CART_ITEMS, payload: cartItem.id });
      console.log("REM_CART", qunatity);
    }
  };

  const deleteHandeler = () => {
    dispatch({ type: REMOVE_CART_ITEMS, payload: cartItem.id });
    console.log("decrement handler");
  };

  return (
    <div style={{ color: "#7c0000" }}>
      <Divider
        variant="inset"
        component="li"
        sx={{
          backgroundColor: "red",
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
            <>
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
                // onClick={() => deleteAndDecrementHandler(cartItem.quantity)}
                onClick={deleteHandeler}
              >
                <DeleteOutlineIcon />
              </IconButton>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                  // onClick={() => incrementDecrement(item, "inc", "list")}
                  onClick={incrementButtonHandler}
                  sx={{ backgroundColor: "#7c0000" }}
                >
                  +
                </Button>
                <Button sx={{ backgroundColor: "#1A4941" }}>
                  {cartItem.quantity}
                </Button>
                <Button
                  onClick={() => {
                    DecrementHandler(cartItem.quantity);
                  }}
                  // onClick={deleteAndDecrementHandler}
                  sx={{ backgroundColor: "#7c0000" }}
                >
                  -
                </Button>
              </ButtonGroup>
            </>
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
