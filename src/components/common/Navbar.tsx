"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Technology", path: "/technology" },
    { name: "Application", path: "/application" },
    { name: "Career", path: "/career" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <nav className="bg-transparent flex justify-between px-10 lg:px-0 lg:justify-evenly items-center h-28 lg:h-36 absolute top-0 z-[1000] w-full">
      <div>
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            width={150}
            height={70}
            alt="sky field"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-between items-center w-3/5 text-gray-50">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="border-none outline-none"
          >
            <li
              className={`mr-10 text-base font-['Poppins'] ${
                pathname === item.path
                  ? "border-b-4 border-[#ffa6a6] text-gray-100 font-bold"
                  : "text-gray-300 hover:text-gray-100 transition duration-200"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div>
        <MobileMenu />

        <Link
          href={"/contact-us-us"}
          className="border hidden lg:block border-gray-50 px-5 py-2 text-gray-50"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
