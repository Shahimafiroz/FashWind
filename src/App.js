import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./../src/components/Home";
import AllProducts from "./components/products/AllProducts";
import ParentUser from "./components/users/ParentUser";
import Footer from "./components/Footer";
import SingeleProduct from "./components/products/SingelProduct";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import store from "./Redux/index";
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
            <Route path="/loginRegister" element={<ParentUser />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
