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
  const { loading, homePageData }: any = await getHomeData();
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
  } = homePageData[0];

  
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
        video={videoUrl || data?.video}
        link={link || "/contact-us"}
      />
      {homePageData && homePageData?.length > 1 && (
        <WhoWeAre sectionData={homePageData[1]} />
      )}
      {homePageData && homePageData?.length > 2 && (
        <Service sectionData={homePageData[2]} />
      )}
      {homePageData && homePageData?.length > 3 && (
        <VideoSection sectionData={homePageData[3]} />
      )}
      {homePageData && homePageData?.length > 4 && (
        <WeBestSection sectionData={homePageData[4]} />
      )}
      {homePageData && homePageData?.length > 5 && (
        <OurPartners sectionData={homePageData[5]} />
      )}
      {homePageData && homePageData?.length > 6 && (
        <Why sectionData={homePageData[6]} />
      )}
      {homePageData && homePageData?.length > 7 && (
        <LatestNews sectionData={homePageData[7]} />
      )}
    </div>
  );
};

export default Home;
