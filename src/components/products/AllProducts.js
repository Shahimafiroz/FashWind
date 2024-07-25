import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Loading from "../Loading";
import {
  LOADING,
  SETDATA,
  ERROR,
} from "../../Redux/Products/productsActionTypes";
import EachCard from "./EachCard";
import Search from "./Search";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AllProducts() {
  const state = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  // ----------------------getting data ------------------//
  console.log("this is the state", state);
  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      const modifiedRecivedData = response.data.map((eachitem) => ({
        ...eachitem,
        quantity: 1,
        showTick: false,
      }));
      // console.log("modiffftfctgf", modifiedRecivedData);
      const products = modifiedRecivedData;
      console.log("here are products ", products);
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
          <div>
            <Loading />
          </div>
        ) : (
          <div>
            <div>
              <Search />
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
                    <Grid item xs={12} sm={4} md={3} key={product.id}>
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
