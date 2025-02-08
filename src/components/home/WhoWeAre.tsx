import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32 py-12 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Column - Image */}
      <div className="lg:w-2/5 w-full flex justify-center">
        <Image
          src="/images/whoweare.png" // Ensure this image exists in the public folder
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
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          Who We Are{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          We Take The Best Footage{" "}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 p-2 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.{" "}
        </p>
        <button className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default WhoWeAre;
