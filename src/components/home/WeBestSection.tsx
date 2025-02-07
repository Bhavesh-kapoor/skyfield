import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function WeBestSection() {
  const datas = [
    {
      title: "Drone Systems",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/product1.png",
    },
    {
      title: "Control Software",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/product2.png",
    },
    {
      title: "Tactical Trailers",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/product3.png",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4">
      <div className="m-auto w-3/5 text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          Featured Products{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          We have the best equipment{" "}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="">
        {datas &&
          datas?.map((data, index) => (
            <div
              key={index}
              className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-12 flex flex-col lg:flex-row items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className="lg:w-2/4 h-80  w-full flex justify-center">
                <Image
                  src={data?.image} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div
                className={`lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left  `}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
                  {"#0"}
                  {index + 1}
                </h2>
                <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-50 leading-7">
                  {data?.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <button className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center">
                  View Products{" "}
                  <GoArrowUpRight width={20} height={20} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
