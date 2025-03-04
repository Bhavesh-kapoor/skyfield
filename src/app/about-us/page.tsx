import LeaderShips from "@/components/aboutUs/Leaderships";
import Mission from "@/components/aboutUs/Mission";
import OurStory from "@/components/aboutUs/OurStorty";
import Vision from "@/components/aboutUs/Vision";
import WeDone from "@/components/aboutUs/WeDone";
import HeroSection from "@/components/home/HeroSection";
import { lexendDeca } from "@/data/font";
import { getAboutData } from "@/utils/server";

const page = async () => {
  const { loading, aboutPageData }: any = await getAboutData();
  const {
    title,
    subTitle,
    description,
    coverImage,
    videoUrl,
    slug,
    link,
    contents,
  } = aboutPageData[0];
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
        link={link || "/contact-us"}
      />
      <div className="bg-[#b0b0b08c]">
        {aboutPageData && aboutPageData?.length > 1 && (
          <Vision sectionData={aboutPageData[1]} />
        )}
        {aboutPageData && aboutPageData?.length > 2 && (
          <Mission sectionData={aboutPageData[2]} />
        )}
      </div>
      {aboutPageData && aboutPageData?.length > 3 && (
        <OurStory sectionData={aboutPageData[3]} />
      )}
      {aboutPageData && aboutPageData?.length > 4 && (
        <WeDone sectionData={aboutPageData[4]} />
      )}
      <div className="bg-[#b0b0b08c]">
        {aboutPageData && aboutPageData?.length > 5 && (
          <LeaderShips sectionData={aboutPageData[5]} />
        )}
      </div>
    </div>
  );
};

export default page;
