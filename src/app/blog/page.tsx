import HeroSection from "@/components/home/HeroSection";
import { SectionData } from "@/utils/server";
import Image from "next/image";
import React from "react";

const page = () => {
  // if (!sectionData) return null;
  // const data = {
  //   title: "Blog",
  //   description:
  //     "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
  //   video: "/videos/heroSection.mp4",
  //   link: "/",
  // };
  return (
    <div className="bg-gray-50">
      {/* <HeroSection
        title={sectionData[0].title || data.title}
        description={sectionData[0].description || data.description}
        link={sectionData[0].link || data.link}
        video={sectionData[0].videoUrl || data.video}
      /> */}
      <div className="max-w-7xl lg:max-w-6xl m-auto p-4 lg:py-24">
        {/* Blog Header */}
        {/* <div className="mb-16">
          <Image
            src="/images/droneAlon.png"
            width={5000}
            height={3000}
            alt="Blog Banner"
            className="w-full h-80 object-cover rounded-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mt-6">Blog Title</h1>
          <p className="text-gray-500 text-sm mt-2">
            By <span className="font-semibold">Author Name</span> | Published on{" "}
            <span className="font-semibold">Date</span>
          </p>
        </div> */}

        {/* Blog Content */}
        {/* <div className="text-gray-700 leading-8">
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
        </div> */}

        {/* Comments Section */}
        {/* <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>
          <div className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="font-semibold">User Name</p>
              <p className="text-gray-600">
                This is a sample comment on the blog post.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">Another User</p>
              <p className="text-gray-600">
                Interesting insights! Thanks for sharing.
              </p>
            </div>
          </div>
        </div> */}

        {/* Latest Blogs Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800">Latest Blogs</h3>
          {/* <Blogs sectionData={null} /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
