import React from "react";
import HeaderSection from "../common/HeaderSection";
import Image from "next/image";
import InfoCard from "./InfoCard";
import { ISection, SectionResponse } from "@/utils/server";

export default function Tech({
  sectionData,
}: {
  sectionData: SectionResponse | undefined;
}) {
  const datas = [
    {
      title: "Mother Drone System",
      listContent: [
        "5km operational range",
        "6kg payload capacity",
        "Advanced relay station",
        "Real-time data transmission",
        "Automated launch & recovery",
      ],
    },
    {
      title: "Indoor Tactical Drones",
      listContent: [
        "Thermal imaging capabilities",
        "Compact design for confined spaces",
        "Advanced stabilization",
        "Silent operation",
        "20-minute flight time",
      ],
    },
  ];
  return (
    <div className="max-w-7xl p-4 m-auto">
      <HeaderSection
        title={sectionData?.title || "Revolutionizing Aerial Operations"}
        subTitle={sectionData?.subTitle || " Advanced Drone System"}
        description={
          sectionData?.description ||
          "The Skyfield Advanced Drone System combines mother-drone technology with specialized indoor drones for unprecedented operational flexibility:"
        }
      />

      <div className="w-full lg:p-16 mx-auto">
        <Image
          src={
            sectionData?.coverImage
              ? `${process.env.NEXT_PUBLIC_API_URL}/${sectionData.coverImage
                  .replace(/\\/g, "/")
                  .replace(/^\/+/, "")}` // Handle backslashes and forward slashes
              : "/images/droneArmy.png" // Fallback image if no cover image
          }
          width={1200}
          height={300}
          alt={sectionData?.title || "Image 1"}
          className="object-cover h-[90vh] 2xl:h-[30vh] "
        />
      </div>
      <InfoCard datas={datas} />
    </div>
  );
}
