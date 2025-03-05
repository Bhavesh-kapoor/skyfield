import React from "react";
import HeroSection from "../../components/home/HeroSection";
import ContactUsForm from "@/components/contact/ContactUsForm";
import { getContactUsData } from "@/utils/server";

const page =async () => {
  const { loading, careerPageData }: any = await getContactUsData();
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
  } = careerPageData[0];
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
        title={title || data?.title}
        description={description || data?.description}
        link={link || "/contact-us"}
        video={videoUrl}
      />
      <div className="bg-gray-50">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default page;
