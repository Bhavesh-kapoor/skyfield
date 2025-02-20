import React from "react";
import HeroSection from "../../components/home/HeroSection";
import OpenPosition from "@/components/careers/OpenPositions";
import WhyJoin from "@/components/careers/WhyJoin";
import { getCareerData } from "@/utils/server";

const page = async () => {
  const { loading, title, description, section1, section2, section3 } =
    await getCareerData();
  if (!loading) return null;
  const data = {
    title: "Working at SkyField",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div>
      <HeroSection
        title={title || data?.title}
        description={description || data?.description}
        link={data?.link}
        video={data?.video}
      />
      <div className="bg-gray-50">
        <OpenPosition sectionData={section1} />
        <WhyJoin sectionData={section2} section2Data={section3} />
      </div>
    </div>
  );
};



export default page;
