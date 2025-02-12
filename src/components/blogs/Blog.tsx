import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function Blogs() {
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
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
         <div className="absolute top-44 left-[-50rem] inset-0 flex justify-center items-center">
        <div className="w-2/5  h-screen bg-gradient-to-r from-[#737373] via-10% via-[#737373] to-[#ffa7a7] opacity-30 rounded-full blur-3xl -z-40"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 ">
        {datas &&
          datas?.map((data, index) => (
            <div
              key={index}
              className="container mx-auto  lg:p-4 mb-6 flex flex-col lg:flex-col items-center justify-between"
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
                <h2 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-normal tracking-widest text-gray-800 leading-7 mb-3">
                  {"Popular"}
                </h2>
                <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-gray-800 leading-7 mb-2">
                  {data?.title}
                </h2>
                <p className="text-gray-800 text-xs mb-4">{data?.date}</p>
                <Link href={"/blog"} className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-gray-800 border-gray-900 rounded-none shadow-md border transition flex justify-center items-center">
                  Read More{" "}
                  <GoArrowUpRight width={20} height={20} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
