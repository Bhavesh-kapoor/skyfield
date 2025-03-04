"use client";
import {
  getBlogsListData,
  getNewsListData,
  ISection,
  SectionContent,
  SectionResponse,
  SubContent,
} from "@/utils/server";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const LatestNews = ({ sectionData }: { sectionData: SectionResponse }) => {
  const [loading, setLoading] = useState<any>();
  const [newsData, setNewsData] = useState<any[]>();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const { loadingListData, newsListPage }: any = await getNewsListData(); // ✅ Fetch latest blogs
        setNewsData(newsListPage);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // ✅ Runs only once

  if (!sectionData) return null;
  // const datas = sectionData.subContents || [
  //   {
  //     title: "The Higher the Camera, The Better Videos",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //     image: "/images/roadtree.png",
  //     date: "Jan 02 2025",
  //   },
  //   {
  //     title: "The Higher the Camera, The Better Videos",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //     image: "/images/trees.png",
  //     date: "Jan 02 2025",
  //   },
  //   {
  //     title: "The Higher the Camera, The Better Videos",
  //     description:
  //       "Our team of experts will help you to extend your drone operations to new heights.",
  //     image: "/images/ocean.png",
  //     date: "Jan 02 2025",
  //   },
  // ];
  return (
    <div className="max-w-7xl lg:max-w-6xl relative m-auto p-4">
      <div className="absolute top-44 left-[-50rem] inset-0 flex justify-center items-center">
        <div className="w-2/5  h-screen bg-gradient-to-r from-[#737373] via-10% via-[#737373] to-[#ffa7a7] opacity-30 rounded-full blur-3xl -z-40"></div>
      </div>
      <div className="m-auto lg:w-3/5 text-center mb-4 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData.subTitle || "Form The Blog"}{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData.title || "The Latest News"}{" "}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-100 mt-4 leading-8">
          {sectionData.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat"}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsData &&
          newsData.map((data: SectionContent, index: number) => {
            // Construct image URL
            const imageUrl = data?.image
              ? `${process.env.NEXT_PUBLIC_API_URL}${data.image.replace(
                  /\\+/g,
                  "/"
                )}`
              : "/images/pro1.png"; // Fallback image if no image URL is present

            return (
              <div
                key={index}
                className="container mx-auto p-4 flex flex-col lg:flex-col items-center justify-between"
              >
                {/* Image Section */}
                <div className="h-80 w-full flex justify-center">
                  <Image
                    src={imageUrl}
                    alt={data?.title || "Explore Image"}
                    width={800}
                    height={630}
                    className="rounded-none shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
                  />
                </div>

                {/* Right Column - Content */}
                <div className="w-full mt-8 lg:mt-4 lg:text-left">
                  <h2 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
                    {data?.subtitle || "Popular"}
                  </h2>
                  <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-gray-50 leading-7 mb-2">
                    {data?.title || "The Latest News"}
                  </h2>
                  <p className="text-gray-50 text-xs mb-4">{"13/12/2025"}</p>
                  <Link
                    href={data?.link || "/news"}
                    className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center"
                  >
                    Read More
                    <GoArrowUpRight width={20} height={20} className="ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LatestNews;
