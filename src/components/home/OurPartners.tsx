"use client";

// components/TrustedClientsGridCarousel.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ISection } from "@/utils/server";

const OurPartners = ({ sectionData }: { sectionData: ISection }) => {
  if (!sectionData) return null;
  // let clients = [
  //   { id: 1, name: "Android", coverImage:"", logo: "/images/client1.png" },
  //   { id: 2, name: "Kotlin", coverImage:"",logo: "/images/client2.png" },
  //   { id: 3, name: "FireStore", coverImage:"",logo: "/images/client3.png" },
  //   { id: 4, name: "Java", coverImage:"", logo: "/images/client4.png" },
  // ];
  const clients = sectionData.subContents;
  return (
    <section className="py-12 relative max-w-7xl m-auto p-4 lg:p-0">
      <div className="absolute top-32 inset-0 flex justify-center items-center">
        <div className="w-4/5    h-screen bg-gradient-to-bl from-[#737373] via-50% via-[#FFA7A7] to-[#737373] opacity-30 rounded-full blur-3xl -z-40"></div>
      </div>
      <div className="m-auto lg:w-3/5 text-center mb-16">
        <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          {sectionData?.subtitle || "Our Commitments"}{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          {sectionData?.title || "Our Partners"}{" "}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] line-clamp-3 md:line-clamp-none text-gray-100 mt-4 leading-8">
          {sectionData.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat"}
        </p>
      </div>

      <div className="relative overflow-hidden lg:wpy-8">
        <div className="relative flex overflow-hidden max-w-screen-xl mx-auto w-4/5">
          <motion.div
            className="flex space-x-6"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 35,
            }}
          >
            {/* Map clients to show in pairs */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0 w-36 h-32w rounded-lg">
                <Image
                  src={"/images/client1.png"}
                  width={300}
                  height={100}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
