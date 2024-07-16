import Container from "./Display/Container";
import "./App.css";
import Navbar from "./NavigationComps/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // --------------------------------------------------------------------------->  States  <-------------------------------------------------------------------------------------------------//
  const [originalData, setoriginalData] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  // const [showTick, setshowTick] = useState(false);
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

  //----------------------------------------------------------------------------------> Calling the Fetch API <------------------------------------------------------------------------------//
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      // console.log(response);
      const originalRecivedData = response.data;
      const modifiedRecivedData = originalRecivedData.map((eachitem) => ({
        ...eachitem,
        quantity: 1,
        showTick: false,
      }));
      // console.log("This is a modified Array :", modifiedRecivedData);
      setoriginalData(modifiedRecivedData);
    };

    getData();
  }, []);

  //--------------------------------------------------------------------->  Setting the elements in the Cart <------------------------------------------------------------------//

  const setElementsOnclickOftheAddButton = (clickedCard) => {
    // ================== conditional Logic ==========================//
    let temp = { ...clickedCard };
    let cartLocal = [...cartItems];

    console.log(temp);
    console.log(cartLocal);

    let isPresentInCart = cartLocal.find((item) => item.id == temp.id);
    if (isPresentInCart) {
      alert("Already added");
    } else {
      // Update original data with showTick as true
      setoriginalData((prev) =>
        prev.map((item) =>
          item.id == temp.id ? { ...temp, showTick: true } : { ...item }
        )
      );

      temp.showTick = true;
      setcartItems([...cartItems, temp]);
    }
  };

  //-------------------------------------------------------------------------> Removing  an element from the cart <--------------------------------------------------------------//
  const removeElementsOnclickOfTheRemoveButton = (clickedList) => {
    const ItemsExceptTheClickedOnes = cartItems.filter(
      (item) => item.id != clickedList.id
    );
    console.log(ItemsExceptTheClickedOnes, "filtered Array");
    setcartItems(ItemsExceptTheClickedOnes);
  };
  //----------------------------------------------------------------------------->  QuantityLogic    <------------------------------------------------------------------------------//

  const incrementDecrement = (clickedCard, str, list) => {
    let temp = { ...clickedCard };
    let local = [...originalData];
    let cartLocal = [...cartItems];

    ///////////// -------1
    if (str == "inc") {
      let indexOfClickedCard = local.findIndex((item) => item.id == temp.id);
      local[indexOfClickedCard] = {
        ...temp,
        quantity: temp.quantity + 1,
        showTick: true,
      };
      console.log(" value from list", list);

      if (list == "list") {
        let indexOfClickedCard = cartLocal.findIndex(
          (item) => item.id == temp.id
        );
        cartLocal[indexOfClickedCard] = {
          ...temp,
          quantity: temp.quantity + 1,
        };
        setcartItems(cartLocal);
      }

      setoriginalData(local);
      // setshowTick((prev) => !prev);
    }
    ///////////// ---- 2
    if (str == "dec") {
      let indexOfClickedCard = local.findIndex((item) => item.id == temp.id);
      if (temp.quantity > 0) {
        local[indexOfClickedCard] = {
          ...temp,
          quantity: temp.quantity - 1,
          showTick: true,
        };

        if (list == "list") {
          let indexOfClickedCard = local.findIndex(
            (item) => item.id == temp.id
          );
          if (temp.quantity > 0) {
            cartLocal[indexOfClickedCard] = {
              ...temp,
              quantity: temp.quantity - 1,
            };

            setcartItems(cartLocal);
          }
        }
      }

      setoriginalData(local);
    }
  };

  //-----------------------------------------------------------------------------> App component < ----------------------------------------------------------------------------//

  return (
    <div className="App">
      <Navbar
        cartItems={cartItems}
        removeElementsOnclickOfTheRemoveButton={
          removeElementsOnclickOfTheRemoveButton
        }
        incrementDecrement={incrementDecrement}
      />
      <Container
        originalData={originalData}
        setElementsOnclickOftheAddButton={setElementsOnclickOftheAddButton}
        incrementDecrement={incrementDecrement}
      />
    </div>
  );
}

export default App;
