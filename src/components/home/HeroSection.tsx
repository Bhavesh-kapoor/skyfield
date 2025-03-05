import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = ({
  title,
  description,
  video,
  link,
}: {
  title: string;
  description: string;
  link?: any;
  video: string;
}) => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen 2xl:h-[70vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[80vh] md:h-screen 2xl:h-[70vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video?`${process.env.NEXT_PUBLIC_API_URL}${video}` : "/videos/heroSection.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Opacity Effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center lg:justify-end 2xl:justify-center text-center text-white px-6 lg:w-3/5 m-auto p-4 mb-10">
        <h1 className="text-2xl md:text-4xl lg:4xl xl:5xl font-bold">
          {title || ""}
        </h1>
        <p className="text-sm line-clamp-4 md:line-clamp-none md:text-sm 2xl:text-fxl mt-4 max-w-2xl left-6 mb-10">
          {description || ""}
        </p>
        <div className="flex justify-between items-center">
          <Link
            href={link || ""}
            className="border border-gray-50 px-5 py-2 text-gray-50 flex justify-between items-center"
          >
            Learn More{" "}
            <GoArrowUpRight width={16} height={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
