import React from "react";
import DroneSystem from "@/components/application/DroneSystem";
import Essentials from "@/components/application/Essentials";
import ProductSection from "@/components/application/ProudctSection";
import TechApplication from "@/components/application/TechApplication";
import HeroSection from "@/components/home/HeroSection";
import { getApplicationData } from "@/utils/server";


const page = async () => {
const {
  loading,
  title,
  description,
  section1,
  section2,
  section3,
} = await getApplicationData();
if (!loading) return null;
  const data = {
    title: "Our Applications",
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
        video={"/videos/heroSection.mp4"}
      />
      <div className="bg-gray-50">
        <ProductSection sectionData={section1} />
        <DroneSystem sectionData={section2} />
      </div>
      <Essentials  />
      <TechApplication sectionData={section3} />
    </div>
  );
};

export default page;
