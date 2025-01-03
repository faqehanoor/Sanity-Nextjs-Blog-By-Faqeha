"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

type MenuItem = {
  title: string,
  route: string,
  children?: MenuItem[],
}

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Blog",
    route: "/blog",
  },
  {
    title: "Offer",
    route: "/Offer",
  },
  {
    title: "Contact Us",
    route: "/ContactUs",
  },

 
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        
        <Link href="/" className="cursor-pointer">
          <span className="font-bold text-pink-600 text-4xl uppercase">
            Perfume Blog
          </span>
        </Link>

     
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-8 top-6 cursor-pointer z-50 w-7 h-7 lg:hidden"
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7" />
          ) : (
            <Bars3BottomRightIcon className="w-7 h-7" />
          )}
        </div>

     
        <div
          className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto left-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:gap-6 md:mt-0 mt-4 md:pl-0 pl-9">
            {menuItems.map((item, index) => (
              <li key={`link-${index}`} className="md:ml-4 my-2 md:my-0">
                <Link
                  href={item.route}
                  className='md-ml-8 md:my-0 my-7 font-medium text-xl uppercase hover:text-violet-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-300 duration-100 flex items-center'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
