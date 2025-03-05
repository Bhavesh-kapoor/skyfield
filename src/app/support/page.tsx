import React from "react";
import HeroSection from "../../components/home/HeroSection";
import SupportCard from "@/components/support/SupportCard";
import Faq from "@/components/support/Faq";
import ContactUsForm from "@/components/contact/ContactUsForm";

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
        video={''}
      />
      <div className="bg-gray-50">
        <SupportCard />
        <ContactUsForm details={false} />
        <Faq />
      </div>
    </div>
  );
}
