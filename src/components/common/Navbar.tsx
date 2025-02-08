import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex justify-evenly items-center h-36 absolute top-0 z-[1000] w-full">
      <div>
        <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          width={150}
          height={70}
          alt="sky field"
          />
          F</Link>
      </div>
      <ul className="hidden md:flex justify-between items-center w-3/5 text-gray-50 ">
        <Link href={"/"} className="border-none outline-none">
          <li className="w-20 text-center border-b-4 border-[#ffa6a6] text-[#ffa6a6] text-base font-bold font-['Poppins']">Home</li>
        </Link>
        <Link href={"/about-us"}>
          <li className="mr-10">About Us</li>
        </Link>
        <Link href={"/"}>
          <li className="mr-10">Services</li>
        </Link>
        <Link href={"/"}>
          <li className="mr-10">Technology</li>
        </Link>
        <Link href={"/"}>
          <li className="mr-10">Application</li>
        </Link>
        <Link href={"/"}>
          <li className="mr-10">Career</li>
        </Link>
        <Link href={"/"}>
          <li className="mr-10">Blogs</li>
        </Link>
      </ul>
      <div>
        <button className="border border-gray-50 px-5 py-2 text-gray-50">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
