import {
  LOADING,
  SETDATA,
  ERROR,
  SETCARTITEMS,
  SETSEARCHVALUE,
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
    case SETCARTITEMS:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case SETSEARCHVALUE:
      return { ...state, searchValue: action.payload };

    default:
      return { state };
  }
};

export default productsReducer;
