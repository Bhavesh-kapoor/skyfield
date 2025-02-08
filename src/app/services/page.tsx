import HeroSection from "@/components/home/HeroSection";
import Advantages from "@/components/services/Advantages";
import Innovation from "@/components/services/Innovation";
import Innovative from "@/components/services/Innovative";
import SkillFields from "@/components/services/SkillFields";
import Specialization from "@/components/services/Specialization";
import { lexendDeca } from "@/data/font";
import React from "react";

export default function page() {
  const data = {
    title: "Services",
    description:
      "  SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS  capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div className={`${lexendDeca?.className}`}>
      <HeroSection
        title={data?.title}
        description={data?.description}
        link={data?.link}
        video={data?.video}
      />
      <SkillFields />
      <Innovation />
      <Advantages />
      <Innovative />
      <Specialization />
    </div>
  );
}
