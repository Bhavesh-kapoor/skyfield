"use client";

// components/TrustedClientsGridCarousel.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OurPartners: React.FC = () => {
  const clients = [
    { id: 1, name: "Android", logo: "/images/client1.png" },
    { id: 2, name: "Kotlin", logo: "/images/client2.png" },
    { id: 3, name: "FireStore", logo: "/images/client3.png" },
    { id: 4, name: "Java", logo: "/images/client4.png" },
  ];



  return (
    <section className="py-12 bg-whitem max-w-7xl m-auto p-4 lg:p-0">
      <div className="m-auto w-3/5 text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-sm xl:text-sm font-normal tracking-widest text-gray-50 leading-7 mb-3">
          Our Commitments{" "}
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-50 leading-7">
          Our Partners{" "}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-100 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>

      <div className="relative overflow-hidden py-8">
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
              <div key={index} className="flex-shrink-0 w-36 h-20 rounded-lg">
                <Image
                  src={client.logo}
                  width={150}
                  height={20}
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
