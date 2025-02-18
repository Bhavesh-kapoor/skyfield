import HeroSection from "@/components/home/HeroSection";
import Advancing from "@/components/technology/Advancing";
import CommandCenter from "@/components/technology/CommandCenter";
import Next from "@/components/technology/Next";
import Tech from "@/components/technology/Tech";
import { getTechnologyData } from "@/utils/server";
import React from "react";

const page = async () => {
  const {
    loading,
    title,
    description,
    section1,
    section2,
    section3,
    section4,
  } = await getTechnologyData();
  if (!loading) return null;
  const data = {
    title: "Skyfield Advanced Defense Technologies",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div>
      <HeroSection
        title={title || data.title}
        description={description || data.description}
        link={data.link}
        video={data.video}
      />
      <Tech sectionData={section1} />
      <CommandCenter sectionData={section2} />
      <Next sectionData={section3} />
      <Advancing sectionData={section4} />
    </div>
  );
};

export default page;
