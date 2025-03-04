import React from "react";
import HeaderSection from "../common/HeaderSection";
import Image from "next/image";
import { ISection, SectionResponse } from "@/utils/server";

export default function SkillFields({
  sectionData,
}: {
  sectionData: SectionResponse | undefined;
}) {
  return (
    <div className="max-w-7xl p-4 m-auto">
      <HeaderSection
        title={
          sectionData?.title ||
          "Revolutionary Integrated Drone System for Complex Missions"
        }
        subTitle={sectionData?.subTitle || "Skyfield Advanced Drone System"}
        description={
          sectionData?.description ||
          "Breakthrough Innovation in Integrated Drone Systems Skyfield presents the next generation of operational drone systems. Our advanced system combines an innovative mother drone serving as a launch and communication station, with specialized Indoor drones for missions inside buildings and complex environments. Skyfield, a leader in advanced drone solutions, brings cutting-edge technology to the modern battlefield."
        }
      />

      <div className="w-full lg:p-16 mx-auto">
        <Image
          src={
            sectionData?.coverImage
              ? `${process.env.NEXT_PUBLIC_API_URL}${sectionData.coverImage
                  .replace(/\\/g, "/")
                  .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
              : "/images/droneArmy.png" // Fallback image if no cover image
          }
          width={1200}
          height={300}
          alt={sectionData?.title || "Image 1"}
          className="object-cover h-[90vh] 2xl:h-[30vh]  "
        />
      </div>
    </div>
  );
}
