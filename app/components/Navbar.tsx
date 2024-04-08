import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-10/12 absolute z-10 bg-blue-100 rounded-full shadow-2xl m-2">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <div className=" text-white font-bold text-xl cursor-pointer mr-10">
              Portfolio Dashboard
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-6">
              {" "}
              {/* Increased spacing */}
              <Link href="/" className="text-center">
                <div className="flex justify-center text-white hover:text-black cursor-pointer hover:bg-white rounded-full p-2">
                  Home
                </div>
              </Link>
              <Link href="/portfolio-details" className="text-center">
                <div className="flex justify-center text-white hover:text-black cursor-pointer hover:bg-white rounded-full p-2">
                  Portfolio Details
                </div>
              </Link>
              <Link href="/portfolio-ratios" className="text-center">
                <div className="text-white hover:text-black cursor-pointer hover:bg-white rounded-full p-2">
                  Portfolio Ratios
                </div>
              </Link>
              <Link href="/portfolio-returns" className="text-center">
                <div className="text-white hover:text-black cursor-pointer hover:bg-white rounded-full p-2">
                  Portfolio Returns
                </div>
              </Link>
              <Link href="/stock-returns" className="text-center">
                <div className="text-white hover:text-black cursor-pointer hover:bg-white rounded-full p-2">
                  Stock Returns
                </div>
              </Link>
              <Link href="/portfolio-interactions-more" className="text-center">
                <div className="text-white hover:text-black cursor-pointer hover:bg-white rounded-full p-2">
                  More Portfolio Interactions
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
