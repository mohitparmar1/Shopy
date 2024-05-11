import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
// I used a cart icon to show the actual total cart itemsin the cart we can remove image path and image also.
// import Cart from "../assets/cart_icon.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
const Navbar = () => {
  const navigate = useNavigate();
  const { getCartQuantity } = useContext(ShopContext);

  const [isModalOpen, setIsModelOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [cartItem, setCartItem] = useState("0");

  // menu options render in navbar we can increse the menu options furhter as per requirement.
  const menuIcons = [
    {
      id: 1,
      name: "Women",
      url: "/women",
    },
    {
      id: 2,
      name: "Men",
      url: "/mens",
    },
    {
      id: 3,
      name: "Kids",
      url: "/kids",
    },
  ];

  // functions
  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item.name);
    setIsModelOpen(false);
    navigate(item.url);
  };
  return (
    <>
      <header className="bg-white font-Poppins">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to="/" className="text-orange-400 text-2xl font-semibold">
                Shopy
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {menuIcons.map((item) => (
                    <li key={item.id} className="text-base ">
                      <Link
                        to={item.url}
                        className={`text-black transition hover:text-orange-500/75 hover:font-semibold ${
                          activeMenuItem === item.name
                            ? "text-orange-400 font-semibold"
                            : ""
                        }`}
                        onClick={() => handleMenuItemClick(item)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/cart"
                className="relative nav-item px-3 flex justify-center items-center rounded-full"
              >
                <PiShoppingCartLight size={30} />
                <span className="absolute h-[20px] w-[20px] bg-orange-400 right-2 -top-[.3rem] flex justify-center items-center text-white rounded-full p-2">
                  {cartItem}
                </span>
              </Link>
              <div className="sm:flex sm:gap-4">
                <Link
                  to="/login"
                  className="rounded-3xl px-5 py-2.5 text-sm font-medium text-black shadow border border-orange-400 transition hover:bg-orange-500/75 hover:text-white"
                >
                  Login
                </Link>
              </div>

              <div className="block md:hidden">
                {isModalOpen ? (
                  <MdOutlineClose
                    size={35}
                    onClick={() => setIsModelOpen(!isModalOpen)}
                  />
                ) : (
                  <GiHamburgerMenu
                    size={35}
                    onClick={() => setIsModelOpen(!isModalOpen)}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Mobile navbar  */}
          <div>
            <ul
              className={
                isModalOpen
                  ? "z-50 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500"
                  : "z-50 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
              }
            >
              {/* Mobile Logo */}
              <div className="p-4 flex items-center gap-2 border-b  border-gray-300 ">
                <Link to="/" className="text-orange-400 text-2xl font-semibold">
                  Shopy
                </Link>
              </div>

              {/* Mobile Navigation Items */}
              {menuIcons.map((item) => (
                <li
                  key={item.id}
                  className={`p-4 border-b  border-gray-300 cursor-pointer  text-black transition duration-300 hover:bg-orange-400 hover:text-white hover:font-semibold ${
                    activeMenuItem === item.name
                      ? "text-orange-400 font-semibold hover:text-white hover:font-semibold"
                      : ""
                  }`}
                  onClick={() => handleMenuItemClick(item)}
                >
                  <Link to={item.url} onClick={() => handleMenuItemClick(item)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
