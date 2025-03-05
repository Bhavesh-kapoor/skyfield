import React from "react";
import DroneSystem from "@/components/application/DroneSystem";
import Essentials from "@/components/application/Essentials";
import ProductSection from "@/components/application/ProudctSection";
import TechApplication from "@/components/application/TechApplication";
import HeroSection from "@/components/home/HeroSection";
import { getApplicationData } from "@/utils/server";
import { section } from "framer-motion/client";

const page = async () => {
  const { loading, applicationPageData }: any = await getApplicationData();
  if (!loading) return null;
  const {
    title,
    subTitle,
    description,
    coverImage,
    videoUrl,
    slug,
    link,
    contents,
  } = applicationPageData[0];
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
        link={link || data?.description}
        video={videoUrl}
      />
     <div className="bg-gray-50">
        {applicationPageData && applicationPageData?.length > 1 && <ProductSection sectionData={applicationPageData[1]} />}
        {applicationPageData && applicationPageData?.length > 2 && <DroneSystem sectionData={applicationPageData[2]} />}
      </div>
        {applicationPageData && applicationPageData?.length > 3 && <Essentials sectionData={applicationPageData[3]} />}
        {applicationPageData && applicationPageData?.length > 4 && <TechApplication sectionData={applicationPageData[4]} />}
     </div>
  );
};

export default page;
