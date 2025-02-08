// "use client";

// // components/TrustedClientsGridCarousel.tsx
// import Image from "next/image";

// const Why: React.FC = () => {
//   const clients = [
//     { id: 1, name: "Innovation", logo: "/images/bulb.png" },
//     { id: 2, name: "Quality", logo: "/images/high-qualty.png" },
//     { id: 3, name: "Customer Focus", logo: "/images/consumer-centric.png" },
//     { id: 4, name: "Global Support", logo: "/images/global-online.png" },
//   ];

//   const bgShades = [
//     "bg-gray-100",
//     "bg-gray-200",
//     "bg-gray-300",
//     "bg-gray-400",
//     "bg-gray-500",
//     "bg-gray-600",
//     "bg-gray-700",
//     "bg-gray-800",
//     "bg-gray-900",
//   ];

//   return (
//     <section className="py-12 max-w-7xl m-auto p-4 lg:p-0    ">
//       <div className="m-auto lg:w-3/5 text-center lg:mb-16">
//         <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
//           Why SkyField{" "}
//         </h2>
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
//           Our Partners{" "}
//         </h2>
//         <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-100 mt-4 leading-8">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat
//         </p>
//       </div>

//       <div className="relative overflow-hidden py-8">
//         <div className="relative  overflow-hidden max-w-screen-xl mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Map clients to show in pairs */}
//           {clients &&
//             clients?.map((client, index) => (
//               <div
//                 key={index}
//                 className={`flex-shrink-0 flex flex-col justify-center items-center h-64 rounded-none ${
//                   bgShades[8 - index]
//                 }`}
//               >
//                 <Image
//                   src={client.logo}
//                   width={50}
//                   height={50}
//                   alt={`Client ${index + 1}`}
//                   className="w-28 h-28 object-contain p-2"
//                 />
//                 <p className="mt-2 text-lg font-semibold text-center text-gray-50">
//                   {client.name}
//                 </p>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Why;

"use client";

import Image from "next/image";

const Why: React.FC = () => {
  const clients = [
    { id: 1, name: "Innovation", logo: "/images/bulb.png" },
    { id: 2, name: "Quality", logo: "/images/high-qualty.png" },
    { id: 3, name: "Customer Focus", logo: "/images/consumer-centric.png" },
    { id: 4, name: "Global Support", logo: "/images/global-online.png" },
  ];

  const bgShades = [
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
    "bg-gray-800",
    "bg-gray-900",
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto p-4 lg:p-0">
      {/* Radial Gradient Background */}

      {/* Content */}
      <div className="relative z-10 text-center lg:w-3/5 mx-auto lg:mb-16 lg:p-16">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          Our Commitments
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          Why SkyField
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Clients Grid */}
      <div className="relative z-10 py-8">
        <div className="max-w-screen-xl mx-auto w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center h-64 rounded-lg shadow-lg p-6 ${
                bgShades[8 - index]
              }`}
            >
              <Image
                src={client.logo}
                width={50}
                height={50}
                alt={`Client ${index + 1}`}
                className="w-28 h-28 object-contain p-2"
              />
              <p className="mt-2 text-lg font-semibold text-center text-gray-50">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
