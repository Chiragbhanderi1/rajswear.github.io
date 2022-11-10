import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = ({ cart, clearCart, subTotal, addToCart, removeFromCart }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [user, setUser] = useState({value:null});
  useEffect(() => {
      const myuser = JSON.parse(localStorage.getItem("myuser"));
      if (myuser && myuser.token) {
        setUser(myuser)
        setEmail(myuser.email);
        fecthData(myuser.token)
      }
      
  }, []);
  useEffect(() => {
    if (
      name.length > 2 &&
      email.length > 2 &&
      pincode.length > 2 &&
      address.length > 2 &&
      phone.length > 2
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name,email,phone,pincode,address]);
  const fecthData =async(token)=>{
    let data= {token:token}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    setName(res.name)
    setAddress(res.address)
    setPincode(res.pincode)
    setPhone(res.phone)
    getpincode(res.pincode)
  }
  const getpincode=async(pin)=>{
      let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
      let pinJson = await pins.json();
      if (Object.keys(pinJson).includes(pin)) {
        setState(pinJson[pin][1]);
        setCity(pinJson[pin][0]);
      } else {
        setState("");
        setCity("");
      }
  }
  const handleChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "pincode") {
      setPincode(e.target.value);
      getpincode(e.target.value)
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    }
    
  };
  const initatePayment = async () => {
    let oid = Math.floor(Math.random() * Date.now());
    // Get a tarnsaction token

    const data = {
      cart,
      subTotal,
      oid,
      email: email,
      name,
      address,
      pincode,
      phone,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let txnRes = await a.json();
    if (txnRes.success) {
      let txnToken = txnRes.txnToken;
      var config = {
        root: "",
        flow: "DEFAULT",
        //Optional to hide paymode label when only one paymode is available
        hidePaymodeLabel: true,
        data: {
          orderId: oid,
          amount: subTotal,
          token: txnToken,
          tokenType: "TXN_TOKEN",
        },
        style: {
          //Optional: global style that will apply to all paymodes
          bodyColor: "green",
        },
        merchant: {
          mid: "mid",
        },
        handler: {
          notifyMerchant: function (eventType, data) {
            console.log("notify merchant called", eventType, data);
          },
        },
      };

      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.log("error=>", error);
        });
    } else {
      if(txnRes.cartClear){
        clearCart();
      }
      toast.error(txnRes.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className=" m-auto md:mx-[15vw] min-h-screen">
      <Head>
        <title>Checkout - Raj's wear</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Script
        type="application/javascript"
        crossorigin="anonymous"
        src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}
      />
      <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
      <h2 className=" font-semibold text-xl ml-2 ">1. Delivery Details</h2>
      <div className="mx-auto flex">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="px-2 w-1/2">
          <div className=" mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              onChange={handleChange}
              value={name}
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className=" mb-2 ">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            {user && user.token ? (
              <input
                type="email"
                id="email"
                value={user.email}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                readOnly
              />
            ) : (
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className=" mb-2">
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            onChange={handleChange}
            value={address}
            cols="30"
            rows="2"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <div className="mx-auto flex">
          <div className="px-2 pl-0 w-1/2 ">
            <div className=" mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
              Phone no.
              </label>
              <input
                type="text"
                id="phone"
                onChange={handleChange}
                value={phone}
                placeholder={"Your 10 digit phone no."}
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 pr-0 w-1/2">
            <div className=" mb-2 ">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                onChange={handleChange}
                value={pincode}
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex">
          <div className="px-2 pl-0 w-1/2">
            <div className=" mb-2 ">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={handleChange}
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 pr-0 w-1/2">
            <div className=" mb-2 ">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                District
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleChange}
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className=" font-semibold text-xl ml-2">
        2. Review Cart Items & Pay
      </h2>
      <div className=" sideCart  bg-purple-100 p-6 mx-1 ]">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold ">Your cart is Empty !!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-2">
                  <div className=" font-semibold">
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
        <span className="total font-bold">SubTotal: ₹{subTotal}</span>
      </div>
      <Link href={"/checkout"}>
        <button
          onClick={initatePayment}
          disabled={disabled}
          className="flex disabled:bg-purple-300 text-white bg-purple-500 border-0 py-2 my-2 mx-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-sm"
        >
          Pay ₹{subTotal}
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
