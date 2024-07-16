import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

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
// title={eachData.title}
// price={eachData.price}
// image={eachData.image}
// category={eachData.category}
// bigPara={eachData.description}

function ProductCard({
  eachData,
  setElementsOnclickOftheAddButton,
  incrementDecrement,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // console.log("from the products page");
  return (
    // <div>
    //   <h1>Product</h1>
    // </div>
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {/* {console.log("hii this is show tick : ", showTick)} */}
        <CardHeader
          avatar={
            eachData.showTick ? (
              <Avatar sx={{ bgcolor: "#E68BBE" }} aria-label="recipe">
                <DoneOutlineIcon />
              </Avatar>
            ) : null
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={eachData.title}
          subheader={`${eachData.price} Rs`}
        />
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="194"
          image={eachData.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {eachData.category}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => setElementsOnclickOftheAddButton(eachData, "add")}
          >
            <AddShoppingCartIcon />
            {/* <p style={{ fontSize: "small" }}>ADD TO CART</p> */}
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <Typography>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button
                onClick={() => incrementDecrement(eachData, "inc")}
                sx={{ backgroundColor: "#F4B8DA" }}
              >
                +
              </Button>
              <Button sx={{ backgroundColor: "#E68BBE" }}>
                {eachData.quantity}
              </Button>
              <Button
                onClick={() => incrementDecrement(eachData, "dec")}
                sx={{ backgroundColor: "#F4B8DA" }}
              >
                -
              </Button>
            </ButtonGroup>
          </Typography>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Rating : {eachData.rating.rate}</Typography>
            <Typography sx={{ textAlign: "left" }} paragraph>
              {eachData.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default ProductCard;
