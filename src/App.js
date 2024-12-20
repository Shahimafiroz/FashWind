/* eslint-disable */
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./../src/components/Home";
import AllProducts from "./components/products/AllProducts";
import Login from "./components/users/Login";
import Footer from "./components/Footer";
import SingeleProduct from "./components/products/SingelProduct";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./Redux/index";
import Register from "./components/users/Register";
// import Orders from "./components/users/Orders";
import EachUser from "./components/users/EachUser";
import { Dashboard } from "@mui/icons-material";
function App() {
  
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<SingeleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<EachUser />} />
            <Route path="/seller" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
