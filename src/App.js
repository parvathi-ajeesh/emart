import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Favourites from "./component/Favourites";
import About from "./component/About";
import Contact from "./component/Contact";
import Register from "./component/Register";
import Login from "./component/Login";
import Checkout from "./component/Checkout";


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorites" element={<Favourites/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>




        
      </Routes>
    </>
  );
}

export default App;
