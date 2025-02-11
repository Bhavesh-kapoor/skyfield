import LeaderShips from "@/components/aboutUs/Leaderships";
import Mission from "@/components/aboutUs/Mission";
import OurStory from "@/components/aboutUs/OurStorty";
import Vision from "@/components/aboutUs/Vision";
import WeDone from "@/components/aboutUs/WeDone";
import HeroSection from "@/components/home/HeroSection";
import { lexendDeca } from "@/data/font";

export default function Home() {
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
        title={data?.title}
        description={data?.description}
        video={data?.video}
        link={data?.link}
      />
      <div className="bg-[#b0b0b08c]">
        <Vision />
        <Mission />
      </div>
      <OurStory />
      <WeDone />
      <div className="bg-[#b0b0b08c]">
        <LeaderShips />
      </div>
    </div>
  );
}
