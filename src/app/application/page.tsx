import DroneSystem from "@/components/application/DroneSystem";
import Essentials from "@/components/application/Essentials";
import ProductSection from "@/components/application/ProudctSection";
import TechApplication from "@/components/application/TechApplication";
import HeroSection from "@/components/home/HeroSection";
import React from "react";

export default function page() {
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
        title={data?.title}
        description={data?.description}
        link={data?.link}
        video={data?.video}
      />
      <ProductSection />
      <DroneSystem />
      <Essentials />  
      <TechApplication />
    </div>
  );
}
