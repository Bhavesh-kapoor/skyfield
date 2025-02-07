import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" text-gray-50 bg-gray-900 py-20 px-5">
      <div className="container">
        <div className="grid grid-cols-4 w-5/6 mx-auto gap-6">
          <div className="">
            <div className="mb-2">
              <Image
                src={"/images/logo.svg"}
                width={170}
                height={80}
                alt="sky field"
              />
            </div>
            <div className="pl-3">
              <p className="text-sm text-gray-300 mb-2">
                Our company is a leading provider of innovative solutions.
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Address</strong>: 123 Main St, Anytown, USA 12345
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Phone</strong>: 555-555-5555
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Email</strong>: info@company.com
              </p>
            </div>
          </div>
          <div className=" px-4">
            <h3 className="mb-1">Quick Links</h3>
            <ul className="text-sm pl-2 text-gray-50">
              <Link href={"/"} className="border-none outline-none">
                <li className="mb-1">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="text-sm mb-1">About Us</li>
              </Link>
              <Link href={"/"}>
                <li className="text-sm mb-1">Services</li>
              </Link>
              <Link href={"/"}>
                <li className="text-sm mb-1">Technology</li>
              </Link>
              <Link href={"/"}>
                <li className="text-sm mb-1">Application</li>
              </Link>
              <Link href={"/"}>
                <li className="text-sm mb-1">Career</li>
              </Link>
              <Link href={"/"}>
                <li className="text-sm mb-1">Blogs</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2 px-4">
            <div className="flex justify-start gap-6">
              <div className="w-2/6 ">
                <h3 className="text-sm mb-1">Featured Products</h3>
                <ul className="text-sm pl-2 text-gray-50">
                  <Link href={"/"} className="border-none outline-none">
                    <li className="text-xs">Drone Systems</li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-xs">Control Software</li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-xs">Tactical Trailers</li>
                  </Link>
                </ul>
              </div>
              <div className="w-2/6">
                <h3 className="text-sm mb-1">Support</h3>
                <ul className="text-sm pl-2 text-gray-50">
                  <Link href={"/"} className="border-none outline-none">
                    <li className=" text-xs">Clients Partners</li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-xs">Technical Support</li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-xs">Contact Us</li>
                  </Link>
                </ul>
              </div>
              <div className="text-sm w-2/6">
                <h3 className="text-sm mb-1">Other</h3>
                <ul className="text-sm pl-2 text-gray-50">
                  <Link href={"/"} className="border-none outline-none">
                    <li className="text-xs">Privacy Policy</li>
                  </Link>
                  <Link href={"/"}>
                    <li className="text-xs">Terms & Conditions</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <h2 className="my-4">Subscribe to Our New Letter!</h2>
              <input
                type="email"
                className="border p-2 bg-transparent rounded px-10 w-full mb-2"
                placeholder="Enter Your Email Address"
              />
              <button
                type="button"
                className="w-full text-center text-gray-700 bg-[#FFA7A7] p-2 rounded "
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
