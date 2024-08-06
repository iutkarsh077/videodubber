"use client";

import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const HeaderNavbar = () => {
  return (
    <header className="bg-white-800 text-gray-800 hidden md:block">
      <div className="container mx-auto px-4 py-2 flex flex-wrap sm:items-center justify-between">
        <div className="flex sm:items-center space-x-4">
          <div className="w-10 h-10 flex items-center sm:justify-center bg-orange-500 text-white rounded-full font-bold text-lg">
            P
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search (ctrl + K)"
              className="px-4 py-2 bg-white-100 text-black rounded-md pl-10 w-64 sm:w-80"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <nav className="flex-grow flex xl:ml-32 space-x-6 py-2 smaller:hidden larger:flex">
          <Link href="#" className="hover:text-orange-500">Launches</Link>
          <Link href="#" className="hover:text-orange-500">Products</Link>
          <Link href="#" className="hover:text-orange-500">News</Link>
          <Link href="#" className="hover:text-orange-500">Community</Link>
          <Link href="#" className="hover:text-orange-500">Advertise</Link>
        </nav>

      </div>
    </header>
  );
};

export default HeaderNavbar;
