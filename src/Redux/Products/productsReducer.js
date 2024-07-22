import {
  LOADING,
  SETDATA,
  ERROR,
  SETCARTITEMS,
  SETSEARCHVALUE,
  INCREMENT,
  DECREMENT,
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
    case LOADING:
      return { ...state, loading: action.payload };
    case SETDATA:
      return { ...state, data: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    // ---------------------------------------------------------------------//
    case SETCARTITEMS: {
      const clickedProduct = { ...action.payload };
      let originalData = [...state.data];
      let localCartItems = [...state.cartItems];

      //--------------------------------------updating the clicked card------------------ //
      const ModifeiedclickedProduct = {
        ...clickedProduct,
        quantity: clickedProduct.quantity + 1,
        showTick: true,
      };
      //--updating the index of clicked card in original data --//
      const indexAtWhichItsPresentInDataArray = state.data.findIndex(
        (dataItem) => dataItem.id == ModifeiedclickedProduct.id
      );
      console.log("Index in the data array", indexAtWhichItsPresentInDataArray);
      const indexAtWhichItsPresentInCartItems = state.cartItems.findIndex(
        (cartItem) => cartItem.id == ModifeiedclickedProduct.id
      );
      originalData[indexAtWhichItsPresentInDataArray] = {
        ...ModifeiedclickedProduct,
      };
      // console.log(indexAtWhichItsPresentInCartItems);

      // --------------------------------- setting elemnets in cart----------------//
      if (indexAtWhichItsPresentInCartItems) {
        console.log("inside");
        console.log([...state.cartItems]);
        // console.log("this is not in cart :", indexAtWhichItsPresentInCartItems);
        return {
          ...state,
          cartItems: localCartItems,
          data: originalData,
        };
      } else {
        console.log("else block");

        alert(
          "Item Already present it Your Cart",
          ModifeiedclickedProduct.quantity
        );

        return { ...state };
        // console.log(
        //   "Item Already present it Your Cart",
        //   ModifeiedclickedProduct.quantity
        // );
      }
    }
    //----------------------------------------------------------------------------//
    case SETSEARCHVALUE:
      return { ...state, searchValue: action.payload };

    case INCREMENT: {
      const clickedId = action.payload;
      const originalData = state.data;
      const localCartItems = state.cartItems;
      // const indexAtWhichItIspresentAtTheDataArray = originalData.findIndex(
      //   (dataItem) => dataItem.id == clickedId
      // );
      // console.log(indexAtWhichItIspresentAtTheDataArray);
      // return{};
    }

    case DECREMENT:
      return {};

    default:
      return state;
  }
};

export default productsReducer;
