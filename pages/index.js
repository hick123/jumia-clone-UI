import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  FaAppleAlt,
  FaHighlighter,
  FaHome,
  FaTshirt,
  FaMenorah,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import { HiDesktopComputer } from "react-icons/hi";
import {
  GiPocketRadio,
  GiFlowerPot,
  GiBoxUnpacking,
  GiMoneyStack,
} from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import {
  AiOutlineShoppingCart,
  AiOutlineQuestionCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { RiArrowDropDownLine, RiRefund2Fill } from "react-icons/ri";

export default function Home() {
  const topSelling = Array(5).fill(0);

  const menu = [
    { name: "Supermarket", icon: <FaAppleAlt /> },
    { name: "Health & Beauty", icon: <FaHighlighter /> },
    { name: "Home & Office", icon: <FaHome /> },
    { name: "Phones & Tablets", icon: <BsPhone /> },
    { name: "Computing", icon: <HiDesktopComputer /> },
    { name: "Electronics", icon: <GiPocketRadio /> },
    { name: "Fashion", icon: <FaTshirt /> },
    { name: "Gaming", icon: <GrGamepad /> },
    { name: "Baby Products", icon: <FaMenorah /> },
    { name: "Sporting Goods", icon: <BiDumbbell /> },
    { name: "Garden & Outdoors", icon: <GiFlowerPot /> },
    { name: "Other categories", icon: <FaMenorah /> },
  ];

  const featuredCategories = [
    { name: "Digitak TV's", img: "Digital_TV" },
    { name: "Cookers", img: "BURNERS" },
    { name: "Alcoholic Drink", img: "Alcoholic_drinks" },
    { name: "Baby Carriers", img: "fg-4" },
    { name: "Body Care", img: "Body_care" },
    { name: "Accessories", img: "Electronic_accessories" },
    { name: "Men's Perfume", img: "Men_s_perfume" },
    { name: "Pasta & Noodles", img: "Pasta" },
    { name: "Washing Machine", img: "Washing_machines" },
    { name: "Sleepware", img: "Sleepware" },
    { name: "Data Storage", img: "Secure-your-data" },
    { name: "Men's Shoes", img: "Men's-shoes" },
  ];
  return (
    <>
      <Head>
        <title>JUMIA Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full bg-gray-100 pb-8">
        <header className="h-16 max-w-full bg-white">
          {/* subnav */}
          <section className="h-full max-w-screen-lg mx-auto flex items-center justify-between">
            <div className="logo">
              <span className="text-xl font-bold">JUMIA CLONE</span>
            </div>
            {/* search bar */}
            <div className="flex w-1/2">
              <input
                type="text"
                className="w-3/4 border-2 border-grey-900 border-opacity-100 rounded"
                placeholder="Search products"
              />

              <div class="ml-4 rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-2 md:text-sm md:px-4"
                >
                  Search
                </a>
              </div>
            </div>
            <div className="">
              <div className="flex">
                <a href="" className="flex items-center ml-2">
                  <AiOutlineUser size={24} /> <span>Login</span>{" "}
                  <RiArrowDropDownLine size={24} />
                </a>
                <a href="" className="flex items-center ml-2">
                  <AiOutlineQuestionCircle size={24} /> <span>Help</span>{" "}
                  <RiArrowDropDownLine size={24} />
                </a>
                <a href="" className="flex items-center ml-2">
                  <AiOutlineShoppingCart size={24} />

                  <span>Cart</span>
                </a>
              </div>
            </div>
          </section>
        </header>

        {/* hero */}
        <div className="max-w-screen-lg mx-auto my-4">
          <section className="hero">
            {/* menu */}
            <div className="grid grid-cols-5 gap-4 h-80">
              <div className="p-4 bg-white rounded">
                {menu.map((menuItem) => {
                  return (
                    <div className="flex items-center h-6">
                      {menuItem.icon}
                      <h2 className="ml-2 text-sm">{menuItem.name}</h2>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-3 bg-white rounded">
                <img
                  src={`images/hero.jpg`} // Route of the image file
                  className="object-fill h-full w-full rounded"
                  alt="Your Name"
                />
              </div>
              <div className="">
                <div className="pt-5 pl-2 bg-white rounded">
                  {/* right upper */}
                  <div className="flex items-center h-12">
                    <AiOutlineQuestionCircle
                      className="text-yellow-500"
                      size={32}
                    />
                    <div className="pl-2">
                      <h2 className="text-base font-bold"> HELP CENTER</h2>
                      <h6 className="text-xs">Guide To Customer Care</h6>
                    </div>
                  </div>

                  <div className="flex items-center h-12">
                    <GiBoxUnpacking className="text-yellow-500" size={28} />
                    <div className="pl-2">
                      <h2 className="text-sm font-bold">EASY RETURN</h2>
                      <h6 className="text-xs">Quick Refund</h6>
                    </div>
                  </div>
                  <div className="flex items-center h-12">
                    <GiMoneyStack className="text-yellow-500" size={32} />
                    <div className="pl-2">
                      <h2 className="text-sm font-bold">SELL ON JUMIA</h2>
                      <h6 className="text-xs">Millions Of Visitors</h6>
                    </div>
                  </div>
                </div>

                {/* right bottom  */}

                <div className="mt-2 bg-white rounded">
                  <img
                    src={`images/jumiaprime.gif`} // Route of the image file
                    className="object-fill h-full w-full rounded"
                    alt="Your Name"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* links */}
          <section className="mt-8 rounded">
            {/* menu */}
            <div className="grid grid-cols-4 gap-1 h-12 ">
              <div className="bg-white rounded flex items-center">
                <img
                  src={`images/b-0.png`} // Route of the image file
                  className="object-contain h-8 w-8 ml-4"
                  alt="Your Name"
                />
                <h3 className="ml-4">Tech Week</h3>
              </div>
              <div className="bg-white rounded flex items-center">
                <img
                  src={`images/b-1.png`} // Route of the image file
                  className="object-contain h-8 w-8 ml-4"
                  alt="Your Name"
                />
                <h3 className="ml-4">Officials Stores</h3>
              </div>
              <div className="bg-white rounded flex items-center">
                <img
                  src={`images/b-2.png`} // Route of the image file
                  className="object-contain h-8 w-8 ml-4"
                  alt="Your Name"
                />
                <h3 className="ml-4">free Delivery</h3>
              </div>
              <div className="bg-white rounded flex items-center">
                <img
                  src={`images/b-3.png`} // Route of the image file
                  className="object-contain h-8 w-8 ml-4"
                  alt="Your Name"
                />
                <h3 className="ml-4">Credo CashBacks</h3>
              </div>
            </div>
          </section>

          {/* links */}
          <section className="my-4 bg-white h-58 rounded">
            <h2 className="p-4">Top Selling</h2>

            <div className="grid grid-cols-5 gap-3 p-4">
              {topSelling.map((item, idx) => (
                <div className="h-52 bg-white shadow-lg rounded" key={idx}>
                  <img
                    src={`images/${idx}.jpg`} // Route of the image file
                    className="object-contain h-full w-full"
                    alt="Your Name"
                  />
                  {/* <h3>KES 20,000</h3> */}
                </div>
              ))}
            </div>
          </section>
          <section className="my-4 bg-white h-auto rounded">
            <div className="grid grid-cols-2 gap-2 h-auto p-2">
              <img
                src={`images/bannerleft.jpg`} // Route of the image file
                className="object-contain h-full w-full rounded"
                alt="Your Name"
              />
              <img
                src={`images/bannerright.png`} // Route of the image file
                className="object-contain h-full w-full rounded"
                alt="Your Name"
              />
            </div>
          </section>

          {/* links */}
          <section className="my-4 bg-white h-58 rounded">
            <h2 className="p-4">Featured Categories</h2>

            <div className="grid md:grid-cols-6 gap-3 p-4 bg-white">
              {featuredCategories.map((item, idx) => (
                <div className="mb-4" key={item.img}>
                  <img
                    src={`images/${item.img}.jpg`} // Route of the image file
                    className="object-contain h-full w-full"
                    alt="Your Name"
                  />
                  <h3>{item.name}</h3>
                  {/* <h3>KES 20,000</h3> */}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
