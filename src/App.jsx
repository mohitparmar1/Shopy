import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import kids_banner from "./assets/banner_kids.png";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Saved from "./Pages/WishList"
import About from "./Pages/About";

import "./index.css";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginWithFooter />} />
        <Route path="/signup" element={<SignupWithFooter />} />
        <Route path="/" element={<Shop />} />
        <Route path="/women" element={<ShopCategoryWithFooter banner={women_banner} category="women" />} />
        <Route path="/mens" element={<ShopCategoryWithFooter banner={men_banner} category="men" />} />
        <Route path="/kids" element={<ShopCategoryWithFooter banner={kids_banner} category="kid" />} />
        <Route path="/product/:productId" element={<ProductWithFooter />} />
        <Route path="/cart" element={<CartWithFooter />} />
        <Route path="/wishlist" element={<WishlistWithFooter />} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </Router>
  );
};



const LoginWithFooter = () => (
  <>
    <Login />
    <Footer />
  </>
);

const SignupWithFooter = () => (
  <>
    <Signup />
    <Footer />
  </>
);

const ProductWithFooter = () => (
  <>
    <Product />
    <Footer />
  </>
);

const CartWithFooter = () => (
  <>
    <Cart />
    <Footer />
  </>
);

const ShopCategoryWithFooter = ({ banner, category }) => (
  <>
    <ShopCategory banner={banner} category={category} />
    <Footer />
  </>
);

const WishlistWithFooter=()=>(
  
  <>
    <Saved />
    <Footer />
  </>
  
);

export default App;
