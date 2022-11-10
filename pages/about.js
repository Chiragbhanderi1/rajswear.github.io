import React from 'react'
import Head from "next/head";
const About = () => {
  return (
    <div className='mt-20'>
      <Head>
        <title>About Us - Raj's wear</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
    <div className='min-h-screen container mx-auto'>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 md:py-24 items-center justify-center flex-col'>
          <img src="/logo.ico" alt="hero" className='w-24 md:w-36 mb-10 object-cover object-center rounded' />
          <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Welcome to rajswear.com</h1>
            <p className='mb-8 leading-relaxed'>This website is an attempt to deliver amazing products at a good and reasonable price. This entire website was built NextJs  project. This website is powerd by NextJs + React + MongoDB for storing the data. For the server side logic, we use NextJs built in SSR. Buy yourself a trendy geek Tshirt from Rajswear ;) !</p>
            <div className='flex justify-center'>
              <a href="/">
              <button className='inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg'>Start Shopping</button></a>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className='mt-8 text-gray-600 body-font mx-6'>
        <h2 className='font-semibold my-2 text-3xl text-gray-900'>About Us</h2>
        <p className='mb-8 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem eaque sequi voluptate impedit quae, nemo neque tempora rerum beatae odit ut nobis amet non, deserunt eos? Natus illo dolorum unde libero aliquid optio fugiat iste sunt quidem blanditiis reiciendis quia maxime consequuntur odit temporibus, harum facere quos magni placeat?</p>
      </section>
    </div>
    </div>
  )
}

export default About
