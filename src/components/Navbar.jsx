import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"; //use to subscribe data at any components to update it state
const Navbar = () => {
  //here we can provide a state which update the whole components
  //this state is not from cartslice components its is from useselector hook to update changes
  const items = useSelector((state) => state.cart);

  return (
    <div>
      <header class="text-gray-600 body-font bg-amber-500">
        <div class="container mx-auto flex flex-wrap flex-col p-3 md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <div className="w-10 h-10 nimg rounded-full p-2 bg-amber-500 mt-4"></div>
           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            <span class="ml-3 text-xl mt-4">GRAVITY</span> 
          </a>

          <div
            class=" hidden w-full md:block md:w-auto"
            id="navbar-default"
          ></div>
          <nav class="menu md:ml-auto flex flex-wrap items-center text-base justify-center text-white">
            <Link to="/">
             
              <a class="mr-5 hover:text-gray-900 ">Home</a>
            </Link>
            <a href="/about" class="mr-5 hover:text-gray-900">
              About
            </a>
            <Link to="/products">
             
              <a class="mr-5 hover:text-gray-900">Products</a>
            </Link>
            <a href="/contact" class="mr-5 hover:text-gray-900">
              Contact
            </a>
            <Link to="/cart">
             
              <a class="mr-5 hover:text-gray-900">Cart</a>
            </Link>

            <span className="cartCounter inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-2 md:mt-0">
              Cart Items:{items.length}
            </span>
          </nav>
        </div>
      </header>
      <Outlet />
      {/* logo img structure */}
       {/* <img
              src="./logop.png"
              alt="..."
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 mt-4 text-white p-2 bg-amber-500 rounded-full"
              viewBox="0 0 24 24"
            />
           <img src="" alt="" />  */}
           
    </div>
  );
};

export default Navbar;
