import Image from "next/image";
import Link from "next/link";
import React from "react";
import NewsLatter from "./NewsLatter";

export default function Footer() {
  const navLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Services", url: "/services" },
    { name: "Technology", url: "/technology" },
    { name: "Application", url: "/application" },
    { name: "Career", url: "/career" },
    { name: "Blogs", url: "/blogs" },
  ];

  const support = [
    { name: "Clients Partners", url: "/clients-partners" },
    { name: "Technical Support", url: "/technical-support" },
    { name: "Contact Us", url: "/contact-us" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms & Conditions", url: "/terms-and-conditions" },
  ];

  return (
    <footer className="text-gray-50 bg-gray-900 py-10 px-4 w">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:w-5/6 mx-auto">
          {/* Company Info */}
          <div className="w-full">
            <div className="mb-4">
              <Image
                src="/images/logo.svg"
                width={170}
                height={80}
                alt="Sky Field"
              />
            </div>
            <div>
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

          {/* Quick Links */}
          <div>
            <h3 className="mb-2 font-semibold">Quick Links</h3>
            <ul className="text-sm text-gray-50 space-y-2">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text-gray-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Products & Support */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex flex-wrap gap-6">
              <div className="w-1/2 sm:w-1/3">
                <h3 className="text-md mb-2 font-semibold">
                  Featured Products
                </h3>
                <ul className="text-sm text-gray-50 space-y-1">
                  {[
                    "Drone Systems",
                    "Control Software",
                    "Tactical Trailers",
                  ].map((item, index) => (
                    <li key={index}>
                      <Link href="/application" className="hover:text-gray-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 sm:w-1/3">
                <h3 className="text-md mb-2 font-semibold">Support</h3>
                <ul className="text-sm text-gray-50 space-y-1">
                  {support.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className="hover:text-gray-300">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-1/3">
                <h3 className="text-md mb-2 font-semibold">Other</h3>
                <ul className="text-sm text-gray-50 space-y-1">
                  {footerLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item?.url} className="hover:text-gray-300">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subscription Section */}
            {/* <div className="mt-6">
              <h2 className="mb-2 text-lg font-semibold">
                Subscribe to Our Newsletter!
              </h2>
              <form method="post" action="">
                <input
                  type="email"
                  className="border p-2 bg-transparent rounded px-4 w-full mb-2"
                  placeholder="Enter Your Email Address"
                />
                <button
                  type="button"
                  className="w-full text-center text-gray-700 bg-[#FFA7A7] p-2 rounded hover:bg-[#ff8c8c] transition"
                >
                  Subscribe Now
                </button>
              </form>
            </div> */}
            <NewsLatter />
          </div>
        </div>
      </div>
    </footer>
  );
}
