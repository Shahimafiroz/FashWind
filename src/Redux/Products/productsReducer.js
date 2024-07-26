import {
  LOADING,
  SETDATA,
  ERROR,
  SETCARTITEMS,
  REMOVE_CART_ITEMS,
  SETSEARCHVALUE,
  INCREMENT,
  DECREMENT,
  INCEREMENT_CART,
  DECREMENT_CART,
} from "./productsActionTypes";

const initialState = {
  loading: true,
  data: [],
  error: "None",
  cartItems: [],
  searchValue: "",
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------------ 1 LOADING ----------------------------------------//
    case LOADING:
      return { ...state, loading: action.payload };
    //------------------------------------- 2 SET DATA---------------------------------------------//
    case SETDATA:
      return { ...state, data: action.payload };
    //------------------------------------ 3 ERRORS ----------------------------------------//
    case ERROR:
      return { ...state, error: action.payload };

    //---------------------------------- 5 SET SEARCH VALUE----------------------------------------//
    case SETSEARCHVALUE:
      return { ...state, searchValue: action.payload };
    //---------------------------------- 4 SET CART ITEMS  --------------------------------------//
    case SETCARTITEMS: {
      let clickedProduct = { ...action.payload };
      // console.log(" 1 .clicked product id ", clickedProduct.id);
      let originalData = [...state.data];
      let localCartItems = [...state.cartItems];
      console.log({ localCartItems });
      //   lets deal with cart first
      // console.log(" 2 . local cart items", localCartItems);
      const index = localCartItems.findIndex((eachItem) => {
        console.log(
          "3 .executing the find index function ",
          " 4 .cart item id ",
          eachItem.id,
          "5 .product id ",
          clickedProduct.id
        );
        return eachItem.id == clickedProduct.id;
      });
      console.log("index", index);
      // {const matchingArrayIndex = localCartItems.findIndex((cartItem) => {
      //   console.log(
      //     "cart item id ",
      //     cartItem.id,
      //     "product id ",
      //     clickedProduct.id
      //   );
      //   return cartItem.id == clickedProduct.id;
      // });
      // console.log("Matching index of cart item", matchingArrayIndex);
      // console.log("gcvcgbhbefge", clickedProduct);
      // if (matchingArrayIndex == -1) {
      //   localCartItems = [...localCartItems, { ...clickedProduct }];
      //   console.log("here are the cart items", localCartItems);
      // } else {
      //   localCartItems[matchingArrayIndex] = {
      //     ...localCartItems[matchingArrayIndex],
      //     quantity:
      //       localCartItems[matchingArrayIndex.quantity] +
      //       clickedProduct.quantity,
      //   };
      //   console.log(
      //     "here is the updated qunatity object ",
      //     localCartItems[matchingArrayIndex]
      //   );
      // }
      //}
      if (index !== -1) {
        localCartItems[index] = {
          ...localCartItems[index],
          quantity: localCartItems[index].quantity + clickedProduct.quantity,
        };
        console.log("Indeqter than -1) ----------->", localCartItems[index]);
        //
      } else {
        console.log("THE INDEX IS -1  -------->", localCartItems[index]);
        // localCartItems.push(clickedProduct);
        localCartItems = [...localCartItems, clickedProduct];
        // --> why wasnt this working ?????????????????/
        console.log("here are the cart items", localCartItems);
        // console.log("here are the cart items", matchingArrayIndex);
      }

      // const modifiedClickedProduct = { ...clickedProduct, quantity: 1 };

      return { ...state, cartItems: localCartItems };
    }
    //------------------------------------ 6 INCREMENT CARD -------------------------------------//
    case INCREMENT: {
      const originalData = [...state.data];
      const clickedID = action.payload;

      const matchingDataItemIndex = originalData.findIndex(
        (originaldataItem) => originaldataItem.id === clickedID
      );
      originalData[matchingDataItemIndex] = {
        ...originalData[matchingDataItemIndex],
        quantity: originalData[matchingDataItemIndex].quantity + 1,
      };

      const quantityOfTheCiakedObject =
        originalData[matchingDataItemIndex].quantity;

      // console.log(
      //   "Mathing Data item index",
      //   matchingDataItemIndex,
      //   "Matching item",
      //   originalData[matchingDataItemIndex],
      //   "qunatity",
      //   quantityOfTheCiakedObject
      // );

      return { ...state, data: originalData };
    }
    //------------------------------------ 7 DECREMENT CARD ----------------------------------------//
    case DECREMENT: {
      const originalData = [...state.data];
      const clickedID = action.payload;
      // console.log(clickedID);

      const matchingDataItemIndex = originalData.findIndex(
        (originaldataItem) => originaldataItem.id === clickedID
      );
      // console.log(
      //   "the new qunatity log :",
      //   originalData[matchingDataItemIndex].quantity
      // );
      if (originalData[matchingDataItemIndex].quantity > 1) {
        originalData[matchingDataItemIndex] = {
          ...originalData[matchingDataItemIndex],
          quantity: originalData[matchingDataItemIndex].quantity - 1,
        };

        const quantityOfTheCiakedObject =
          originalData[matchingDataItemIndex].quantity;
        return { ...state, data: originalData };
      } else {
        alert(
          " Bhai Order hi mt kr! Ek se kam ky lega tu ?(Quantity Cannot be less than 1)"
        );
        console.log(
          "Quantity Cannot be less than 1 , Order hi mt karo fir",
          state
        );
        return { ...state };
      }
    }
    //------------------------------------ 8 INCREMENT CART ----------------------------------------//
    case INCEREMENT_CART:
      return {};
    //------------------------------------ 9 DECREMENT CART ----------------------------------------//
    case DECREMENT_CART:
      return {};
    //------------------------------------ END ----------------------------------------//
    default:
      return state;
  }
};

export default productsReducer;
