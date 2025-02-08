import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function LeaderShips() {
  const datas = [
    {
      title: "Vision and Strategic Thinking",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "Communication Skills",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "Adaptability",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
    {
      title: "Decision-Making",
      description:
        "Our team of experts will help you to extend your drone operations to new heights.",
    },
  ];
  return (
    <div className="max-w-7xl bg-[#b0b0b08c]  m-auto p-4 py-28 ">
      <div className="m-auto max-w-6xl">
        <div className="m-auto lg:w-4/5 text-center mb-8 lg:mb-16">
          <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-semibold tracking-widest text-gray-900 leading-7 mb-3">
            Introduction to Leadership
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          Key Aspects of Leadership in Industry
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-900 mt-4 w-4/5 m-auto leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {datas &&
            datas?.map((data, index) => (
              <div
                className="border text-left col-span-1 text-gray-900 border-gray-900 p-8 h-64 flex flex-col justify-end items-start "
                key={index}
              >
                <h2 className="text-lg font-bold mb-2">{data?.title}</h2>
                <p className="text-xs mb-6 text-left">{data?.description}</p>
                <div className="w-full flex justify-end items-center">
                  <button className="bg-gray-900 text-gray-100 rounded-full text-2xl p-1.5 w-10 h-10">
                    <GoArrowUpRight width={30} height={30} />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
