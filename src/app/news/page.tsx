import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function page() {
  const data = {
    title: "News",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  const News = [
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
    <div className="bg-gray-50">
      <HeroSection
        title={data.title}
        description={data.description}
        link={data.link}
        video={data.video}
      />
      <div className="max-w-7xl lg:max-w-6xl m-auto p-4 lg:py-24">
        {/* News Header */}
        <div className="mb-16">
          <Image
            src="/images/droneAlon.png"
            width={5000}
            height={3000}
            alt="Blog Banner"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mt-6">News Title</h1>
          <p className="text-gray-500 text-sm mt-2">
            By <span className="font-semibold">Author Name</span> | Published on{" "}
            <span className="font-semibold">Date</span>
          </p>
        </div>

        {/* Blog Content */}
        <div className="text-gray-700 leading-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <p>
            Curabitur venenatis magna in cursus faucibus. Donec scelerisque
            sapien eget ligula pharetra, ac volutpat velit tincidunt.
          </p>
          <p>
            Morbi fermentum libero et justo pharetra, ac vulputate arcu tempor.
            Integer id libero eu purus venenatis commodo.
          </p>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>
          <div className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold">User Name</p>
              <p className="text-gray-600">
                This is a sample comment on the news.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">Another User</p>
              <p className="text-gray-600">
                Interesting insights! Thanks for sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Latest News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {News &&
              News?.map((data, index) => (
                <div
                  key={index}
                  className="container mx-auto p-4 flex flex-col lg:flex-col items-center justify-between"
                >
                  {/* Left Column - Image */}
                  <div className=" h-80  w-full flex justify-center">
                    <Image
                         src={
                          data?.image
                            ? `${process.env.NEXT_PUBLIC_API_URL}${data.image
                                .replace(/\\/g, "/")
                                .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
                            : "/images/droneArmy.png" // Fallback image if no cover image
                        }// Ensure this image exists in the public folder
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
                    <Link
                      href={"/news"}
                      className="mt-6 px-6 py-3 sm:px-8 sm:py-2 text-sm sm:text-base md:text-lg bg-transparent text-white rounded-none shadow-md border transition flex justify-center items-center"
                    >
                      Read More{" "}
                      <GoArrowUpRight width={20} height={20} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
