import React from "react";
import Image from "next/image";
import Head from "next/head";
import Product from "../models/Product";
import mongoose from "mongoose";
import Link from "next/link";
const Stickers = ({products}) => {
  return (
    <div>
      <Head>
        <title>Stickers - Raj's wear</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <section className="text-gray-600 body-font justify-center min-h-screen">
        <div className="container  md:px-20 py-24 mx-auto justify-center">
          <div className="flex flex-wrap justify-center ">
            {Object.keys(products).length ===0 && <p className="px-4">Sorry all the Stickers are currently out of stock. New stock coming soon. Stay Tuned!.</p>}
            {Object.keys(products).map((item)=>{
            
            return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}>
              <div className="mx-4 shadow-lg my-2">
                <img
                  alt="ecommerce"
                  className="h-[40vh] md:w-[18vw] w-[82vw] block m-auto p-3"
                  src={products[item].img}/>
                <div className="mt-4 px-3 py-2 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    Hoodies
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {products[item].title}
                  </h2>
                  <p className="mt-1">₹{products[item].price}</p>
                  <div className="mt-1">
                    {products[item].size.includes("S") && <span className='border border-gray-300 px-1 mx-1'>S</span>}
                    {products[item].size.includes("M") && <span className='border border-gray-300 px-1 mx-1'>M</span>}
                    {products[item].size.includes("L") && <span className='border border-gray-300 px-1 mx-1'>L</span>}
                    {products[item].size.includes("XL") && <span className='border border-gray-300 px-1 mx-1'>XL</span>}
                    {products[item].size.includes("XXL") && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
                  </div>
                  <div className="mt-1">
                  {products[item].color.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes("black") && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes("green") && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {products[item].color.includes("purple") && <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  </div>
                </div>
              </div>
            </Link>
          })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
 }
  let products = await Product.find({category:'stickers'})
  let sticker={}
  for(let item of products){
    if(item.title in sticker){
        if(!sticker[item.title].color.includes(item.color)  && item.availableQty>0){
           sticker[item.title].color.push(item.color)
        }
        if(!sticker[item.title].size.includes(item.size)  && item.availableQty>0){
           sticker[item.title].size.push(item.size)
        }
    }
    else{
        sticker[item.title] = JSON.parse(JSON.stringify(item))
      if(item.availableQty>0){
        sticker[item.title].color = [item.color]
        sticker[item.title].size = [item.size]
      }
    }
  }
  return{
      props:{products:JSON.parse(JSON.stringify(sticker))},
    }
}
export default Stickers;
