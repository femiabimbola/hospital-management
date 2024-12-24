"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Menu, X} from 'lucide-react'

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => setNav(!nav);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        {/* Logo for both */}
        <div className="flex items-center">
          <Image
            src="/images/logo.webp"
            className="text-3xl font-bold"
            width={42}
            height={42}
            alt="logo"
          />
          <h1 className="w-full text-xl md:text-2xl font-medium">Iwosan.</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-3 py-2 hover:bg-[#399299] hover:text-white rounded-xl mx-3 cursor-pointer duration-300"
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* The buttons */}
        <div className="gap-x-6 hidden md:flex">
          <button className="bg-[#399299] text-white px-6 py-2 rounded-xl"> Sign Up</button>
          <button className="hover:bg-[#399299]  hover:text-white hover:rounded-xl px-6 py-2">Sign In</button>
        </div>

        {/* Mobile Navigation Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#072007] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="flex items-center p-3">
            <Image
              src="/images/logo.webp"
              className=" font-bold"
              width={36}
              height={36}
              alt="logo"
            />
            <h1 className="w-full text-2xl font-bold text-white">Iwosan</h1>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-3 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 text-white"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
