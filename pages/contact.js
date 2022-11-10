import React from 'react'
import Image from 'next/image'
import Head from "next/head";
const Contact = () => {
  return (
    <div className='mt-20'>
      <Head>
        <title>Contact Us - Raj's wear</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className='min-h-screen'>
       <div className="max-w-screen-xl md:mt-24 px-4 md:px-8 lg:px-12 xl:px-26 md:py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-center text-3xl font-bold leading-tight">
              Let's talk about everything!
            </h2>
            <img src={'/logo.ico'} className='h-40 mx-auto py-2'></img>
            <p className="text-center text-xl lg:text-2xl font-medium leading-tight">Feel free to ask us anything!</p>
            <p className='py-4 px-4 text-md lg:text-md leading-tight text-center'>If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</p>
            <div className='flex justify-between'>
              <div className='text-center px-5 md:px-0 md:text-left py-10'>
                <span className='font-bold'>Corporate Address</span><br/>
                101,Rajvi Complex
                <br />
                Sarthana Jakatnaka
                <br />
                Surat Gujarat, 395013
              </div>
              <div className='text-center px-5 md:px-0 md:text-left py-10'>
              <span className='font-bold'>Customer Support</span><br/>
              Call/Whatsapp: 
              <a className='underline text-blue-600' rel="noreferrer" target="_blank" href="https://wa.me/6353381181?text=Hi,%20I%20need%20to%20enquire%20about%20products%20on%20CodesWear">+91 6353381181</a>
              <br />
              Email:cbhanderi666@gmail.com
              <br />
              Time : 9AM - 6PM 
              </div>
            </div>
          </div>
        </div>
       </div>
        
      </div>
    </div>
  )
}

export default Contact
