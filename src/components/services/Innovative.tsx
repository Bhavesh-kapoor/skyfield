"use client";

import Image from "next/image";

const features = [
  {
    title: "Compact Design",
    description: "Specially adapted for navigation in confined spaces",
  },
  {
    title: "Perfect Stability",
    description: "Advanced sensor system for precise control",
  },
  {
    title: "Advanced Imaging System",
    description:
      "Integrated thermal camera, LED/IR for perfect visibility in all lighting conditions",
  },
  {
    title: "Silent Operation",
    description: "Special aerodynamic design for noise reduction",
  },
  {
    title: "Extended Operation Time",
    description: "Up to 20 minutes of continuous flight",
  },
];

export default function Innovative() {
  return (
    <div className="text-white p-5 md:p-10 lg:p-20 flex flex-col lg:flex-row items-start gap-10 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 ">
        <Image
          src="/images/innovative.png"
          alt="Indoor Drone"
          width={500}
          height={500}
          className="object-cover h-screen rounded-none"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-2">
          Innovative Indoor Drones
        </h2>
        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Feature List */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col lg:flex-row">
              <div className="bg-[#FFA7A7] text-black font-thin p-3  lg:w-44 text-left">
                {feature.title}
              </div>
              <div className="border border-gray-500 p-3 flex-1">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
