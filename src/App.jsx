import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Payment from "./Components/Payment";
import PaymentSuccess from "./Pages/PaymentSucces";
import PaymentFail from "./Pages/paymentfail";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Saved from "./Pages/WishList";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CheckNow from "./Components/CheckNow";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import kids_banner from "./assets/banner_kids.png";
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import "./index.css";

const App = () => (
  <Router>
    <Navbar />
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginWithFooter />} />
        <Route path="/signup" element={<SignupWithFooter />} />
        <Route path="/women" element={<ShopCategoryWithFooter banner={women_banner} category="women" />} />
        <Route path="/mens" element={<ShopCategoryWithFooter banner={men_banner} category="men" />} />
        <Route path="/kids" element={<ShopCategoryWithFooter banner={kids_banner} category="kids" />} />
        <Route path="/product/:productId" element={<ProductWithFooter />} />
        <Route path="/cart" element={<CartWithFooter />} />
        <Route path="/wishlist" element={<WishlistWithFooter />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checknow" element={<CheckNowWithFooter />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/user/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/user/paymentfail" element={<PaymentFail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  </Router>
);

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

const ShopCategoryWithFooter = ({ banner, category }) => (
  <>
    <ShopCategory banner={banner} category={category} />
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

const WishlistWithFooter = () => (
  <>
    <Saved />
    <Footer />
  </>
);

const CheckNowWithFooter = () => (
  <>
    <CheckNow />
    <Footer />
  </>
);

export default App;
