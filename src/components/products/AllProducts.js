import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AllProducts() {
  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      console.log(response.data);
    };
    getResponse();
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <h1>here we display all the products</h1>
    </div>
  );
}

export default AllProducts;
