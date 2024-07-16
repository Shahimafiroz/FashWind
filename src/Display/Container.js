import React from "react";
import Product from "./ProductCard";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Container({
  showTick,
  originalData,
  setElementsOnclickOftheAddButton,
  incrementDecrement,
}) {
  return (
    // <div>
    //   {originalData.map((data) => (
    //     <Product />
    //   ))}
    // </div>
    <div style={{ padding: "2rem", backgroundColor: "#fde4f2" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {originalData.map((eachData) => (
            <Grid item xs={2} sm={4} md={3} key={eachData.id}>
              <Item sx={{ backgroundColor: "#f4b8da" }}>
                <Product
                  eachData={eachData}
                  setElementsOnclickOftheAddButton={
                    setElementsOnclickOftheAddButton
                  }
                  incrementDecrement={incrementDecrement}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Container;
