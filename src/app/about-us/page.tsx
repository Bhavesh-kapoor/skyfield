import LeaderShips from "@/components/aboutUs/Leaderships";
import Mission from "@/components/aboutUs/Mission";
import OurStory from "@/components/aboutUs/OurStorty";
import Vision from "@/components/aboutUs/Vision";
import WeDone from "@/components/aboutUs/WeDone";
import HeroSection from "@/components/home/HeroSection";
import { lexendDeca } from "@/data/font";
import { getAboutData } from "@/utils/server";

const page = async () => {
  const {
    loading,
    title,
    description,
    section1,
    section2,
    section3,
    section4,
  } = await getAboutData();
  if (!loading) return null;
  const data = {
    title: "About Us",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className={`${lexendDeca.className}`}>
      <HeroSection
        title={title || data?.title}
        description={description || data?.description}
        video={data?.video}
        link={"/contact"}
      />
      <div className="bg-[#b0b0b08c]">
        <Vision sectionData={section1} />
        <Mission sectionData={section2} />
      </div>
      <OurStory sectionData={section3} />
      <WeDone />
      <div className="bg-[#b0b0b08c]">
        <LeaderShips sectionData={section4} />
      </div>
    </div>
  );
};

export default page;
