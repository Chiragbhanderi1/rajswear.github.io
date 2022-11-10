import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const router = useRouter()
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  
  
  const toggleDropdown =()=>{
    setDropdown(!dropdown)
  }
  const toggleCart = () => {
    setSidebar(!sidebar)
    // if (ref.current.classList.contains("right-0")) {
    //   ref.current.classList.remove("right-0");
    //   ref.current.classList.add("-right-92");
    // } else if (!ref.current.classList.contains("translate-x-full")) {
    //   ref.current.classList.remove("translate-x-0");
    //   ref.current.classList.add("translate-x-full");
    // }
  };
  useEffect(()=>{
    // Object.keys(cart).length !==0 && setSidebar(true)
    let exempted = ['/checkout','/order','/orders','/signup']
    if(exempted.includes(router.pathname)){
      setSidebar(false)
    }
  },)
  const ref = useRef();
  return (
    <>
    <span>
          {dropdown && (
            <div
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
              className="absolute right-11 py-2 top-9 md:right-12 md:top-11 bg-purple-400 shadow-lg  px-5 font-bold rounded-md w-32 z-20"
            >
              <ul>
                <Link href={"/myaccount"}>
                  {" "}
                  <li className="py-1 text-sm hover:text-purple-100">
                    My Account
                  </li>
                </Link>
                <Link href={"/orders"}>
                  {" "}
                  <li className="py-1 text-sm hover:text-purple-100">My Orders</li>
                </Link>
                <li
                  onClick={logout}
                  className="py-1 text-sm hover:text-purple-100"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
          
        </span>
    <div className={`flex navbar flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10 ${!sidebar && 'overflow-hidden' }`}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="logo m-auto md:mx-5">
        <Link href={"/"}>
          <Image src="/logo.ico" alt="" width={60} height={100} />
        </Link>
      </div>
      <div className="nav m-auto">
        <ul className="flex items-center space-x-6 font-semibold md:text-xl">
          <Link href={"/tshirts"}>
            <li className="hover:text-purple-500">Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li className="hover:text-purple-500">Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li className="hover:text-purple-500">Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li className="hover:text-purple-500">Mugs</li>
          </Link>
        </ul>
      </div>
      <span className="right-12 top-3  justify-center items-center absolute">
      {!user.value && (
        <Link href={"/login"}>
            {" "}
            <button className="flex px-4 py-2 mx-2 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
              Login
            </button>
          </Link>
        )}
        </span>
        <span 
          onMouseOver={() => {
            setDropdown(true);
          }}onMouseLeave={() => {
            setDropdown(false);
          }} className='cart items-center absolute right-8 top-4 mx-5 cursor-pointer flex'
          onClick={toggleDropdown}
        >

        {user.value && <MdAccountCircle className=" text-xl md:text-3xl" />}
        </span>
        <span className="cart items-center absolute right-0 top-4 mx-5 cursor-pointer flex" onClick={toggleCart}>
        <AiOutlineShoppingCart className=" text-xl md:text-3xl"/>
        </span>
    

      <div
        ref={ref}
        className={`w-72 h-[100vh] sideCart  absolute top-0  bg-purple-100 px-8 py-10  transition-all ${sidebar ? "right-0" : "-right-96"}`}
      >
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span className="absolute top-3 md:top-5 right-2 cursor-pointer text-2xl text-purple-500" onClick={toggleCart}>
          <AiFillCloseCircle  />
        </span>

        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold ">Your cart is Empty !!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold">
                    {cart[k].name}({cart[k].size}/{cart[k].variant})
                  </div>
                  <div className="w-1/3 font-semibold flex items-center justify-center text-lg cursor-pointer">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="cursor-pointer text-purple-500"
                    />
                    <span className="mx-2 text-sm">{cart[k].qty}</span>{" "}
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].varient
                        );
                      }}
                      className="cursor-pointer text-purple-500"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="total font-bold my-2 mx-3">SubTotal: ₹{subTotal}</div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button disabled={Object.keys(cart).length===0} className="flex text-white bg-purple-500 disabled:bg-purple-300 border-0 py-2 mx-2 px-3 focus:outline-none hover:bg-purple-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" /> Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            disabled={Object.keys(cart).length===0}
            className="flex text-white bg-purple-500 border-0 py-2 mx-2 px-3 focus:outline-none disabled:bg-purple-200 hover:bg-purple-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
