import HeroSection from "@/components/home/HeroSection";
import LatestNews from "@/components/home/LatestNews";
import OurPartners from "@/components/home/OurPartners";
import Service from "@/components/home/Service";
import VideoSection from "@/components/home/VideoSection";
import WeBestSection from "@/components/home/WeBestSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import Why from "@/components/home/Why";

export default function Home() {
  const data = {
    title: "Your All In One Solution For Unmanned System Force",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className="">
      <HeroSection title={data?.title} description={data?.description} video={data?.video} link={data?.link} />
      <WhoWeAre />
      <Service />
      <VideoSection />
      <WeBestSection />
      <OurPartners />
      <Why />
      <LatestNews />
    </div>
  );
}
