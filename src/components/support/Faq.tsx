"use client";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is a drone system, and how does it function?",
    answer:
      "A drone system consists of an unmanned aerial vehicle (UAV), remote controller, and onboard systems. It functions by receiving commands from a pilot or following pre-programmed flight paths.",
  },
  {
    question: "What are the main industries or applications that use drones?",
    answer:
      "Drones are widely used in agriculture, filmmaking, surveillance, logistics, construction, and environmental monitoring.",
  },
  {
    question: "What regulations must be followed when operating a drone?",
    answer:
      "Drone operators must follow regulations such as maintaining visual line of sight, avoiding restricted areas, and obtaining necessary licenses.",
  },
  {
    question: "What is the typical battery life and range of a drone?",
    answer:
      "Battery life varies from 15 minutes to several hours, depending on the drone type. Consumer drones typically have a range of 5-10 km.",
  },
  {
    question: "What safety precautions should be taken while flying a drone?",
    answer:
      "Ensure clear weather, avoid crowded areas, maintain line of sight, and follow local aviation laws to ensure safe operation.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="max-w-7xl lg:p-16  mx-auto ">
      {/* Content */}
      <div className="relative z-10 text-center lg:w-4/5 mx-auto  mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-7">
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[16px] xl:text-[16px] text-gray-700 mt-4 px-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="lg:px-28 space-y-4 p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-gray-900 border overflow-hidden">
            <button
              className="w-full text-left p-8 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? (
                  <FaAngleUp width={16} height={16} />
                ) : (
                  <FaAngleDown width={16} height={16} />
                )}
              </span>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "max-h-40 p-4 border-t bg-white"
                  : "max-h-0 p-0"
              }`}
            >
              {openIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
