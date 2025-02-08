import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function LatestNews() {
  const datas = [
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/roadtree.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/trees.png",
      date: "Jan 02 2025",
    },
    {
      title: "The Higher the Camera, The Better Videos",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
      image: "/images/ocean.png",
      date: "Jan 02 2025",
    },
  ];
  return (
    <div className="max-w-7xl lg:max-w-6xl  m-auto p-4">
      <div className="m-auto lg:w-3/5 text-center mb-4 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          Form The Blog{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          The Latest News{" "}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-100 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {datas &&
          datas?.map((data, index) => (
            <div
              key={index}
              className="container mx-auto p-4 flex flex-col lg:flex-col items-center justify-between"
            >
              {/* Left Column - Image */}
              <div className=" h-80  w-full flex justify-center">
                <Image
                  src={data?.image} // Ensure this image exists in the public folder
                  alt="Explore Image"
                  width={800}
                  height={630}
                  className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                />
              </div>

              {/* Right Column - Content */}
              <div className={` w-full mt-8 lg:mt-4 lg:text-left  `}>
                <h2 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
                  {"Popular"}
                </h2>
                <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-gray-50 leading-7 mb-2">
                  {data?.title}
                </h2>
                <p className="text-gray-50 text-xs mb-4">{data?.date}</p>
                <button className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center">
                  Read More{" "}
                  <GoArrowUpRight width={20} height={20} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
