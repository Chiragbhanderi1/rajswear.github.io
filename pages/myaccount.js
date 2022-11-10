import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
const MyAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [npassword, setNpassword] = useState("");
  const [user, setUser] = useState({ value: null });
  const handleChange = async (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }else if (e.target.name == "pincode") {
      setPincode(e.target.value);
    } else if (e.target.name == "address") {
      setAddress(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    }else if (e.target.name == "password") {
      setPassword(e.target.value);
    }else if (e.target.name == "cpassword") {
      setCpassword(e.target.value);
    }else if (e.target.name == "npassword") {
      setNpassword(e.target.value);
    }
  };
  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/");
    }
    if (myuser && myuser.token) {
      setUser(myuser);
      setEmail(myuser.email);
      fecthData(myuser.token)
    }

  }, []);
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
  }
  const handleUserSubmit =async ()=>{
    let data= {token:user.token,name,address,phone,pincode}
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    toast.success("Details Updated successfully", {
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
  const handlePasswordSubmit =async ()=>{
    let res
    if(npassword==cpassword){
      let data= {token:user.token,password,cpassword,npassword}
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatepassword`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
     });
      res = await a.json();
    }else{
      toast.error("Password does not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCpassword('')
      setNpassword('')
      setPassword('')
      return
    }
    
    if(res.success){
    toast.success("Password Updated successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }else{
    toast.error("Invalid Password", {
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
  setCpassword('')
  setNpassword('')
  setPassword('')
  }

  return (
    <div className="  my-8 md:mx-[13vw] mx-[5vw] ">
      <Head>
        <title>My account - Raj's wear</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
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
      <h1 className="md:text-3xl text-2xl text-center font-semibold">
        Update Your Account
      </h1>
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
              Email(cannot be updated)
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
          <button onClick={handleUserSubmit} className="flex m-2 mb-5 disabled:bg-purple-300 text-white bg-purple-500 border-0 py-2 my-2 mx-1 px-3 focus:outline-none hover:bg-purple-600 rounded text-sm">
          Submit
         </button>
        <h2 className=" font-semibold text-xl  ">2. Change Password</h2>
        
          <div className=" md:w-1/2">
            <div className=" mb-2">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                value={password}
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="mx-auto md:flex">
          <div className=" mb-2 md:w-1/2">
              <label
                htmlFor="npassword"
                className="leading-7 text-sm text-gray-600"
              >
                New Password
              </label>
              <input
                type="password"
                id="npassword"
                onChange={handleChange}
                value={npassword}
                name="npassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          <div className="md:ml-4 md:w-1/2">
            <div className=" mb-2">
              <label
                htmlFor="cpassword"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                onChange={handleChange}
                value={cpassword}
                name="cpassword"
                className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            </div>
        
            
            </div>
        <button onClick={handlePasswordSubmit} className="flex m-y-2  disabled:bg-purple-300 text-white bg-purple-500 border-0 py-2 my-2  px-3 focus:outline-none hover:bg-purple-600 rounded text-sm">
          Submit
         </button>
      </div>
    </div>
  );
};

export default MyAccount;
