// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className=" text-gray-50 bg-gray-900 py-20 px-5">
//       <div className="container">
//         <div className="grid  lg:grid-cols-4 w-5/6 mx-auto gap-6">
//           <div className="col-span-1 w-full">
//             <div className="mb-2">
//               <Image
//                 src={"/images/logo.svg"}
//                 width={170}
//                 height={80}
//                 alt="sky field"
//               />
//             </div>
//             <div className="pl-3">
//               <p className="text-sm text-gray-300 mb-2">
//                 Our company is a leading provider of innovative solutions.
//               </p>
//               <p className="text-xs text-gray-300 mb-2">
//                 <strong>Address</strong>: 123 Main St, Anytown, USA 12345
//               </p>
//               <p className="text-xs text-gray-300 mb-2">
//                 <strong>Phone</strong>: 555-555-5555
//               </p>
//               <p className="text-xs text-gray-300 mb-2">
//                 <strong>Email</strong>: info@company.com
//               </p>
//             </div>
//           </div>
//           <div className=" px-4">
//             <h3 className="mb-1">Quick Links</h3>
//             <ul className="text-sm pl-2 text-gray-50">
//               <Link href={"/"} className="border-none outline-none">
//                 <li className="mb-1">Home</li>
//               </Link>
//               <Link href={"/"}>
//                 <li className="text-sm mb-1">About Us</li>
//               </Link>
//               <Link href={"/"}>
//                 <li className="text-sm mb-1">Services</li>
//               </Link>
//               <Link href={"/"}>
//                 <li className="text-sm mb-1">Technology</li>
//               </Link>
//               <Link href={"/"}>
//                 <li className="text-sm mb-1">Application</li>
//               </Link>
//               <Link href={"/"}>
//                 <li className="text-sm mb-1">Career</li>
//               </Link>
//               <Link href={"/"}>
//                 <li className="text-sm mb-1">Blogs</li>
//               </Link>
//             </ul>
//           </div>
//           <div className="col-span-2 px-4">
//             <div className="flex justify-start gap-6">
//               <div className="w-2/6 ">
//                 <h3 className="text-sm mb-1">Featured Products</h3>
//                 <ul className="text-sm pl-2 text-gray-50">
//                   <Link href={"/"} className="border-none outline-none">
//                     <li className="text-xs">Drone Systems</li>
//                   </Link>
//                   <Link href={"/"}>
//                     <li className="text-xs">Control Software</li>
//                   </Link>
//                   <Link href={"/"}>
//                     <li className="text-xs">Tactical Trailers</li>
//                   </Link>
//                 </ul>
//               </div>
//               <div className="w-2/6">
//                 <h3 className="text-sm mb-1">Support</h3>
//                 <ul className="text-sm pl-2 text-gray-50">
//                   <Link href={"/"} className="border-none outline-none">
//                     <li className=" text-xs">Clients Partners</li>
//                   </Link>
//                   <Link href={"/"}>
//                     <li className="text-xs">Technical Support</li>
//                   </Link>
//                   <Link href={"/"}>
//                     <li className="text-xs">Contact Us</li>
//                   </Link>
//                 </ul>
//               </div>
//               <div className="text-sm w-2/6">
//                 <h3 className="text-sm mb-1">Other</h3>
//                 <ul className="text-sm pl-2 text-gray-50">
//                   <Link href={"/"} className="border-none outline-none">
//                     <li className="text-xs">Privacy Policy</li>
//                   </Link>
//                   <Link href={"/"}>
//                     <li className="text-xs">Terms & Conditions</li>
//                   </Link>
//                 </ul>
//               </div>
//             </div>
//             <div className="p-4">
//               <h2 className="my-4">Subscribe to Our New Letter!</h2>
//               <input
//                 type="email"
//                 className="border p-2 bg-transparent rounded px-10 w-full mb-2"
//                 placeholder="Enter Your Email Address"
//               />
//               <button
//                 type="button"
//                 className="w-full text-center text-gray-700 bg-[#FFA7A7] p-2 rounded "
//               >
//                 Subscribe Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }














import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-50 bg-gray-900 py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-5/6 mx-auto">
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
              {[
                "Home",
                "About Us",
                "Services",
                "Technology",
                "Application",
                "Career",
                "Blogs",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="/" className="hover:text-gray-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Products & Support */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="flex flex-wrap gap-6">
              <div className="w-1/2 sm:w-1/3">
                <h3 className="text-md mb-2 font-semibold">Featured Products</h3>
                <ul className="text-sm text-gray-50 space-y-1">
                  {["Drone Systems", "Control Software", "Tactical Trailers"].map(
                    (item, index) => (
                      <li key={index}>
                        <Link href="/" className="hover:text-gray-300">
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="w-1/2 sm:w-1/3">
                <h3 className="text-md mb-2 font-semibold">Support</h3>
                <ul className="text-sm text-gray-50 space-y-1">
                  {["Clients Partners", "Technical Support", "Contact Us"].map(
                    (item, index) => (
                      <li key={index}>
                        <Link href="/" className="hover:text-gray-300">
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="w-full sm:w-1/3">
                <h3 className="text-md mb-2 font-semibold">Other</h3>
                <ul className="text-sm text-gray-50 space-y-1">
                  {["Privacy Policy", "Terms & Conditions"].map((item, index) => (
                    <li key={index}>
                      <Link href="/" className="hover:text-gray-300">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Subscription Section */}
            <div className="mt-6">
              <h2 className="mb-2 text-lg font-semibold">
                Subscribe to Our Newsletter!
              </h2>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
