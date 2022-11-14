 import Head from "next/head";
import Image from "next/image";
import { MdLocalShipping,MdLocalOffer } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raj's Wear - Wear the comfort</title>
        <meta name="description" content="Raj'swear.com - wear the comfort" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <img
          className="poster min-w-full max-h-96"
          src="https://theclippingpathservice.com/wp-content/uploads/2022/01/Best-Size-For-ecommerce-Product-Images.png"
          alt=""
          // width='1400px'
          height='250px'
        ></img>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Wear the Comfort with Rajswear
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              To be Confident and your style must be Comfrotable !! So wear the
              Comfort
            </p>
          </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font m-2 text-gray-900">
            Our Latest Collection <hr />
          </h1>
          <div className="h-1 w-20 bg-purple-500 rounded"></div>
          <div className="flex flex-wrap mb-8 ">
            <div className="md:w-1/4 p-4">
              <Link href={"/tshirts"}>
                <div className="mx-2 shadow-lg my-2">
                  <img
                    alt="ecommerce"
                    className="h-[40vh] md:w-[18vw] w-[82vw] block m-auto p-3"
                    src={
                      "https://m.media-amazon.com/images/I/619SqQW1NYL._AC_UL480_FMwebp_QL65_.jpg"
                    }
                  />
                  <div className="mt-4 px-3 py-2 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirts
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Wear the comfort Premium
                    </h2>
                    <p className="mt-1">₹499</p>
                    <div className="mt-1">
                      <span className="border border-gray-300 px-1 mx-1">
                        S
                      </span>
                      <span className="border border-gray-300 px-1 mx-1">
                        L
                      </span>
                      <span className="border border-gray-300 px-1 mx-1">
                        XL
                      </span>
                    </div>
                    <div className="mt-1">
                      <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-purple-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" md:w-1/4 p-4">
              {" "}
              <Link href={"/hoodies"}>
                <div className="mx-2 shadow-lg my-2">
                  <img
                    alt="ecommerce"
                    className="h-[40vh] md:w-[18vw] w-[82vw] block m-auto p-3"
                    src={
                      "https://m.media-amazon.com/images/I/619SqQW1NYL._AC_UL480_FMwebp_QL65_.jpg"
                    }
                  />
                  <div className="mt-4 px-3 py-2 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Wear the Hood Premium
                    </h2>
                    <p className="mt-1">₹499</p>
                    <div className="mt-1">
                      <span className="border border-gray-300 px-1 mx-1">
                        M
                      </span>
                      <span className="border border-gray-300 px-1 mx-1">
                        L
                      </span>
                      <span className="border border-gray-300 px-1 mx-1">
                        XL
                      </span>
                    </div>
                    <div className="mt-1">
                      <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:w-1/4 p-4">
              <Link href={`/stickers`}>
                <div className="mx-2 shadow-lg my-2">
                  <img
                    alt="ecommerce"
                    className="h-[40vh] md:w-[18vw] w-[82vw] block m-auto p-3"
                    src={
                      "https://m.media-amazon.com/images/I/619SqQW1NYL._AC_UL480_FMwebp_QL65_.jpg"
                    }
                  />
                  <div className="mt-4 px-3 py-2 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Stickers
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      All SuperHeroes Collection
                    </h2>
                    <p className="mt-1">₹499</p>
                    <div className="mt-1">
                      <span className="border border-gray-300 px-1 mx-1">
                        S
                      </span>
                      <div className="mt-1">
                        <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:w-1/4 p-4">
              {" "}
              <Link href={`/mugs`}>
                <div className="mx-2 shadow-lg my-2">
                  <img
                    alt="ecommerce"
                    className="h-[40vh] md:w-[18vw] w-[82vw] block m-auto p-3"
                    src={
                      "https://m.media-amazon.com/images/I/619SqQW1NYL._AC_UL480_FMwebp_QL65_.jpg"
                    }
                  />
                  <div className="mt-4 px-3 py-2 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Tshirts
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Wear the comfort Premium
                    </h2>
                    <p className="mt-1">₹499</p>
                    <div className="mt-1">
                      <span className="border border-gray-300 px-1 mx-1">
                        Standard
                      </span>
                    </div>
                    <div className="mt-1">
                      <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center md:mx-48 text-center rounded-full bg-purple-100 text-purple-500 mb-4">
                <FaTshirt className="w-16 h-5"/>
                </div>
                <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-2">
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed text-center text-base">
                  Our products are 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center md:mx-48 rounded-full bg-purple-100 text-purple-500 mb-4">
                <MdLocalShipping className="w-16 h-5"/>
                </div>
                <h2 className="text-lg text-gray-900 font-medium text-center title-font mb-2">
                  Free Shipping
                </h2>
                <p className="leading-relaxed text-center text-base">
                  We Ship all over India for FREE !
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg ">
                <div className="w-10 h-10 inline-flex items-center justify-center md:mx-48 rounded-full bg-purple-100 text-purple-500 mb-4">
                <MdLocalOffer className="w-16 h-5 "/>
                </div>
                <h2 className="text-lg text-gray-900 text-center font-medium title-font mb-2">
                  {" "}
                  Exiting offers
                </h2>
                <p className="leading-relaxed text-center text-base">
                  We provide amazing offers & discounts on our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

