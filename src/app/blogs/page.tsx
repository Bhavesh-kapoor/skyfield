import React from "react";
import HeroSection from "../../components/home/HeroSection";
import Blogs from "@/components/blogs/Blog";
import { getBlogData, getBlogsListData } from "@/utils/server";

const page = async () => {
    const { loading, blogPageData }: any = await getBlogData();
    const {
      title,
      subTitle,
      description,
      coverImage,
      videoUrl,
      slug,
      link,
      contents,
    } = blogPageData[0];
    if (!loading) return null;
  const data = {
    title: "Our Latest Blogs",
    description:
      "SkyField, powered by Vanguard Systems Ltd., is your one-stop solution for Unmanned Systems Forces. We offer a comprehensive range of products and services designed to enhance the capabilities and effectiveness of your unmanned systems operations. SkyField is committed to fulfilling the evolving needs of Unmanned Systems Forces. We specialize in developing and manufacturing a comprehensive range of solutions, from extending the operator's reach beyond the frontlines to providing real-time situational awareness and advanced counter-UAS capabilities.",
    video: "/videos/heroSection.mp4",
    link: "/",
  };
  return (
    <div>
      <HeroSection
        title={title||data?.title}
        description={description||data?.description}
        link={link||data?.link}
        video={videoUrl||data?.video}
      />
      <div className="bg-gray-50">
        <Blogs />
      </div>
    </div>
  );
};

export default page;
