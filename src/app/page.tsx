import HeroSection from "@/components/home/HeroSection";
import LatestNews from "@/components/home/LatestNews";
import OurPartners from "@/components/home/OurPartners";
import Service from "@/components/home/Service";
import VideoSection from "@/components/home/VideoSection";
import WeBestSection from "@/components/home/WeBestSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import Why from "@/components/home/Why";
import { lexendDeca } from "@/data/font";
import { getHomeData } from "@/utils/server";

const Home = async () => {
  const {
    loading,
    title,
    description,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  } = await getHomeData();
  if (!loading) return null;
  const data = {
    title: "Your All In One Solution For Unmanned System Force",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className={lexendDeca.className}>
      <HeroSection
        title={title || data?.title}
        description={description || data?.description}
        video={ data?.video}
        link={"/contact"}
      />
      {section1 && <WhoWeAre sectionData={section1} />}
      {section2 && <Service sectionData={section2} />}
      {section3 && <VideoSection sectionData={section3} />}
      {section4 && <WeBestSection sectionData={section4} />}
      {section5 && <OurPartners sectionData={section5} />}
      {section6 && <Why sectionData={section6} />}
      {section7 && <LatestNews sectionData={section7} />}
    </div>
  );
};

export default Home;
