import React from "react";
import HeaderSection from "../common/HeaderSection";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Advancing() {
  const data = {
    title: "Skyfield - Advancing Defense Technology for Tomorrow's Challenges",
    description:
      "Experience our integrated solutions firsthand. Schedule a demonstration with our team to see how Skyfield can enhance your operational capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 lg:px-20 text-white">
      <HeaderSection
        title={data?.title}
        subTitle={""}
        description={data?.description}
      />
      <Link
        href="/"
        className={` md:w-2/5 m-auto px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center`}
      >
        Get a Demo Today{" "}
        <GoArrowUpRight width={20} height={20} className="ml-2" />{" "}
      </Link>
    </div>
  );
}
