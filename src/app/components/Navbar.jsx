"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, spring } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <main className='z-[10]'>
      <div
        id="navbar"
        className="fixed w-screen bg-white backdrop-blur-lg dark:bg-[#31363F] pt-4 border-b border-white dark:border-gray-900 shadow-md p-3 z-[1000]"
      >
        <ul className="flex justify-between mr-10 min-w-60 font-extrabold dark:text-white">
          <button className="font-extrabold text-xl -mt-2 border-2 p-1 text-black hover:text-blue-500 dark:hover:text-blue-500 border-black dark:text-white dark:border-white">
            CG
          </button>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#">Home</a>
          </li>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#">About</a>
          </li>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#">Projects</a>
          </li>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#">Contact</a>
          </li>
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-baseline-density-medium dark:stroke-white"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h16" />
              <path d="M4 12h16" />
              <path d="M4 4h16" />
            </svg>
          </button>
        </ul>
      </div>
      <motion.div
      initial={{marginLeft: "-300vw"}}
      animate={{ marginLeft: showMenu ? 0 : "-300vw" }}
      transition={{type: spring}}
      className="no_transition"
      >
        <ul
          id="sm_navbar"
          className="fixed text-6xl p-6 h-screen mt-12 w-screen border border-white dark:border-[#31363F] shadow-md font-bold z-10 backdrop-blur-lg dark:backdrop-blur-lg text-black dark:text-white"
        >
          <li className="svg_hover py-4">
            <a href="#">Home</a>
          </li>
          <li className="svg_hover py-4">
            <a href="#">About</a>
          </li>
          <li className="svg_hover py-4">
            <a href="#">Projects</a>
          </li>
          <li className="svg_hover py-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      </motion.div>
    </main>
  );
};

export default Navbar;
