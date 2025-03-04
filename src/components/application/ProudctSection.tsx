import Image from "next/image";
import HeaderSection from "../common/HeaderSection";
import {
  ISection,
  SectionContent,
  SectionResponse,
  SubContent,
} from "@/utils/server";

// const features = [
//   {
//     title: "Special Forces Support",
//     description:
//       "Providing advanced intelligence, surveillance, and communication solutions.",
//   },
//   {
//     title: "Urban Warfare ",
//     description:
//       "Enabling effective navigation and operation in built-up and complex areas.",
//   },
//   {
//     title: "Border Security",
//     description:
//       " Advanced monitoring and patrol capabilities for border protection.",
//   },
//   {
//     title: "Intelligence Gathering",
//     description: "Real-time data analysis and intelligence production.",
//   },
//   {
//     title: "Training Operations",
//     description: "Use of simulations and advanced training.",
//   },
// ];

const ProductSection = ({
  sectionData,
}: {
  sectionData: SectionResponse | undefined;
}) => {
  if (!sectionData) return null;
  return (
    <div className="max-w-7xl mx-auto p-4 lg:px-20 lg:py-44">
      <HeaderSection
        title={
          sectionData.title ||
          "Operational Excellence in Military Strategy and Tactics"
        }
        subTitle={sectionData.subTitle || " Advanced Drone System"}
        description={
          sectionData.description ||
          "The Skyfield Advanced Drone System combines mother-drone technology with specialized indoor drones for unprecedented operational flexibility:"
        }
        textColor="gray"
      />
      <div className="text-white  flex flex-col lg:flex-row items-start gap-10 ">
        {/* Image Section */}
        <div className="w-full lg:w-2/5 ">
          <Image
            src={
              sectionData?.coverImage
                ? `${process.env.NEXT_PUBLIC_API_URL}${sectionData.coverImage
                    .replace(/\\/g, "/")
                    .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
                : "/images/droneArmy.png" // Fallback image if no cover image
            }
            alt={sectionData?.title || "Indoor Drone"}
            width={500}
            height={500}
            className="object-cover md:h-[80vh] 2xl:h-[28vh] rounded-none w-full lg:w-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 pt-10">
          {/* Feature List */}
          <div className="flex flex-col gap-4">
            {sectionData.contents &&
              sectionData.contents.map(
                (feature: SectionContent, index: number) => (
                  <div key={index} className="flex flex-col lg:flex-row">
                    <div className="bg-[#FFA7A7] text-black font-thin p-3  lg:w-44 text-left">
                      {feature.title || "Feature Title"}
                    </div>
                    <div className="border text-gray-700 border-gray-500 p-3 flex-1">
                      {feature.description || "Feature Description"}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
