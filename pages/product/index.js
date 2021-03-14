import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <>
      <main className="h-screen	max-w-full bg-gray-100 pb-8 overscroll-auto">
        <header className="h-16 max-w-full bg-white">
          {/* subnav */}
          <section className="h-full max-w-screen-lg mx-auto flex items-center justify-between">
            <div className="logo">
              <span>JUMIA</span>
            </div>
            {/* search bar */}
            <div className="w-1/2	border-2 border-grey-blue-900 border-opacity-100 ">
              <input type="text" placeholder="Search products" />
            </div>
            <div className="">
              <ul className="flex">
                <li>login</li>
                <li>cart</li>
              </ul>
            </div>
          </section>
          <div className="max-w-screen-lg mx-auto my-4">
            <section>
              <div className="grid grid-cols-4 gap-1 h-96">
                <div className="col-span-3 grid grid-cols-2  bg-white rounded">
                  <div className="rounded">
                    {" "}
                    <img
                      src="/images/1.jpg" // Route of the image file
                      className="object-contain h-full w-full"
                      alt="Your Name"
                    />{" "}
                  </div>
                  <div className="p-4 rounded">
                    <h2 className="font-medium">
                      SYINOTEC 24" LED Digital HD Ready TV - Black 24D1000
                    </h2>

                    <p className="font-light mt-2.5">
                      Brand: <span className="text-blue-500">SYINOTEC</span>{" "}
                    </p>

                    <h1 className="text-2xl	font-bold mt-2.5">KSh 8,499</h1>

                    <h3 className="line-through">KSh 11,500</h3>

                    <div class="rounded-md shadow">
                      <a
                        href="#"
                        class="w-full flex items-center justify-center px-8 py-3 mt-10 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10"
                      >
                        ADD TO CART
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded">DELIVERY & RETURNS</div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-4 gap-1 h-96 mt-4">
                <div className="col-span-3 bg-white">prd</div>
                <div className="bg-white">Product details</div>
              </div>
            </section>
          </div>
        </header>
      </main>
    </>
  );
}
