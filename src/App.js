import Container from "./Display/Container";
import "./App.css";
import Navbar from "./NavigationComps/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // States
  const [originalData, setoriginalData] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [eachCartItem, seteachCartItem] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
    quantity: "",
  });

  // Calling the Fetch API
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      // console.log(response);
      const originalRecivedData = response.data;
      const modifiedRecivedData = originalRecivedData.map((eachitem) => ({
        ...eachitem,
        quantity: 0,
      }));
      // console.log("This is a modified Array :", modifiedRecivedData);
      setoriginalData(modifiedRecivedData);
    };

    getData();
  }, []);

  // Setting the elements in the Cart

  const setElementsOnclickOftheAddButton = (clickedCard) => {
    console.log(clickedCard);
    seteachCartItem(clickedCard);
    // setcartItems([{ eachCartItem }, ...cartItems]);
    setcartItems([...cartItems, clickedCard]);
    console.log("the cart items are  : ", cartItems);
  };

  const removeElementsOnclickOfTheRemoveButton = () => {
    console.log(
      "remove button clicked and ficntion caleed from app component to deldete the cart item"
    );
  };

  // console.log(originalData);
  console.log("####", cartItems);

  return (
    <div className="App">
      <Navbar
        cartItems={cartItems}
        removeElementsOnclickOfTheRemoveButton={
          removeElementsOnclickOfTheRemoveButton
        }
      />
      <Container
        originalData={originalData}
        setElementsOnclickOftheAddButton={setElementsOnclickOftheAddButton}
      />
    </div>
  );
}

export default App;
