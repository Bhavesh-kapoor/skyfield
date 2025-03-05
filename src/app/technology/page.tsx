import HeroSection from "@/components/home/HeroSection";
import Advancing from "@/components/technology/Advancing";
import CommandCenter from "@/components/technology/CommandCenter";
import Next from "@/components/technology/Next";
import Tech from "@/components/technology/Tech";
import { getTechnologyData } from "@/utils/server";
import React from "react";

const page = async () => {
  const { loading, technologyPageData }: any = await getTechnologyData();
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
  } = technologyPageData[0];
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
        link={link || data.link}
        video={videoUrl || data.video}
      />
    {technologyPageData && technologyPageData?.length > 1 && <Tech sectionData={technologyPageData[1]} />}
    {technologyPageData && technologyPageData?.length > 2 && <CommandCenter sectionData={technologyPageData[2]} />}
    {technologyPageData && technologyPageData?.length > 3 && <Next sectionData={technologyPageData[3]} />}
    {technologyPageData && technologyPageData?.length > 4 && <Advancing sectionData={technologyPageData[4]} />}
    </div>
  );
};

export default page;
