import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector, useDispatch } from "react-redux";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { type } from "@testing-library/user-event/dist/type";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import productsReducer from "../../Redux/Products/productsReducer";
import {
  SETCARTITEMS,
  INCREMENT,
  DECREMENT,
} from "../../Redux/Products/productsActionTypes";
import { Padding } from "@mui/icons-material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function EachCard({ product }) {
  const [qunatity, setqunatity] = useState(1);
  ////------------------functional logic--------------------------////
  const dispatch = useDispatch();
  // console.log(product);
  //---- setting cart items using dispatch
  const setCartitems = () => {
    dispatch({ type: SETCARTITEMS, payload: product });
    // console.log("this is cart items", state.cartItems);
  };
  const incrementHandeler = () => {
    // dispatch({ type: INCREMENT, payload: product.id });
    setqunatity((prev) => prev + 1);
    console.log("increment_id", product.id);
  };

  const decrementHandeler = () => {
    // dispatch({ type: DECREMENT, payload: product.id });
    console.log("decrement_id", product.id);
  };

  //------------------//
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ background: "white", fontFamily: "Cormorant Upright" }}>
      <CardHeader
        avatar={
          product.showTick ? (
            <Avatar sx={{ bgcolor: "#1a4941" }} aria-label="recipe">
              <BookmarkAddedIcon />
            </Avatar>
          ) : (
            <></>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        sx={{ fontFamily: "Cormorant Upright", fontWeight: "bolder" }}
        title={product.title}
        subheader={product.price}
      />
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites" onClick={setCartitems}>
          <AddShoppingCartIcon sx={{ color: "#196D5F" }} />
        </IconButton>
        <div style={{ paddingRight: "2rem" }}>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={incrementHandeler} sx={{ background: "#7c0000" }}>
              +
            </Button>
            <Button sx={{ background: "#1A4941", fontSize: "10px" }}>
              {product.quantity}
            </Button>
            <Button onClick={decrementHandeler} sx={{ background: "#7c0000" }}>
              -
            </Button>
          </ButtonGroup>
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ fontFamily: "Cormorant Upright" }}>
          <Typography
            sx={{ fontFamily: "Cormorant Upright", fontWeight: "bolder" }}
          >
            <p>Rating : </p>
            {product.rating.rate}
          </Typography>
          <Typography
            sx={{ fontFamily: "Cormorant Upright", fontWeight: "bolder" }}
          >
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default EachCard;
