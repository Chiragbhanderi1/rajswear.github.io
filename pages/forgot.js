import React,{useEffect, useState} from 'react'
import Router, { useRouter } from 'next/router';
import{SiGnuprivacyguard} from "react-icons/si";
import Link from 'next/link';
import Head from "next/head";
const Forgot = () => {
  const router = useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [cpassword,setCpassword]=useState('')
  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push('/')
    }
  },[])
  const handleChange = async (e) => {
    if (e.target.name == "password") {
      setPassword(e.target.value);
    } else if (e.target.name == "cpassword") {
      setCpassword(e.target.value);
    }else if (e.target.name == "email") {
      setEmail(e.target.value);
    } 
    
  };
  const sendResetEmail= async()=>{
    let data ={
      email,
      sendMail:true
    }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if(res.success){
      console.log("Password reset instructions have been sent to your email")
    }else{
      console.log("error")

    }
  }
  const resetPassword=async()=>{
    if(password==cpassword){

    
    let data ={
      password,
      sendMail:false
    }
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/forgot`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if(res.success){
      console.log("Password has been changed")
    }else{
      console.log("error")
    }
  }
  }
  return (
    <div>
      <Head>
        <title>Forgot Password - Raj's wear</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <section className="h-screen">
        <div className="px-6 py-10 text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image"/>
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              {router.query.token && <div>
                <form>
                  <p className="text-2xl text-center mb-0 font-bold mr-4">Forgot Password</p>
                {/* <!-- Email input --> */}
                <div className="my-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    id="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    placeholder="New Password"
                  />
                </div>
                <div className="m-t-6 mb-2">
                  <input
                    type="password"
                    onChange={handleChange}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    id="cpassword"
                    value={cpassword}
                    name="cpassword"
                    placeholder="Confirm New Password"
                  />
                </div>
                {password != cpassword && <span className='text-red-600'>Passwords don't match</span>}
                {password === cpassword && password && <span className='text-green-600'>Passwords  match</span>}
                <div className="text-center lg:text-left">
                  <button
                  onClick={resetPassword}
                  disabled={password!=cpassword}
                  
                    type="button"
                    className="flex px-4 py-3 disabled:bg-purple-400 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    
                  <SiGnuprivacyguard className="mx-2"/>Continue
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account ?
                    <Link legacyBehavior href={"/login"}>
                      <a
                        href="#!"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        {" "}
                        Login
                      </a>
                    </Link>
                  </p>
                </div>
                </form></div>}
              {!router.query.token && <form>
                  <p className="text-2xl text-center mb-0 font-bold mr-4">Forgot Password</p>
                {/* <!-- Email input --> */}
                <div className="my-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                    id="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                    placeholder="Email address"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    onClick={sendResetEmail}
                    className="flex px-4 py-3  bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    
                  <SiGnuprivacyguard className="mx-2"/>Continue
                  </button>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account ?
                    <Link legacyBehavior href={"/login"}>
                      <a
                        href="#!"
                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        {" "}
                        Login
                      </a>
                    </Link>
                  </p>
                </div>
                </form>}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forgot
