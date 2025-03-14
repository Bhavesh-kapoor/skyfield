import { ISection, SectionContent, SectionResponse } from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhoWeAre = ({ sectionData }: { sectionData: SectionResponse }) => {
  if (!sectionData) return null;

  return (
    <section className="container relative mx-auto p-4 sm:p-6 lg:p-12 xl:p-20 2xl:px-32 flex flex-col lg:flex-row items-center justify-center gap-8 ">
      <div className="absolute top-44 right-0 inset-0 flex justify-center items-center -z-50">
        <div className="w-2/5 h-screen bg-gradient-to-r from-[#737373] via-10% via-[#737373] to-[#ffa7a7] opacity-30 rounded-full blur-3xl -z-40"></div>
      </div>

      {/* Left Column - Image */}
      <div className="lg:w-2/5 w-full flex justify-center">
        <Image
          src={
            sectionData?.coverImage
              ? `${process.env.NEXT_PUBLIC_API_URL}/${sectionData?.coverImage
                  .replace(/\\/g, "/")
                  .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
              : "/images/droneArmy.png" // Fallback image if no cover image
          }
          alt="Who We Are Image"
          width={800}
          height={630}
          className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
        />
      </div>
      {/* Right Column - Content */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData?.subTitle || "Who We Are"}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "We Take The Best Footage"}
        </h2>
        <p className="text-sm sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-4 md:line-clamp-none text-gray-100 mt-4 p-2 leading-8">
          {sectionData?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
        </p>
        <Link
          href={"/about-us"}
          className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition"
        >
          Explore More
        </Link>
      </div>
    </section>
  );
};

export default WhoWeAre;
