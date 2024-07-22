import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  LOADING,
  SETDATA,
  ERROR,
  SETCARTITEMS,
  SETSEARCHVALUE,
} from "../../Redux/Products/productsActionTypes";
import productsReducer from "../../Redux/Products/productsReducer";
import { type } from "@testing-library/user-event/dist/type";
import EachCard from "./EachCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AllProducts() {
  const state = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  // ------getting data-------//
  console.log("this is the state", state);
  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const modifiedRecivedData = response.data.map((eachitem) => ({
        ...eachitem,
        quantity: 1,
        showTick: false,
      }));
      // console.log(modifiedRecivedData);
      const products = modifiedRecivedData;
      if (products) {
        dispatch({ type: LOADING, payload: false });
        dispatch({ type: SETDATA, payload: products });
      } else {
        dispatch({ type: LOADING, payload: false });
        dispatch({ type: ERROR, payload: "Error Loading the Data" });
      }
    };
    getResponse();
  }, []);

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {state.loading ? (
          <h1>Loading data .... </h1>
        ) : (
          <div>
            <div>
              <h1>search element</h1>
            </div>
            <div>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  sx={{ padding: "20px 20px" }}
                >
                  {state.data.map((product) => (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      key={product.id}
                      // sx={{
                      //   padding: "1rem",
                      // }}
                    >
                      <Item sx={{ background: "#20170C" }}>
                        <EachCard product={product} />
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
